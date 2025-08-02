import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/signIn");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, signOutUser]);
  return axiosInstance;
};

export default useAxiosSecure;
