const express = require("express");
const sql = require("mssql");
const config = require("../config");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/EmployeeCodefetch", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "C");
    const result = await request.execute("USP_EMPLOYEE_INDUCTION_PERSONAL");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/EmployeeBranchDropdown", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "L");
    const result = await request.execute("Usp_ALLMasterData");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/EmployeeBandDropdown", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(2), "CA");
    const result = await request.execute("Usp_ALLMasterData");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/EmployeeDepartmentDropdown", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "D");
    const result = await request.execute("Usp_ALLMasterData");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/EmployeeDesignationDropdown", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "V");
    const result = await request.execute("USP_EMPLOYEE_INDUCTION_PERSONAL");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/getLanguges", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "Z");
    const result = await request.execute("USP_LANGUAGES");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/getShift", authenticateToken, async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input("Flag", sql.VarChar(1), "S");
    const result = await request.execute("Usp_ALLMasterData");

    res.json(result.recordset);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});



router.get('/FetchingCost', async (req, res) => {
  let query = req.query.query?.toLowerCase() || '';

  // If query is empty, use '%' wildcard for SQL LIKE matching all
  if (!query) {
    query = '%';
  }

  try {
    await sql.connect(config);

    const request = new sql.Request();
    request.input("MCCI_Code", sql.VarChar(50), query);
    request.input("Flag", sql.VarChar(1), "X");

    const result = await request.execute("USP_EMPLOYEE_ATTENDENCE");

    const EmployeeCost = result.recordset || [];

    const filtered = query === '%' 
      ? EmployeeCost 
      : EmployeeCost.filter(cst =>
          (cst.MCCI_Description || '').toLowerCase().includes(query) ||
          (cst.MCCI_Code || '').toLowerCase().includes(query)
        );

    res.json(filtered.slice(0, 10)); 
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});


router.get('/ReportingEmployee', async (req, res) => {
  let query = req.query.query?.toLowerCase() || '';

  // If query is empty, use '%' wildcard for SQL LIKE matching all
  if (!query) {
    query = '%';
  }

  try {
    await sql.connect(config);

    const request = new sql.Request();
    request.input("Eii_Emp_Code", sql.VarChar(50), query);
    request.input("Flag", sql.VarChar(2), "RT");

    const result = await request.execute("USP_EMPLOYEE_INDUCTION_PERSONAL");

    const employees = result.recordset || [];

    const filtered = query === '%' 
      ? employees 
      : employees.filter(emp =>
          (emp.EII_EMPLOYEE_NAME || '').toLowerCase().includes(query) ||
          (emp.EII_EMP_CODE || '').toLowerCase().includes(query)
        );

    res.json(filtered.slice(0, 10)); 
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
