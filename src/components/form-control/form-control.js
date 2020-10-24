import React from "react"
import SubmitButton from "../buttons/submit"
import styles from "./form-control.module.css"

const FormControl = (props) => {

    switch (props.element) {
        case "input":
            return (
                <div className={styles["form-control"]}>
                    <label>{props.label}</label>
                    <input type={props.type} />
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