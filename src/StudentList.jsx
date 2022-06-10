import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRow from "./UserRow";

function StudentList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = axios.get(`https://randomuser.me/api/?results=5`);
    token.then((response) => {
      setUsers(response.data.results);
    });
  }, []);
  return (
    <>
      <h1 className="text-2xl font-semibold pl-4 pt-16 pb-4">Student List</h1>
      <div className="h-screen bg-gray-100">
        <div className="p-4 m-2 rounded-md bg-gray-50 shadow-lg">
          <span class="w-80 shrink-0"></span>
          <span class="w-80 shrink-0"></span>

          {users.map((u) => (
            <UserRow user={u}></UserRow>
          ))}
        </div>
      </div>
    </>
  );
}
export default StudentList;
