import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
const UserList = (props) => {
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    const token = axios.get("https://randomuser.me/api/?results=10");

    token.then((response) => {
      console.log(response.data.results);
      setUser(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="pt-5 max-w-screen-md mx-auto ">
        <h2 className=" text-2xl  font-semibold p-2">Students-List</h2>

        <div className="flex  flex-wrap justify-around">
          {user.map((d) => (
            <UserProfile
              key={d.name.first}
              firstName={d.name.first}
              lastName={d.name.last}
              photo={d.picture.large}
              country={d.location.country}
            ></UserProfile>
          ))}
          <span className="w-60"></span>
          <span className="w-60"></span>
        </div>
      </div>
    </>
  );
};
export default UserList;
