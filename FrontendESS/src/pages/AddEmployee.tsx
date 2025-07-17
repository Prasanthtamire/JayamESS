// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "../css/Addemployee.css"; 
// import "../css/Dummy.css";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [expanded, setExpanded] = useState(true); // Accordion starts expanded
//   const [activeTab, setActiveTab] = useState(0);
//   const navigate = useNavigate();

//   // Handle Accordion Change (Toggle open and close)
//   const handleAccordionChange = () => {
//     setExpanded(!expanded); // Toggle expanded state
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };
//   const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
// const [employeeDetailsExpanded, setEmployeeDetailsExpanded] = useState(true);
//   // Static Employee Data
//   const employeeData = [
//     {
//       code: "E001",
//       name: "John Doe",
//       lastName: "Doe",
//       phone: "1234567890",
//       location: "Hyderabad",
//       Status: "Active",
//     },
//     {
//       code: "E002",
//       name: "Jane Smith",
//       lastName: "Smith",
//       phone: "0987654321",
//       location: "Bangalore",
//       Status: "Active",
//     },
//     {
//       code: "E003",
//       name: "Jane Smith",
//       lastName: "Smith",
//       phone: "0987654321",
//       location: "Bangalore",
//       Status: "Active",
//     },

//   ];
//   const handleNewEmployeeClick = () => {
//     navigate("/accounts/master/NewEmployee"); // Redirect to newemployee page
//   };

//   return (
//     <div className="container mt-3">
//       <form>
//         {/* Employee Form Accordion */}
//         <Accordion expanded={employeeFormExpanded} onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography className="Mainheading">Employee</Typography>
//           </AccordionSummary>
//           <AccordionDetails >
//             <div className="container">
//               <div className="row mb-2">
//   <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
//     <label htmlFor="branch" className="form-label">
//       Branch <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="branch" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="employeeCode" className="form-label">
//       Employee Code <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="employeeCode" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="employeeName" className="form-label">
//       Employee Name <span className="text-danger">*</span>
//     </label>
//     <input type="text" id="employeeName" className="form-control" placeholder="Enter name" required />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="department" className="form-label">
//       Department <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="department" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="designation" className="form-label">
//       Designation <span className="text-danger">*</span>
//     </label>
//     <input type="text" id="designation" className="form-control" placeholder="Enter name" required />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="paymentMode" className="form-label">
//       Status <span className="text-danger">*</span>
//     </label>
//     <select id="paymentMode" className="form-select">
//       <option value="" disabled selected>Select</option>
//       <option value="Active">Active</option>
//       <option value="Inactive">Inactive</option>
//     </select>
//   </div>
// </div>

//             </div>
//           </AccordionDetails>
//         </Accordion>
//       </form>

//       {/* Action Buttons */}
//       <Grid container spacing={1} className="button-container">
//         <Grid item xs={12} sm={3} md={1} lg={1}>
//           <Button variant="contained" className="view-button">
//             Save
//           </Button>
//         </Grid>

//       </Grid>

//       {/* Employee Data Table Accordion */}
//     <Accordion expanded={expanded} onChange={handleAccordionChange}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//     aria-controls="panel2a-content"
//     id="panel2a-header"
//   >
//     <Typography className="Mainheading">Employee Details</Typography>
//   </AccordionSummary>

//   <AccordionDetails>
//     <div className="table-responsive">
//       <table className="table table-striped custom-table">
//         <thead>
//           <tr>
//             <th>Click</th>
//             <th>Code</th>
//             <th>Employee Name</th>
//             <th>Branch</th>
//             <th>Department</th>
//             <th>Designation</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employeeData.map((employee, index) => (
//             <tr key={index}>
//               <td className="action-icons">
//                 <i
//                   className="bi bi-pencil me-2"
//                   title="Edit"
//                   onClick={() => navigate("/EditEmployee")}
//                   style={{ cursor: "pointer" }}
//                 ></i>
//                 <i
//                   className="bi bi-trash me-2"
//                   title="Delete"
//                   style={{ cursor: "pointer" }}
//                 ></i>
//                 <i
//                   className="bi bi-eye"
//                   title="View"
//                   onClick={() => navigate("/ViewEmployee")}
//                   style={{ cursor: "pointer" }}
//                 ></i>
//               </td>
//               <td>{employee.code}</td>
//               <td>{employee.name}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.location}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.phone}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.Status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </AccordionDetails>
// </Accordion>

//     </div>
//   );
// };

// export default Employee;
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/TableStyles.css";

// import {
//   MDBBadge,
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
// } from "mdb-react-ui-kit";

// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Button,
//   Grid,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const Employee = () => {
//   const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
//   const [expanded, setExpanded] = useState(true);

//   const employees = [
//     {
//       name: "John Doe",
//       email: "john.doe@gmail.com",
//       img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
//       phone: "7894561254",
//       department: "Development",
//       designation: "Full Stack Developer",
//       status: "Active",
//     },
//     {
//       name: "Alex Ray",
//       email: "alex.ray@gmail.com",
//       img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
//       phone: "9876543210",
//       department: "QA",
//       designation: "Tester",
//       status: "InActive",
//     },
//     {
//       name: "Kate Hunington",
//       email: "kate.hunington@gmail.com",
//       img: "https://mdbootstrap.com/img/new/avatars/7.jpg",
//       phone: "9123456780",
//       department: "Design",
//       designation: "UI/UX Designer",
//       status: "Notice Period",
//     },
//   ];

//   return (
//     <div className="container-fluid mt-0 px-3" >
//       {/* Top Accordion - Employee Form */}
//       <Accordion expanded={employeeFormExpanded} onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//         >
//           <Typography className="Mainheading">Employee</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div className="row">
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Branch <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Branch" />
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Employee Code <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Code" />
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Employee Name <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Name" />
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Department <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Department" />
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Designation <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Designation" />
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3">
//               <label className=" form-label">Status <span className="text-danger form-label">*</span></label>
//               <select className="form-select">
//                 <option value="">Select</option>
//                 <option value="Active">Active</option>
//                 <option value="InActive">InActive</option>
//                 <option value="Notice Period">Notice Period</option>
//               </select>
//             </div>
//           </div>
//         </AccordionDetails>
//       </Accordion>

//       {/* Save Button */}
//       <Grid container spacing={1} className="mt-3">
//         <Grid item xs={12} sm={3} md={2} lg={1}>
//           <Button variant="contained" className="save-button w-100">
//             Save
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Bottom Accordion - Employee Table */}
//       <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} className="mt-4">
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//         >
//           <Typography className="Mainheading">Employee Details</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div className="table-responsive">
//             <MDBTable align="middle" className="table-bordered table-hover employee-table">
//               <MDBTableHead>
//                 <tr>
//                   <th>Employee</th>
//                   <th>Phone</th>
//                   <th>Department</th>
//                   <th>Designation</th>
//                   <th>Status</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 {employees.map((emp, i) => (
//                   <tr key={i}>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <img src={emp.img} alt="avatar" className="rounded-circle table-avatar" />
//                         <div className="ms-3">
//                           <p className="fw-bold mb-1">{emp.name}</p>
//                           <p className="text-muted mb-0">{emp.email}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td>{emp.phone}</td>
//                     <td>{emp.department}</td>
//                     <td>{emp.designation}</td>
//                     <td>
//                       <MDBBadge
//   className={`employee-badge ${
//     emp.status === "Active"
//       ? "badge-active"
//       : emp.status === "InActive"
//       ? "badge-inactive"
//       : "badge-notice"
//   }`}
// >
//   {emp.status}
// </MDBBadge>
//                     </td>
//                   </tr>
//                 ))}
//               </MDBTableBody>
//             </MDBTable>
//           </div>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default Employee;
import { useEffect, useState } from "react";
import { Avatar, Card, CardContent, Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css"; // Import external CSS
import "../css/TabsStyles.css"; // Import Bootstrap Tabs CSS
import axios from "../axiosInstance";
import FlashCard from "../components/FlashCard";
import { AddEmployee } from "../types/Employee";
import { SortDesc } from "lucide-react";


// Autocomplete fetch on input change (with debounce)


const Addemployee = () => {
  const [loading, setLoading] = useState(false);
  const [employeeCode, setemployeeCode] = useState<AddEmployee[]>([]);
  const [branch, setBranches] = useState<AddEmployee[]>([]);
  const [band, setband] = useState<AddEmployee[]>([]);
  const [Department, setDepartment] = useState<AddEmployee[]>([]);
  const [Designation, setDesignation] = useState<AddEmployee[]>([]);
  const [languagedata, setlanguagedata] = useState<AddEmployee[]>([]);
  const [shiftdata, setshiftdata] = useState<AddEmployee[]>([]);

 const [cost, setCost] = useState("");
   const [suggestionsCost, setsuggestionsCost] = useState<Array<{ MCCI_Description: string }>>([]);

  const [reportingTo, setReportingTo] = useState("");
   const [suggestionsReportingTo, setsuggestionsReportingTo] = useState<Array<{ EII_EMPLOYEE_NAME: string }>>([]);
  const [level1Reporting, setLevel1Reporting] = useState("");  
  const [suggestionsLevel1, setsuggestionsLevel1] = useState<Array<{ EII_EMPLOYEE_NAME: string }>>([]);
  const [level2Reporting, setLevel2Reporting] = useState("");
  const [suggestionsLevel2, setsuggestionsLevel2] = useState<Array<{ EII_EMPLOYEE_NAME: string }>>([]);


  const [MBRI_ID, setMBRI_ID] = useState("");
  const [EII_FIRSTNAME, setEII_FIRSTNAME] = useState("");
  const [EII_LASTNAME, setEII_LASTNAME] = useState("");
  const [MDGI_ID, setMDGI_ID] = useState("");
  const [EII_PHONE_NO, setEII_PHONE_NO] = useState("");
  const [EII_ALTPHONE_NO, setEII_ALTPHONE_NO] = useState("");
  const [EII_GENDER, setEII_GENDER] = useState("");
  const [EII_DEPARTMENT, setEII_DEPARTMENT] = useState("");
  const [EII_DESIGNATION, setEII_DESIGNATION] = useState("");
  const [EII_JOIN_DATE, setEII_JOIN_DATE] = useState("");
  const [MS_CODE, setMS_CODE] = useState("");
  const [EII_EMAIL, setEII_EMAIL] = useState("");
  const [EII_ALTEMAIL, setEII_ALTEMAIL] = useState("");
  const [Cost_Center, setCost_Center] = useState("");

  useEffect(() => {
    fetchEmployeeCode();
    branchdropdown();
    banddropdown();
    Departmentdropdown();
    Designationdropdown();
    Fetchlanguagedata();
    Fetchshiftsdata();

  }, []);


//   useEffect(() => {
//   const timer = setTimeout(() => {
//     if (cost.trim()) {
//       axios
//         .get(`/FetchingCost?query=${encodeURIComponent(cost)}`)
//         .then((res) => {
//           console.log("Response data:", res.data);
//           setsuggestionsCost(res.data || []);
//         })
//         .catch((err) => {
//           console.error("Fetch error:", err);
//           setsuggestionsCost([]);
//         });
//     } else {
//       setsuggestionsCost([]); 
//     }
//   }, 500);

//   return () => clearTimeout(timer);
// }, [cost]);
 useEffect(() => {
    const timer = setTimeout(() => {
      if (cost.trim()) {
        axios
          .get(`/FetchingCost?query=${encodeURIComponent(cost)}`)
          .then((res) => {
            console.log("Response data:", res.data);
            setsuggestionsCost(res.data || []);
          })
          .catch((err) => {
            console.error("Fetch error:", err);
            setsuggestionsCost([]);
          });
      } else {
        setsuggestionsCost([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [cost]);
useEffect(() => {
  const timer = setTimeout(() => {
    if (reportingTo.trim()) {
      axios
        .get(`/ReportingEmployee?query=${encodeURIComponent(reportingTo)}`)
        .then((res) => {
          console.log("Response data:", res.data);
          setsuggestionsReportingTo(res.data || []);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setsuggestionsReportingTo([]);
        });
    } else {
      setsuggestionsReportingTo([]); 
    }
  }, 500);

  return () => clearTimeout(timer);
}, [reportingTo]);


useEffect(() => {
  const timer = setTimeout(() => {
    if (level1Reporting.trim()) {
      axios
        .get(`/ReportingEmployee?query=${encodeURIComponent(level1Reporting)}`)
        .then((res) => {
          console.log("Response data:", res.data);
          setsuggestionsLevel1(res.data || []);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setsuggestionsLevel1([]);
        });
    } else {
      setsuggestionsLevel1([]); 
    }
  }, 500);

  return () => clearTimeout(timer);
}, [level1Reporting]);

useEffect(() => {
  const timer = setTimeout(() => {
    if (level2Reporting.trim()) {
      axios
        .get(`/ReportingEmployee?query=${encodeURIComponent(level2Reporting)}`)
        .then((res) => {
          console.log("Response data:", res.data);
          setsuggestionsLevel2(res.data || []);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setsuggestionsLevel2([]);
        });
    } else {
      setsuggestionsLevel2([]); 
    }
  }, 500);

  return () => clearTimeout(timer);
}, [level1Reporting]);
 
  const [flash, setFlash] = useState<{
    type: "success" | "error" | "warning";
    show: boolean;
    message: string;
    confirmAction?: () => void;
  }>({ type: "success", show: false, message: "" });

  const showFlash = (
    type: "success" | "error" | "warning",
    message: string,
    confirmAction?: () => void
  ) => {
    setFlash({ type, show: true, message, confirmAction });
  };
  const closeFlash = () => {
    setFlash((prev) => ({ ...prev, show: false, confirmAction: undefined }));
  };

  const fetchEmployeeCode = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/EmployeeCodefetch");
      setemployeeCode(response.data);
    } catch (error) {
      showFlash("error", "Error fetching Employee Code");
    } finally {
      setLoading(false);
    }
  };

  const branchdropdown = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/EmployeeBranchDropdown");
      setBranches(response.data);
    } catch (error) {
      showFlash("error", "Error fetching Branch Dropdown");
    } finally {
      setLoading(false);
    }
  };

  const banddropdown = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/EmployeeBandDropdown");
      setband(response.data);
    } catch (error) {
      showFlash("error", "Error fetching Band Dropdown");

    } finally {
      setLoading(false);
    }
  };
  const Departmentdropdown = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/EmployeeDepartmentDropdown");
      setDepartment(response.data);
    } catch (error) {
      showFlash("error", "Error fetching Department Dropdown");
    } finally {
      setLoading(false);
    }
  };

  const Designationdropdown = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/EmployeeDesignationDropdown");
      setDesignation(response.data);
    } catch (error) {
      showFlash("error", "Error fetching Designation Dropdown");
    } finally {
      setLoading(false);
    }
  };

  const Fetchlanguagedata = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/getLanguges");
      setlanguagedata(response.data);
    } catch (error) {
      showFlash("error", "Error fetching language data");
    } finally {
      setLoading(false);
    }
  };
  const Fetchshiftsdata = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/getShift");
      setshiftdata(response.data);
    } catch (error) {
      showFlash("error", "Error fetching language data");
    } finally {
      setLoading(false);
    }
  };


  const handleSave = async () => {

    const EII_EMP_CODE = employeeCode.map(emp => emp.eii_emp_code);

    const payload = { EII_EMP_CODE, MBRI_ID, EII_FIRSTNAME, EII_LASTNAME, MDGI_ID, EII_PHONE_NO, EII_ALTPHONE_NO, EII_GENDER, EII_DEPARTMENT, EII_DESIGNATION, EII_JOIN_DATE, MS_CODE };
    try {
      setLoading(true);

      const response = await axios.post("DepartmentCreate", payload);

      if (response.data.message?.toLowerCase().includes("success")) {
        showFlash("success", response.data.message);
      } else {
        showFlash("error", response.data.message);
      }
    } catch (error) {
      showFlash("error", error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  const [profilePhoto, setProfilePhoto] = useState(
    "" // Replace with actual image path
  );
  const [signature, setSignature] = useState("");

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSignature(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [expanded, setExpanded] = useState(true);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="profile-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <Card className="profile-card">
          <CardContent>
            <div className="profile-header">
              <div className="profile-photo-container">
                <Avatar
                  alt="Leslie Alexander"
                  src={profilePhoto}
                  className="profile-avatar"
                />
                <Button
                  variant="contained"
                  component="label"
                  className="upload-photo-button"
                >
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handlePhotoUpload}
                  />
                </Button>
              </div>
              <div className="profile-info">

                {Array.isArray(employeeCode) && employeeCode.map((emp, index) => (
                  <Typography variant="body2" className="profile-details" key={index}>
                    Code: {emp.eii_emp_code}
                  </Typography>
                ))}

              </div>
            </div>

            {/* Bootstrap Tabs */}
            <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
              <Tab eventKey="employee" title="Employee Details">
                <div className="row mb-3">
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      value={MBRI_ID}
                      onChange={(e) => setMBRI_ID(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {branch.map(brc => (
                        <option key={brc.MBRI_ID} value={brc.MBRI_ID}>
                          {brc.MBRI_Name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={EII_FIRSTNAME}
                      onChange={(e) => setEII_FIRSTNAME(e.target.value)}
                    />
                  </div>

                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Last Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={EII_LASTNAME}
                      onChange={(e) => setEII_LASTNAME(e.target.value)}
                    />
                  </div>


                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="band" className="form-label">
                      Employee Band <span className="text-danger">*</span>
                    </label>
                    <select
                      id="band"
                      className="form-select"
                      value={MDGI_ID}
                      onChange={(e) => setMDGI_ID(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {band.map(bnd => (
                        <option key={bnd.Txn_Id} value={bnd.Txn_Id}>
                          {bnd.MECD_Name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      value={EII_PHONE_NO}
                      onChange={(e) => setEII_PHONE_NO(e.target.value)}
                    />
                  </div>

                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Alternative Contact Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter  Number"
                      value={EII_ALTPHONE_NO}
                      onChange={(e) => setEII_ALTPHONE_NO(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select"
                      value={EII_GENDER}
                      onChange={(e) => setEII_GENDER(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="O">Others</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      value={EII_DEPARTMENT}
                      onChange={(e) => setEII_DEPARTMENT(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {Department.map(dep => (
                        <option key={dep.Txn_Id} value={dep.Txn_Id}>
                          {dep.MDPI_NAME}
                        </option>
                      ))}
                    </select>
                  </div>



                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="designation" className="form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <select
                      id="designation"
                      className="form-select"
                      value={EII_DESIGNATION}
                      onChange={(e) => setEII_DESIGNATION(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {Designation.map(des => (
                        <option key={des.Txn_Id} value={des.Txn_Id}>
                          {des.MDGI_NAME}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="DOB" className="form-label">
                      Joining Date<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="JoiningDate"
                      className="form-control"
                      value={EII_JOIN_DATE}
                      onChange={(e) => setEII_JOIN_DATE(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Job Type <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"

                    >
                      <option value="" >
                        Select
                      </option>
                      <option value="Probation">Probation</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="DOB" className="form-label">
                      Confirmation Date<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter  Email"
                    />
                  </div>



                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="shift" className="form-label">
                      Employee Shift <span className="text-danger">*</span>
                    </label>
                    <select
                      id="shift"
                      className="form-select"
                      value={MS_CODE}
                      onChange={(e) => setMS_CODE(e.target.value)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {shiftdata.map(std => (
                        <option key={std.Txn_Id} value={std.Txn_Id}>
                          {std.MS_NAME}
                        </option>
                      ))}
                    </select>
                  </div>


                <div className="col-sm-6 col-md-3 mb-3">
  <label htmlFor="officialEmail" className="form-label">
    Official Email ID<span className="text-danger">*</span>
  </label>
  <input
    type="email"
    id="officialEmail"
    className="form-control"
    placeholder="Enter Email"
    value={EII_EMAIL}
    onChange={(e) => setEII_EMAIL(e.target.value)}
    required
  />
</div>

<div className="col-sm-6 col-md-3 mb-2">
  <label htmlFor="personalEmail" className="form-label">
    Personal Email ID <span className="text-danger">*</span>
  </label>
  <input
    type="email"
    id="personalEmail"
    className="form-control"
    placeholder="Enter Email"
    value={EII_ALTEMAIL}
    onChange={(e) => setEII_ALTEMAIL(e.target.value)}
    required
  />
</div>

{/* <div className="col-sm-6 col-md-3 mb-3">
  <label htmlFor="costCenter" className="form-label">
    Cost Center<span className="text-danger">*</span>
  </label>
  <input
    type="text"
    id="costCenter"
    className="form-control"
    placeholder="Enter Cost Center"
    value={Cost_Center}
    onChange={(e) => setCost_Center(e.target.value)}
    required
  />
</div> */}
{/* 
<div className="col-sm-6 col-md-3 mb-3" style={{ position: "relative" }}>
  <label htmlFor="costCenter" className="form-label">
    Cost Center
  </label>
  <input
    id="costCenter"
    type="text"
    className="form-control"
    placeholder="Enter cost"
    value={cost}
    onChange={(e) => setCost(e.target.value)}
    autoComplete="off"
  />
  {suggestionsCost.length > 0 && (
    <div
      style={{
        border: "1px solid #ccc",
        maxHeight: "150px",
        overflowY: "auto",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        width: "100%",
      }}
    >
      {suggestionsCost.map((item, i) => {
        const name = item.MCCI_Description || "Unknown";
        return (
          <div
            key={i}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
            onClick={() => {
              setCost(name);
              setsuggestionsCost([]);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  )}
</div> */}
 <div className="col-sm-6 col-md-3 mb-3" style={{ position: "relative" }}>
      <label htmlFor="costCenter" className="form-label">Cost Center</label>
      <input
        id="costCenter"
        type="text"
        className="form-control"
        placeholder="Enter cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        autoComplete="off"
      />
      {suggestionsCost.length > 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            maxHeight: "150px",
            overflowY: "auto",
            backgroundColor: "white",
            position: "absolute",
            zIndex: 10,
            width: "100%",
          }}
        >
          {suggestionsCost.map((item, i) => {
            const name = item.MCCI_Description || "Unknown";
            return (
              <div
                key={i}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCost(name);               // Set selected value
                  setsuggestionsCost([]);     // Clear suggestions
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>



<div className="col-sm-6 col-md-3 mb-3" style={{ position: "relative" }}>
  <label htmlFor="reportingTo" className="form-label">
    Reporting To
  </label>
  <input
    id="reportingTo"
    type="text"
    className="form-control"
    placeholder="Enter Reporting"
    value={reportingTo}
    onChange={(e) => setReportingTo(e.target.value)}
    autoComplete="off"
  />
  {suggestionsReportingTo.length > 0 && (
    <div
      style={{
        border: "1px solid #ccc",
        maxHeight: "150px",
        overflowY: "auto",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        width: "100%",
      }}
    >
      {suggestionsReportingTo.map((item, i) => {
        const name = item.EII_EMPLOYEE_NAME || "Unknown";
        return (
          <div
            key={i}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
            onClick={() => {
              setReportingTo(name);
              setsuggestionsReportingTo([]);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  )}
</div>
 <div className="col-sm-6 col-md-3 mb-3" style={{ position: "relative" }}>
  <label htmlFor="level1Reporting" className="form-label">
    Level 1 Reporting
  </label>
  <input
    id="level1Reporting"
    type="text"
    className="form-control"
    placeholder="Enter Reporting"
    value={level1Reporting}
    onChange={(e) => setLevel1Reporting(e.target.value)}
    autoComplete="off"
  />
  {suggestionsLevel1.length > 0 && (
    <div
      style={{
        border: "1px solid #ccc",
        maxHeight: "150px",
        overflowY: "auto",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        width: "100%",
      }}
    >
      {suggestionsLevel1.map((item, i) => {
        const name = item.EII_EMPLOYEE_NAME || "Unknown";
        return (
          <div
            key={i}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
            onClick={() => {
              setLevel1Reporting(name);
              setsuggestionsLevel1([]);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  )}
</div>

<div className="col-sm-6 col-md-3 mb-3" style={{ position: "relative" }}>
  <label htmlFor="level2Reporting" className="form-label">
    Level 2 Reporting
  </label>
  <input
    id="level2Reporting"
    type="text"
    className="form-control"
    placeholder="Enter Reporting"
    value={level2Reporting}
    onChange={(e) => setLevel2Reporting(e.target.value)}
    autoComplete="off"
  />
  {suggestionsLevel2.length > 0 && (
    <div
      style={{
        border: "1px solid #ccc",
        maxHeight: "150px",
        overflowY: "auto",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        width: "100%",
      }}
    >
      {suggestionsLevel2.map((item, i) => {
        const name = item.EII_EMPLOYEE_NAME || "Unknown";
        return (
          <div
            key={i}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
            onClick={() => {
              setLevel2Reporting(name);
              setsuggestionsLevel2([]);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  )}
</div> 


                </div>

              </Tab>
              <Tab eventKey="personalDetails" title="Personal Details">

                <div className="row mb-3">
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Actual Date of Birth  <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="employeeCode"
                      className="form-control"
                      placeholder="Enter code"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Certificate Date of Birth<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Mark of Identification <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Date of Retirement<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Marital Status <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Nationality <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Indian</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Religion <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Contact Person Relation <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Emergency Contact Person Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Emergency Contact Phone No.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      PinCode  <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      PAN No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Passport No
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Passport Expiry Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      UAN
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Account No
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Aadhar No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="employeeCode" className="form-label">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>






                </div>

              </Tab>

              <Tab eventKey="language" title="Languages">
                <div>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleAccordionChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
                    >
                      <Typography className="Mainheading">Languages</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th className="text-name">Language Code</th>
                              <th className="text-name">Language</th>
                              <th className="text-name">Write</th>
                              <th className="text-name">Read</th>
                              <th className="text-name">Speak</th>
                            </tr>
                          </thead>
                          <tbody className="text-cls">
                            {languagedata.map((lang, index) => (
                              <tr key={index}>
                                <td>{lang.MLI_CODE}</td>
                                <td>{lang.MLI_NAME}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                              </tr>
                            ))}
                          </tbody>

                        </table>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Tab>

              <Tab eventKey="securityDeposit" title="Security Deposit">
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="location" className="form-label">
                    Payment Mode <span className="text-danger">*</span>
                  </label>
                  <select id="location" className="form-select">
                    <option value="Cash" disabled selected>
                      Select
                    </option>
                    <option value="Hyderabad">Cash</option>
                    <option value="Bangalore">Cheque</option>
                    <option value="Chennai">Bank</option>
                    <option value="Chennai">Demand Draft</option>
                  </select>
                </div>            </Tab>
              <Tab eventKey="projects" title="Projects">
                <div>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleAccordionChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
                    >
                      <Typography className="Mainheading">
                        Project Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>

                              <th className="text-name">Project</th>
                              <th className="text-name">Manager</th>
                              <th className="text-name">Action</th>

                            </tr>
                          </thead>
                          <tbody></tbody>
                          {/* <tbody>
                          <tr>
                       
                            <td className="Text-cls">Annapurna</td>
                            <td className="Text-cls">John</td>
                                 <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                         
                            <td className="Text-cls">Share</td>
                            <td className="Text-cls">Jane Smith</td>
                               <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                       
                            <td className="Text-cls">Spandana</td>
                            <td className="Text-cls">Mark Lee</td>
                                 <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                          </tr>
                        </tbody> */}
                        </table>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Tab>
            </Tabs>
          </CardContent>

          <div className="signature-box">
            <div className="signature-container">
              {/* Display Static Signature */}
              <div className="static-signature">
                <img
                  src="https://res.cloudinary.com/dijjxaphj/image/upload/v1738399725/handwritten-signature-signed-papers-documents-260nw-2248268539_ewissn.jpg" // Replace with your static signature URL
                  alt="Static Signature"
                  className="signature-image"
                />
              </div>
              <Button
                variant="contained"
                component="label"
                className="Edit-Signature-button"
              >
                Upload Signature
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleSignatureUpload}
                />
              </Button>
            </div>
          </div>
          <div className="button-row mt-3 d-flex gap-2">
            <Button
              type="submit"
              variant="contained"
              className="save-button">
              Save
            </Button>

            <Button variant="contained" className="view-button" >
              View
            </Button>
            <Button variant="contained" className="clear-button" >
              Clear
            </Button>
          </div>


        </Card>
      </form>
    </div>
  );
};

export default Addemployee;
