import React from "react"
import styles from "./form.module.css"

const Form = (props) => {
    return (
        <form className={styles.forms} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form