import React from "react";

export default function HostInfo({ name, picture }) {
  return (
    <div className="host-info">
      <p>{name}</p>
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
}