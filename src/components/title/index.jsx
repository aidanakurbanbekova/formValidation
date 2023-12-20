import React from "react";
import styles from "./style.module.scss";
import img from "../../assets/icons/Logo 1.png"
import  pictures from "../../assets/icons/Continue login Google.png"


const Title = (props) => {
    const {
        img,
        children,
        title,
        pictures
    } = props
    return (
        <div className={styles.registerWrap}>
            <img src={img} alt="img"/>
            <h3 className={styles.littleTitle}>{children}</h3>
            <p className={styles.title}>{title}</p>
            <img src={pictures} alt='google'/>
            <div className={styles.line}>
                <span className={styles.line1}></span>
                <span className={styles.textLine}>OR</span>
                <span className={styles.line2}></span>
            </div>
        </div>
    )
}
export default Title;