import React from "react";
import styles from "./style.module.scss"
import clsx from "clsx";



const Input = (props) => {

    const {
        email,
        type,
        star,
        onChange,
        placeholder,
        className,
        value,
        hidden,
        onClick
    } = props
    // const condition = type === 'password' || type === 'text';
    const emptyField = value === '';
    const emptyInput = clsx(
        styles.input,
        className,
        {'emptyInput': emptyField}
    )
    return (
        <div className={styles.wrap}>
            <label>
                <div className={styles.textStar}>
                    <span className={styles.emailAddress}>{email}</span>
                    <span className={styles.star}>{star}</span>
                </div>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={emptyInput}
                    onChange={onChange}
                />

            </label>
        </div>
    )
}
export default Input;