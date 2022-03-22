import React from "react";
interface MovieItemProps {
  title: string;
}

const MovieItem = ({ title }: MovieItemProps) => {
  return (
    <div className="movie-item">
      <p>{title}</p>
    </div>
  );
};

export default MovieItem;
