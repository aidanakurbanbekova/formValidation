import React, {useState, useEffect} from "react";
import styles from "./style.module.scss";
import Title from "../../components/title";
import logoImg from "../../assets/icons/Logo 1.png";
import pictures from "../../assets/icons/Continue login Google.png"
import Input from "../../components/input";
import Checked from "../../components/checked";
import Button from "../../components/button";
import {Controller, useForm} from "react-hook-form";
import clsx from "clsx";
import openEye from "../../assets/icons/icon yey.png"
import closedEye from "../../assets/icons/icon yey 2.png"
import InputAnt from "../../components/inputAnt/input";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';



const Login = () => {
    const schema = yup.object().shape({
        Email: yup.
        string()
            .email()
            .required('The email must be email.')
            .min(3, 'строка не должен состоять из 3 символов')
            .matches( /[^а-я]+@[^а-я]+\.[^а-я\._'+;*^&=?~{}\-\.\/,\\]+$/,
                'email невалидный' ),
        Password: yup
            .required('The password is required.')
            .min(8, 'пароль должен состоять из 8 символов')
            .oneOf([yup.ref('password'), null])
            .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                "Пароль должен состоять из букв и цифр " )
    });
    const [chek, setChek] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const formMethods = useForm(

        // console.log(username)
        {
            defaultValues: {},
            resolver: yupResolver(schema),
            mode: 'onBlur'
        }
    );
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: {errors}
    } = formMethods

    const onSubmit = (data) => console.log(data);

    const handleChangeIcon = () => {
        setShowPassword(!showPassword);
    }
    useEffect(() => {
        setValue('myCheckBox', chek);
    }, [chek])


    return (
        <div className={styles.loginWrap}>
            <Title
                img={logoImg}
                children="Log in to your Account"
                title="Welcome back, please enter your details."
                pictures={pictures}/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="Email"
                    control={control}
                    render={({field, fieldState}) =>
                        (<Input
                            {...field}
                            placeholder="Email Address"
                            email="EmailAddress"
                            type="email"
                            className={errors.Email ? styles.emptyInput : ''}
                        />)}
                />
                {errors?.Email &&
                    <p className={styles.errors}>{errors?.Email?.message || "Email address is a required field!"}</p>}

                <Controller
                    name="Password"
                    control={control}
                    render={({field, fieldState}) =>
                        (<InputAnt
                            {...field}
                            placeholder="password"
                            email="Password"
                            type={showPassword ? 'text' : 'password'}
                            onClick={handleChangeIcon}
                            hidden={showPassword ? openEye : closedEye}
                            className={errors.Password ? styles.emptyInput : ''}
                        />)}
                />

                {errors?.Password &&
                    <p className={styles.errors}>{errors?.Password?.message || "Password is a required field!"}</p>}

                <Controller
                    name="myCheckbox"
                    control={control}
                    defaultValue={chek}
                    rules={{required: false}}
                    render={({field}) =>
                        (<Checked
                                checkbox="Remember me"
                                {...field}
                                setChek={setChek}
                                chek={chek}
                                className={clsx()}
                            />
                        )}
                />

                <Button
                    button="Log in"
                    text="Don’t have an account?"
                    signUp="signUp"
                />
            </form>

        </div>
    )
}

export default Login;
