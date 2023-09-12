import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"), // Add a space after "Bearer"
          },
        }
      );
      // You can access the response data here if needed
      // const userData = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <>This is home page</>;
};

export default HomePage;
