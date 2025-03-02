import React from "react";

// Creation of a React functional component using arrow function notation.
// The component takes props to display an event with a customizable color class.
const Event = (props) => {
  return (
    <td className={"Event " + props.color}>
        <h5>{props.event}</h5>
        <h6>{props.location}</h6>
    </td>
  );
};

export default Event;












