import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    applicationDeadline,
    category,
    company,
    description,
    hr_email,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    title,
  } = useLoaderData();

  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold mb-4">Job Title : {title} </h2>
      <div>
        <h2 className="text-xl font-bold underline text-gray-600 mb-4">
          Job Summary
        </h2>
        <div className="grid grid-cols-2 gap-y-4 mb-4">
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600 ">Salary</span>
            </p>
            <p className="w-1/2 ">
              : {salaryRange.min} - {salaryRange.max}
            </p>
          </div>
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600">Category</span>
            </p>
            <p className="w-1/2">: {category}</p>
          </div>
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600">Deadline</span>
            </p>
            <p className="w-1/2">: {applicationDeadline}</p>
          </div>
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600">Job Type</span>
            </p>
            <p className="w-1/2">: {jobType}</p>
          </div>
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600">location</span>
            </p>
            <p className="w-1/2">: {location}</p>
          </div>
          <div className="flex ">
            <p className="w-1/2 font-bold">
              <span className="text-gray-600">Company</span>
            </p>
            <p className="w-1/2">: {company}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold underline text-gray-600 mb-4">
          Job Description
        </h2>
        <p className="mb-4">{description}</p>
        <h2 className="text-xl font-bold underline text-gray-600 mb-4">
          Responsibilities
        </h2>
        <p className="mb-4">{responsibilities}</p>
        <h2 className="text-xl font-bold underline text-gray-600 mb-4">
          Requirements
        </h2>
        <div className="flex gap-4 mb-4">{requirements.join(", ")}</div>
      </div>
      <h2 className="text-xl font-bold underline text-gray-600 mb-4">
        HR Email
      </h2>
      <p className="mb-4">{hr_email}</p>
      <Link to={`/jobApply/${_id}`}>
        <div className="btn btn-secondary my-4">Apply Now</div>
      </Link>
    </div>
  );
};

export default JobDetails;
