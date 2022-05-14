import { useState, useEffect } from 'react';
import Content from './content';
import Sidebar from './sidebar';
import styles from '../assets/css/main.css';

const Main = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        let json;
        xhr.onload = () => {
            json = JSON.parse(xhr.response);
            setPosts(json);
            console.log(json[0].comments[0].content);
        };
        xhr.open("GET", "http://localhost:5000/post", true);
        xhr.send();
    }, []);
    //Đặt useEffect ở Component cha (Main) thì nó sẽ chạy sau cùng
    //Tức là nó sẽ gọi render Component con (Content > Post) trước
    //Nếu trong Component con có tham chiếu đến các property của json trong useEffect nó sẽ lỗi
    //Cách 1: đưa useEffect này vào component con
    //Cách 2: dùng useContext, redux,...
    //Cách 3: Tạo property json initial trong posts state ở trên: Không nên


    //State
    const [state, setState] = useState("");

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const handleSubmit = () => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            alert(xhr.response);
        }
        const body = JSON.stringify({name: state});
        xhr.open("POST", "http://localhost:5000/algorithm/1", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(body);
    };

    return (
        <main className="main row">
            <Sidebar />
            <Content posts={posts}/>
            <div className="complementary col">
                <input type="text" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <p style={{"color": "rgb(27, 116, 228)"}}>{state}</p>
            </div>
        </main>
    );
}

export default Main;