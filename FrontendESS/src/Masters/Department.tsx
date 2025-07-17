import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dummy.css";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@mui/material/Button";
import FlashCard from "../components/FlashCard";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TablePagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Department } from "../types/Masters";

const Employee: React.FC = () => {
  const [employeeData, setEmployeeData] = useState<Department[]>([]);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTxnId, setEditTxnId] = useState<number | null>(null);

  const [flash, setFlash] = useState<{
    type: "success" | "error" | "warning";
    show: boolean;
    message: string;
    confirmAction?: () => void;
  }>({ type: "success", show: false, message: "" });

  useEffect(() => {
    fetchData();
  }, []);

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

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/DepartmentDataFetch");
      setEmployeeData(response.data);
    } catch (error) {
      showFlash("error", "Error fetching department data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const payload = { code, name, description, status };
    try {
      setLoading(true);
      let response;
      if (editTxnId !== null) {
        response = await axios.put(
          `http://localhost:5000/api/DepartmentUpdate/${editTxnId}`,
          payload
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/DepartmentCreate",
          payload
        );
      }
      if (response.data.message?.toLowerCase().includes("success")) {
  showFlash("success", response.data.message);
} else {
  showFlash("error", response.data.message);
}


            fetchData();
      handleClear();
    } catch (error: any) {
      const backendMessage =
        error.response?.data?.error || "Something went wrong";
      showFlash("error", backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: number) => {
    showFlash(
      "warning",
      "Are you sure you want to delete this department?",
      () => handleConfirmDelete(id)
    );
  };

  const handleConfirmDelete = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:5000/api/DepartmentDelete/${id}`
      );
      showFlash("success", response.data.message);
      fetchData();
    } catch (error: any) {
      const backendMessage =
        error.response?.data?.error || "Something went wrong";
      showFlash("error", backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleView = () => setExpanded(true);
  const handleAccordionChange = () => setExpanded(!expanded);
  const handleChangePage = (_event: unknown, newPage: number) =>
    setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClear = () => {
    setCode("");
    setName("");
    setDescription("");
    setStatus("");
    setEditIndex(null);
    setEditTxnId(null);
  };

  const paginatedData = employeeData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="employee-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <Accordion
          expanded={employeeFormExpanded}
          onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon className="expand-icon" />}>
            <Typography className="mainheading">Department</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row mb-2">
              <div className="col-md-4">
                <label htmlFor="code" className="form-label">
                  Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  className="form-control"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={editIndex !== null}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description" className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="status" className="form-label">
                  Status <span className="text-danger">*</span>
                </label>
                <select
                  id="status"
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="">Select status</option>
                  <option value="A">Active</option>
                  <option value="I">Inactive</option>
                </select>
              </div>
            </div>
            <div className="button-row mt-3 d-flex gap-2">
              <Button
                type="submit"
                variant="contained"
                className={editIndex !== null ? "update-button" : "save-button"}
                disabled={loading}
              >
                {editIndex !== null ? "Update" : "Save"}
              </Button>

              <Button variant="contained" className="view-button" onClick={handleView}>
                View
              </Button>
              <Button variant="contained" className="clear-button" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>

      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        className="details-accordian"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="expand-icon" />}>
          <Typography className="mainheading">Department Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Actions</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.Txn_ID}>
                    <td className="actions-icons">
                      <Pencil
                        size={20}
                        color="#0d6efd"
                        className="icon"
                        onClick={() => {
                          setEditIndex(employeeData.indexOf(item));
                          setEditTxnId(item.Txn_ID);
                          setCode(item.MDPI_CODE);
                          setName(item.MDPI_NAME);
                          setDescription(item.MDPI_DESCRIPTION);
                          setStatus(item.MDPI_Status_Id);
                          setEmployeeFormExpanded(true);
                        }}
                      />
                      <Trash2
                        size={20}
                        color="red"
                        className="icon"
                        onClick={() => handleDeleteClick(item.Txn_ID)}
                      />
                    </td>
                    <td>{item.MDPI_CODE}</td>
                    <td>{item.MDPI_NAME}</td>
                    <td>{item.MDPI_DESCRIPTION}</td>
                    <td>{item.MDPI_Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <TablePagination
              component="div"
              count={employeeData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
              className="pagination-box"
            />
          </div>

          {flash.show && (
            <FlashCard
              type={flash.type}
              title={
                flash.type === "success"
                  ? "Success"
                  : flash.type === "error"
                  ? "Error"
                  : "Warning"
              }
              message={flash.message}
              buttonText={flash.confirmAction ? "Confirm" : "OK"}
              onClose={closeFlash}
              onConfirm={flash.confirmAction}
              showCancel={!!flash.confirmAction}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Employee;
