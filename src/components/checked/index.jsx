import React from "react";
import styles from "./style.module.scss";

const Checked = (props) => {
    const {
        checkbox,
        value,
        setChek,
        chek
    } = props
    return (
        <div className={styles.checkMark} onClick={() => !value}>
            <input
                type='checkbox'
                onChange={event => setChek(!chek)}
                className={styles.pointCheckbox}/>
            <span className={styles.text}>{checkbox}</span>
        </div>
    )
}
export default Checked;