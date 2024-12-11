import React from "react";

export default function TitleAndLocation({ title, location }) {
  return (
    <div className="title-location">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}