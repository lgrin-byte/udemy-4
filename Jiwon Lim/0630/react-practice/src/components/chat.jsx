import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [chatmessage, setChatmessage] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    socket.on("message", handleMassage);
    return () => {
      socket.off("message", handleMassage);
    };
  }, []);

  const handleMassage = message => {
    setMessage(prev => [...prev, message]);
  };

  const handleSubmitMassage = () => {
    if (chatmessage.length > 0) {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        content: chatmessage,
        time: currentTime,
      });
      setChatmessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="사용자 이름을 입력하세요"
      />
      <h3>채팅</h3>
      <div>
        {message.map((message, i) => (
          <div key={i}>
            {message.username} : {message.content} {message.time}
          </div>
        ))}
      </div>
      <input
        placeholder="채팅을 입력하세요"
        value={chatmessage}
        onChange={e => {
          setChatmessage(e.target.value);
        }}
      />
      <button onClick={handleSubmitMassage}>전송</button>
    </div>
  );
};
export default Chat;
