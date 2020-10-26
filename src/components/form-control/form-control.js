import React from "react"
import SubmitButton from "../buttons/submit"
import styles from "./form-control.module.css"

const FormControl = (props) => {

    switch (props.element) {
        case "input":
            return (
                <div className={styles["form-control"]}>
                    <label htmlFor={props.id}>{props.label}</label>
                    <input id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
                </div>
            )
        case "button":
            return (
                <div className={styles["form-control"]}>
                    <SubmitButton name={props.label} />
                </div>
            )
        default:
            break;
    }
}

export default FormControl