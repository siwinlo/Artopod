import React from "react";
import ListRow from "./ListRow";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: []
    };
  }
  render() {
    return (
      <div className="list-container">
        {this.state.selected.map(row => (
          <div>
            <ListRow key={row.id} row={row} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
