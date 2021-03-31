import React from "react";
import { baseUrl } from "../../constants";
import heart from "./img/Heart.svg"

const FavoritesItem = ({ item: { name, image, id }, redirectToService, toggleFavorites}) => {
    return (
        <div onClick={redirectToService}
            className="flex flex-col w-40 mb-4 md:mr-4 cursor-pointer">
           <div className="relative shadow-drop mb-2.5 rounded-xl">
                <img src={`${baseUrl}/images/${image}`} className="rounded-xl w-40"
                style={{ width: 160, height: 120 }}/>
                <button onClick={(event) => toggleFavorites(event)} 
                    className="absolute right-2 bottom-2">
                    <img src={heart}></img>
                </button>
           </div>
           <h2 className="text-white w-full text-xs md:text-base font-medium">{name}</h2>
        </div>
    )
};

export default FavoritesItem;