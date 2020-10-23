import React from "react"
import styles from "./submit.module.css"

const SubmitButton = (props) => {
    return (
        <button type="submit" className={styles.submit}>{props.name}</button>
    )
}

export default SubmitButton