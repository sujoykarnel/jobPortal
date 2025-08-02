import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";

import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`http://localhost:5000/job-applications?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    axiosSecure
      .get(`/job-applications?email=${user.email}`)
      .then((res) => setJobs(res.data));
  }, [axiosSecure, user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Job Name & Location</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job) => (
            <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost">
                  <MdDeleteForever className="text-2xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
