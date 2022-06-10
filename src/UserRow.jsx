import React from "react";

function UserRow({ user }) {
  return (
    <>
      <img
        className=" rounded-md h-48 w-48 object-cover mt-5"
        src={user.picture.large}
      ></img>

      <div className="text-xl font-medium pt-2">
        {" "}
        {user.name.title} {user.name.first} {user.name.last}{" "}
      </div>
      <div>Email: {user.email}</div>
      <div>Age: {user.dob.age} </div>
      <div className="flex">
        <a href="www.twitter.com">
          <img
            class="h-7 mr-4"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          ></img>
        </a>
        <a href="www.linkedin.com">
          <img
            class="h-7"
            src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
          ></img>
        </a>
      </div>
    </>
  );
}
export default UserRow;
