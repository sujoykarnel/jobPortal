import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title} <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-justify">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              key={idx}
              className="border rounded-md text-center px-2 hover:text-purple-600 hover:bg-neutral-400"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary: <CiDollar /> {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${job._id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
