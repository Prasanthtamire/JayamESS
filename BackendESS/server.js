const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

const loginRoutes = require("./routes/login");
const masterRoutes = require("./routes/masters");
const employeeRoutes = require("./routes/employee");

app.use("/api", loginRoutes);
app.use("/api", masterRoutes);
app.use("/api", employeeRoutes);

app.listen(5000, () => {
  console.log("🚀 Server is running at http://localhost:5000");
});


