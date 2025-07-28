import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Addjob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "New Job Added Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center">
      <form onSubmit={handleAddJob} className="card-body w-full">
        <div className="text-center">
          <h2 className="font-bold text-2xl">Add a job</h2>
        </div>
        <fieldset className="fieldset w-full">
          <label className="label w-full">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
          />
          <label className="label">Job Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Job Location"
          />
          <label className="label">Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
          />

          <label className="label">Job Type</label>
          <select
            name="jobType"
            defaultValue="Pick a job type"
            className="select w-full"
          >
            <option disabled={true}>Pick a job type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </select>
          <label className="label">Category</label>
          <select
            name="category"
            defaultValue="Pick a category"
            className="select w-full"
          >
            <option disabled={true}>Pick a category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Teaching</option>
          </select>
        </fieldset>

        <div className="grid md:grid-cols-3 items-end">
          <fieldset className="fieldset w-full">
            <label className="label">Salary</label>
            <input
              type="number"
              name="min"
              className="input"
              placeholder="Minimum Salary"
            />
          </fieldset>
          <fieldset className="fieldset w-full">
            <input
              type="number"
              name="max"
              className="input"
              placeholder="Maximum Salary"
            />
          </fieldset>
          <fieldset className="fieldset w-full">
            <select
              name="currency"
              defaultValue="Pick a currency"
              className="select"
            >
              <option disabled={true}>Pick a currency</option>
              <option>bdt</option>
              <option>int</option>
              <option>usd</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="fieldset w-full">
          <label className="label">Job Description</label>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">Company Logo URL</label>
          <input
            type="url"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">Requirments</label>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirments"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">Responsibilities</label>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
            defaultValue={user.email}
          />
        </fieldset>

        <div className="flex justify-center">
          <button className="btn btn-neutral mt-4 px-8">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
