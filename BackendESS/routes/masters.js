const express = require("express");
const sql = require("mssql");
const config = require("../config");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/DepartmentDataFetch", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "A");
    const result = await request.execute("USP_Department");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/DepartmentCreate", authenticateToken, async (req, res) => {
  const { code, name, description, status } = req.body;

  try {
    await sql.connect(config);
    const request = new sql.Request();

    request.input("MDPI_CODE", sql.VarChar(50), code);
    request.input("MDPI_NAME", sql.VarChar(100), name);
    request.input("MDPI_DESCRIPTION", sql.VarChar(250), description);
    request.input("MDPI_Status", sql.VarChar(10), status);
    request.input("MDPI_USERID", sql.Int, req.user.userId);
    request.input("Flag", sql.VarChar(1), "I");
    request.output("msg", sql.VarChar(200));

    const result = await request.execute("USP_Department");
    res.json({ message: result.output.msg, data: result.recordset });
  } catch (err) {
    console.error("Create error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put("/DepartmentUpdate/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { code, name, description, status } = req.body;

  try {
    await sql.connect(config);
    const request = new sql.Request();

    request.input("Txn_ID", sql.Int, parseInt(id));
    request.input("MDPI_CODE", sql.VarChar(50), code || "");
    request.input("MDPI_NAME", sql.VarChar(100), name || "");
    request.input("MDPI_DESCRIPTION", sql.VarChar(250), description || "");
    request.input("MDPI_Status", sql.VarChar(10), status || "");
    request.input("MDPI_USERID", sql.Int, req.user.userId);
    request.input("Flag", sql.VarChar(1), "U");
    request.output("msg", sql.VarChar(200));

    const result = await request.execute("USP_Department");
    res.json({ message: result.output.msg, data: result.recordset });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/DepartmentDelete/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await sql.connect(config);
    const request = new sql.Request();

    request.input("Txn_ID", sql.Int, parseInt(id));
    request.input("MDPI_USERID", sql.Int, req.user.userId);
    request.input("Flag", sql.VarChar(1), "D");
    request.output("msg", sql.VarChar(200));

    const result = await request.execute("USP_Department");
    res.json({ message: result.output.msg });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
