import React from "react";
import Message from "./Message";
import s from "./HW1.module.css";


const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Егор",
    message: "npm start нажимал?",
    time: "20:00",
};

function HW1() {
    return (
        <div className={s.container}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}

export default HW1;
