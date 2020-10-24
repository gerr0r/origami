import React from "react"
import styles from "./form.module.css"

const Form = (props) => {
    return (
        <div className={styles.forms}>
            {props.children}
        </div>
    )
}

export default Form