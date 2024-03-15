import {useEffect, useState} from "react";

export default function useFetch(url){
    const[data, setData] = useState([]);

    useEffect(()=>{
        //API 비동기 통신을 위해 fetch 사용
        fetch(url)
        .then(res => {
            return res.json
        })
        .then(data =>{
            setData(data);
        })
    }, [url]); // 의존성 배열

    return data;
}