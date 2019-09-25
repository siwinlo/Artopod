import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        value: "Where are you?"
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="map-input">
        <form>
          <label>
            Where are you?
            <input type="text" name="place" />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
