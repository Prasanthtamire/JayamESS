require("dotenv").config();

module.exports = {
  user: process.env.DB_USER || "sqlpro",
  password: process.env.DB_PASSWORD || "Jayam@1418",
  server: process.env.DB_SERVER || "192.168.1.11",
  port: parseInt(process.env.DB_PORT) || 9005,
  database: process.env.DB_NAME || "HRMS_BASE_DEV",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};
