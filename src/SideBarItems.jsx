import React from "react";

function SideBarItems(props) {
  return (
    <>
      <div className="flex ">
        <div className="text-white space-x-2 text-xl">{props.children}</div>
        <h1 className=" font-medium pl-4 -pt-1 text-white">{props.onClick}</h1>
      </div>
    </>
  );
}

export default SideBarItems;
