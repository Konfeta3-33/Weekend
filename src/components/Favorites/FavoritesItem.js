import React from "react";

import heart from "./img/Heart.svg"

const FavoritesItem = ({ item: { name, image, id } }) => {
    return (
        <div className="flex flex-col w-40 mb-4 md:mr-4 cursor-pointer">
           <div className="relative shadow-drop mb-2.5 rounded-xl">
                <img src={image} className="rounded-xl w-40"
                style={{height: 120 }}/>
                <div className="absolute right-2 bottom-2">
                    <img src={heart}></img>
                </div>
           </div>
           <h2 className="text-white w-full text-xs md:text-base font-medium">{name}</h2>
        </div>
    )
};

export default FavoritesItem;