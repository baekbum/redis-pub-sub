import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";

const Client1 = () => {
    const socket = io("http://localhost:3002");
    const onClick = useCallback(() => {
        socket.emit('ping', '저는 client2 입니다');
    }, [socket]);

    useEffect(() => {
        socket.on('pong', (data) => {
            alert(data);
        });
    }, [socket]);
    
    return (
        <div className="client1">
            <h1>저는 클라이언트2 입니다.</h1>
            <button onClick={onClick}>다른 사람에게 나의 존재 알리기!!</button>
        </div>
    )
}

export default Client1;