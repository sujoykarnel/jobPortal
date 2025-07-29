import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> d948b20235a84694b99bb198afda5e0f988877c7

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`, {})
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  console.log(jobs);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Deadline</th>
<<<<<<< HEAD
            <th>Application Count</th>
            <th>Application</th>
=======
            <th>Favorite Color</th>
>>>>>>> d948b20235a84694b99bb198afda5e0f988877c7
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job, idx) => (
            <tr key={job._id}>
              <th>{idx + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
<<<<<<< HEAD
              <td>{job.applicationCount}</td>
              <td>
                <Link to={`/viewApplications/${job._id}`}>
                  <button className="btn btn-link">View Applications</button>
                </Link>
              </td>
=======
              <td>Blue</td>
>>>>>>> d948b20235a84694b99bb198afda5e0f988877c7
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
