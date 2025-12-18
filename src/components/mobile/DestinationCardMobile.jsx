
import React from 'react';

export default function DestinationCardMobile({ title, location, img }) {
  return (
    <article className="m-dest-card">
      <div className="m-dest-image-wrap">
        {img ? (
          <img src={img} alt={title} className="m-dest-image" />
        ) : (
          <div className="m-dest-image-placeholder" />
        )}
      </div>

      <div className="m-dest-body">
        <div className="m-dest-title">{title}</div>
        <div className="m-dest-location">{location}</div>

        <div className="m-dest-footer">
          <button className="m-dest-book">BOOK NOW</button>
        </div>
      </div>
    </article>
  );
}
