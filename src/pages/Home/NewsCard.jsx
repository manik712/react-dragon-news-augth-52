/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({aNews}) => {
  const{title , image_url,details,_id} = aNews
  return (
    <div className="card mb-16  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>
     {
      details.length >200 ? <p>{details.slice(0,200)} <Link to={`/aNews/${_id}`} className="text-sky-800 font-bold">Read More..</Link> </p> :<p>{details}</p>
     }
    </p>
    
  </div>
</div>
  );
};

export default NewsCard;