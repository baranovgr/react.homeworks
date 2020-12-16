import React from "react";
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: string) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            <span>{props.affair.name}</span> <span>{props.affair.priority}</span>
            <button className={s.default}onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
