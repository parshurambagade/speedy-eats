import React, { useEffect, useState } from 'react';
import { RES_LIST } from "../utils/constants";


const useResList = () => {
    const [resList, setResList] = useState([]);

    const [localList, setLocalList] = useState([]);

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const data = await fetch(RES_LIST);
        const json = await data.json();

        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setLocalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  return {resList, setResList, localList, setLocalList};
}

export default useResList