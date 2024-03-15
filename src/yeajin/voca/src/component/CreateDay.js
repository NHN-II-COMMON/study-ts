import useFetch from "../hooks/useFetch"
import {useNavigate} from "react-router-dom";

export default function CreateDay(){
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();

    function addDay(){
        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               day:days.length + 1
            }),
        }).then(res => {
            if(res.ok){
                alert("생성이 완료 되었습니다.");
                history.push(`/`);  // Link to 처럼 a태그를 사용하지 않고 페이지 전환시 유용하게 사용
            }
        });

    }
    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}