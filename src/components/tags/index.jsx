import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="px-[0.8em] py-[0.8em] border-[1px] border-black rounded-3xl text-xs">
      {name}
    </div>
  );
};

export default Tag;
