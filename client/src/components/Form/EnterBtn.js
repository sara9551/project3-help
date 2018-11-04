import React from "react";

export const EnterBtn = props => (

<button button="true" {...props} style={{float: "left"}} className="button is-link">
{props.children}
</button>

);