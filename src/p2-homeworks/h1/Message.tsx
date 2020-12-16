import React from "react";
import s from "./Message.module.css";

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.container}>
            <img className={s.img} src={props.avatar} alt={""}/>
            <div className={s.message}>
                <div>
                    <h1 className={s.name}>{props.name}</h1>
                    <h1 className={s.text}>{props.message}</h1>
                </div>
                <div className={s.div_time}>
                    <h1 className={s.time}>{props.time}</h1>
                </div>
            </div>
        </div>
    );
}

export default Message;
