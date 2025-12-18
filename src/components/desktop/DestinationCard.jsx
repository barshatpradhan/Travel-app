// import React from 'react';
// // import heartIcon from '/src/assets/Heart-icon.png';
// // import locationIcon from '/src/assets/location.png';

// export default function DestinationCard({
//   title = 'Darjeeling',
//   location = 'West Bengal, India',
//   img = '',
//   favorite = false,
//   onFavorite = () => {}
// }) {
//   return (
//     <article className="dest-card card" role="article" aria-label={title}>

//       {/* IMAGE */}
//       <div className="dest-media">
//         <img src={img} alt={title} />

//         {/* HEART ICON */}
//         <button className="dest-fav" onClick={onFavorite}>
//           ♥
//         </button>
//       </div>

//       {/* BODY */}
//       <div className="dest-body">
//         <div>
//           <div className="dest-title">{title}</div>

//           <div className="dest-location">
//             <img src="/src/assets/location.png" alt="" />
//             {location}
//           </div>
//         </div>

//         {/* ACTION */}
//         <div className="dest-action">
//           {/* OVERLAPPING CIRCLES */}
//           <div className="dest-circles">
//             <span />
//             <span />
//             <span />
//             <span />
//           </div>

//           <button className="btn-book">Book Now</button>
//         </div>
//       </div>
//     </article>
//   );
// }




import heartIcon from '../../assets/Heart-icon.png';
import heartFilledIcon from '../../assets/Heart-icon.png';
import locationIcon from '../../assets/location.png';

export default function DestinationCard({
  title = 'Darjeeling',
  location = 'West Bengal, India',
  img = '',
  favorite = false,
  onFavorite = () => { }
}) {
  return (
    <article className="dest-card card" role="article" aria-label={title}>

      {/* IMAGE */}
      <div className="dest-media">
        <img src={img} alt={title} />

        {/* HEART ICON */}

        <button className="dest-fav" onClick={onFavorite}>
          <img
            src={favorite ? heartFilledIcon : heartIcon}
            alt="Favorite"
          />
        </button>

      </div>

      {/* BODY */}
      <div className="dest-body">
        <div>
          <div className="dest-title">{title}</div>

          <div className="dest-location">
            <img
              src={locationIcon}
              alt=""
              className="dest-location-icon"
            />
            <span>{location}</span>
          </div>
        </div>

        {/* ACTION */}
        <div className="dest-action">
          {/* OVERLAPPING CIRCLES */}
          <div className="dest-circles">
            <span />
            <span />
            <span />
            <span />
          </div>

          <button className="btn-book">Book Now</button>
        </div>
      </div>
    </article>
  );
}
