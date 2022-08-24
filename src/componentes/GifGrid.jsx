import { useState,useEffect } from "react";
import { GiftItem } from "./GiftItem";
import { getGif } from "../helpers/getGif";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GrifGrid = ({category}) => {
    const {images,isLoading} = useFetchGifs(category);
    console.log(isLoading);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GiftItem key={image.id} { ...image}   />  
                    ))            
                }   
            </div>
        </>
    )

}