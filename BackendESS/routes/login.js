const express = require("express");
const sql = require("mssql");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config");
const authenticateToken = require("../middleware/auth");

const router = express.Router();
module.exports = router;


function encryptPasswordMD5Base64(plainText) {
  const md5Hash = crypto.createHash("md5").update(plainText, "utf8").digest();
  return Buffer.from(md5Hash).toString("base64");
}

//  POST /Login
router.post("/Login", async (req, res) => {
  const { employeeId, password } = req.body;

  const clientIp =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress;

  try {
    await sql.connect(config);
    const encryptedPassword = encryptPasswordMD5Base64(password.trim());


    const request = new sql.Request();
    request.input("UserName", sql.VarChar(50), employeeId.trim());
    request.input("Password", sql.VarChar(50), encryptedPassword);
    request.input("IpAddress", sql.VarChar(50), clientIp);

    const result = await request.execute("Check_UserName_Password");

    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      const EmpId = user.EII_EMP_ID;

      const imageRequest = new sql.Request();
      const empImageResult = await imageRequest.query(
        `EXEC usp_Employee_Image @Eii_Emp_Id = ${EmpId}`
      );
      const EmpImage = empImageResult.recordset[0]?.[''] || null;

      const codeRequest = new sql.Request();
      const empCodeResult = await codeRequest.query(
        `SELECT EII_EMP_CODE FROM EMPLOYEE_INDUCTION_DETAILS WHERE EII_EMP_ID = ${EmpId}`
      );
      const EmpCode = empCodeResult.recordset[0]?.EII_EMP_CODE || null;

     const token = jwt.sign({
  userId: user.Txn_ID,
  username: user.UserName,
  EmpImage,
  EmpCode
}, process.env.JWT_SECRET, { expiresIn: "1h" }); 

      res.json({
        success: true,
        message: "Login successful",
        token,
        user
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /LogOut
const tokenBlacklist = new Set();
router.post("/LogOut", authenticateToken,async (req, res) => {
  try {
    await sql.connect(config);

    const request = new sql.Request();
    request.input("Uid",sql.Int, req.user.userId);

    const result = await request.execute("Usp_Login_Attendence");

    const token = req.headers.authorization.split(" ")[1]; 
    tokenBlacklist.add(token);
    
    res.json({
      success: true,
      message: "Logout successful"
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "Logout failed" });
  }
});
