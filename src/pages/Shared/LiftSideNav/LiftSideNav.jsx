import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LiftSideNav = () => {
  const [categories,SetCategories]  =  useState([])
  useEffect(()=>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => SetCategories(data))
  },[])
  return (
    <div>
       <h2 className="">All Categories</h2>
       {
        categories.map(category =><Link to={`/category/${category.id}`} key={category.id} className="block ml-4 text-xl font-semibold">{category.name}</Link>)
       }
    </div>
  );
};

export default LiftSideNav;