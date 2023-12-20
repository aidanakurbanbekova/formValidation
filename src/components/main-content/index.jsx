import React from "react";
import styles from "./style.module.scss"
import {Link, Outlet} from "react-router-dom";

const MainContent = () => {

    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <nav className={styles.navBar}>
                        <ul className={styles.box}>
                            <li className={styles.register}><Link to="/" className={styles.login}>Home</Link>
                            </li>
                            <li className={styles.register}><Link to="/sign-in" className={styles.login}>Log In</Link>
                            </li>
                            <li className={styles.register}><Link to="/sing-up" className={styles.singUp}>Sign Up</Link>
                            </li>
                        </ul>
                </nav>
            </header>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default MainContent;