import React from "react";
// add radio button for "open now"
//drop down menu for neighborhood
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        value: "location",
        exhQty: 5
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
          <label>Where are you? </label>
          <input type="text" name="place" />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
