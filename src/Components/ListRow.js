import React from "react";

const ListRow = props => {
  return (
    <div className="list-row">
      <p>
        <i>{props.row.title}</i> at {props.row.gallery}; {props.row.hours}
      </p>
    </div>
  );
};
export default ListRow;
