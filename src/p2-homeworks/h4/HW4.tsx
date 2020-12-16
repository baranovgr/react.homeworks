import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("")
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
        setText("")
    }
    const callback = (value:string)=> {
        setText(value)
       console.log(value)
        if(!value.trim() && value){
            setError("Error")
            setRed(true)
            setChecked(false)

        }
        else if (!value){   //чтобы после удаления текста работало все как нужно:)
            setChecked(false)
            setError("")
            setRed(false)
        }
        else{
            setError("")
            setRed(false)
            setChecked(true)

        }

    }
    const [red, setRed]= useState(false)

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4
            <div className={s.column}>
                <SuperInputText
                    // spanClassName={s.blue}
                    value={text}
                    onChangeText={callback}
                    onEnter={showAlert}
                    error={error}
                    // className={s.blue} // проверьте, рабоет ли смешивание классов
                />
                <SuperButton
                    error={"error"}
                    red={red}
                   // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}
                >
                    qwewqewqewqewq
                    </SuperCheckbox>

            </div>


            <hr/>
            <hr/>
        </div>
    );
}

export default HW4;
