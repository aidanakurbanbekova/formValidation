import React from "react";
import styles from "./style.module.scss"

const Button = (props) => {
    const {
        button,
        text,
        signUp
    } = props

    return (
        <div className={styles.wrap}>
            <button className={styles.button}>{button}</button>
            <div className={styles.link}>
                <span>{text}</span>
                <a href="#" className={styles.signUp}>{signUp}</a>
            </div>
        </div>
    )
}
export default Button;