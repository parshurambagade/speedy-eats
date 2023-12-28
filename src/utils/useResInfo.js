import { useEffect, useState } from "react";
import { RES_INFO } from "../utils/constants";

const useResInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const data = await fetch(RES_INFO + resId);

        const json = await data.json();

        setResInfo(json);
    }

    return resInfo;
}

export default useResInfo