import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  //   console.log(id, user);
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={submitJobApplication} className="card-body">
            <div className="text-center">
              <h2 className="font-bold text-2xl">Apply Job</h2>
            </div>
            <fieldset className="fieldset">
              <label className="label">LinkedIn URL</label>
              <input
                type="url"
                name="linkedIn"
                className="input"
                placeholder="LinkedIn URL"
              />
              <label className="label">GitHub URL</label>
              <input
                type="url"
                name="github"
                className="input"
                placeholder="GitHub URL"
              />
              <label className="label">Resume URL</label>
              <input
                type="url"
                name="resume"
                className="input"
                placeholder="Resume URL"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
