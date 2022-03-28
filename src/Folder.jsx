import { useState } from "react";

export const Folder = ({ data }) => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag((prev) => !prev);
  };
  if (data.isFolder) {
    return (
      <div style={{ paddingLeft: "2rem" }}>
        <div onClick={handleClick}>{data.name}</div>
        <div>
          {flag && data.items.map((el) => <Folder data={el} key={data.name} />)}
        </div>
      </div>
    );
  }
  return <div style={{ paddingLeft: "2rem" }}>{data.name}</div>;
};
