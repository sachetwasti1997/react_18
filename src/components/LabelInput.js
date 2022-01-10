import React from "react";

export function LabelInput(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input className="form-control" value={props.value} readOnly />
    </div>
  );
}