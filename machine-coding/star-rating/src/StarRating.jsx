import { useState } from "react";

const StarRating = () => {
  let arr = new Array(5).fill(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className='container'>
      {arr.map((value, index) => {
        return (
          <span
            key={index}
            className={hover == 0 && index < rating || index < hover ? "color" : "uncolor"}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
