import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Status has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications.map((app, idx) => (
            <tr>
              <th>{idx + 1}</th>
              <td>{app.applicant_email}</td>
              <td>Blue</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, app._id)}
                  defaultValue={app.status || "Change Status"}
                  className="select select-xs"
                >
                  <option disabled={true}>Change Status</option>
                  <option>Under Rewiew</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
