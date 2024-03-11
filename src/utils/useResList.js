import React, { useEffect, useState } from 'react';
import { RES_LIST } from "../utils/constants";

const useResList = () => {
    const [resList, setResList] = useState([]);

    // const [localList, setLocalList] = useState([]);

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const data = await fetch(RES_LIST);
        console.log(data);
        const json = await data.json();

        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(resList);       
    }
  return {resList};
}

export default useResList