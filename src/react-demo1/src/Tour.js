import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {/* 一旦readMore为true则展示全部信息 */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : " read more"}
          </button>
        </p>
        <p>
          <button className='delete-btn' onClick={() => removeTour(id)}>no interested</button>
        </p>
      </footer>
    </article>
  );
};

export default Tour;
