import React from "react";

const ListRow = props => {
  return (
    <div className="list-row">
      <p>{props.row.title}</p>
    </div>
  );
};
export default ListRow;
