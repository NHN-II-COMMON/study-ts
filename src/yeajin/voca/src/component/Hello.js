import styles from "./Hello.module.css";


export default function Hello(){


    function showName() {
        console.log("Mike");
    }


    return (
        // jsx는 하나의 태그만 만들 수 있음
        <>   
            <h1>Hello</h1>
            <button onClick={showName}>show Name</button>
            <div className={styles.box}>hello</div>
        </>
    );
}

