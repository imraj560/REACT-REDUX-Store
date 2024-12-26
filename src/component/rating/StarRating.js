import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const StarRating = ({rating, totalStars = 5})=>{

    return (
        <div>
          {[...Array(totalStars)].map((_, i) => (

            i < rating ? <StarFill size={18} style={{ color: i < rating ? "black" : "gray", marginRight: "5px" }} /> : <Star size={18} style={{ color: i < rating ? "gold" : "gray", marginRight: "5px" }} />
          
          ))}
        </div>
      );

}

export default StarRating;