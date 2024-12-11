import React from "react";
import emptyStar from "../assets/star_rating.svg";
import filledStar from "../assets/star_rating_filled.svg";

export default function Rating({ rating, maxStars = 5 }) {
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? filledStar : emptyStar}
          alt={star <= rating ? "filled star" : "empty star"}
          className="star-icon"
        />
      ))}
    </div>
  );
}