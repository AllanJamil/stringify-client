import React, {useEffect, useRef, useState} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);

    let socket = useRef(null);
    let stompClient = useRef(null);

    useEffect(() => {

        const connect =  (frame) => {
            stompClient.current.subscribe("/topic/count", function (messageCount) {
                let message = JSON.parse(messageCount.body);
                console.log(message);
                setCount(message.count);
                messages.push(message)
                setMessages(messages);
            });
        };
        socket.current = new SockJS("https://stringify-chat.herokuapp.com/ws");
        stompClient.current = Stomp.over(socket.current);

        stompClient.current.connect({}, connect ,
            function () {
                setTimeout(connect, 500);
                console.log("fail");

            });

    },[messages]);





    const increment = () => {
        let messageCount = {
            name, count
        };
        stompClient.current.send("/app/increase",{} ,JSON.stringify(messageCount));
    }


    const renderMessageCount = messages.map(message => {
        return (
            <tr key={message.count}>
                <td style={getStyle()} >{message.name}</td>
                <td style={getStyle()} >{message.count}</td>
            </tr>
        );
    });

    function getStyle() {
        return {border: "1px solid black"};
    }

    return (
        <div>
            <h1>Count: {count}</h1>

            <label htmlFor="name">Name</label>
            <br/>

            <input id="name" value={name} type="text" onChange={event => setName(event.target.value)}/>

            <button onClick={() => increment()} >Increment</button>

            <br/>
            <br/>
            <br/>
            <table style={getStyle()}>
                <thead>
                    <tr>
                        <th style={getStyle()} >Name</th>
                        <th style={getStyle()} >Count</th>
                    </tr>
                </thead>
                <tbody>
                    {renderMessageCount}
                </tbody>
            </table>
        </div>

    );
};

export default App;
