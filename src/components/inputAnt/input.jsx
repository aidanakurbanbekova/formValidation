import React from 'react';
import {EyeInvisibleOutlined, EyeTwoTone,} from '@ant-design/icons';
import {Input} from 'antd';
import styles from "./style.module.scss";


const InputAnt = (props) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const {
        star2,
        email,
        type,
        value,
        onChange,
        label,

    } = props
    return (
        <div className={styles.wrapBox}>
            <div className={styles.textLine}>
                <span className={styles.addressEmail}>{email}</span>

                <span className={styles.star2}>{star2}</span>
            </div>
            <Input.Password
                className={styles.inputAnt}
                onChange={onChange}
                type={type}
                value={value}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />
            <label className="labelText">{label}</label>
        </div>


    );
};

export default InputAnt;