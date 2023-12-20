import React, {useEffect, useState} from "react";
import styles from "./style.module.scss"
import Title from "../../components/title";
import logoImg from "../../assets/icons/Logo 1.png"
import pictures from "../../assets/icons/Continue with Google.png"
import Checked from "../../components/checked";
import Button from "../../components/button";
import {Controller, useForm} from "react-hook-form";
import InputAnt from "../../components/inputAnt/input";
import Input from "../../components/input";
import clsx from "clsx";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';


const SignUp = () => {
    const schema = yup.object().shape({
        fullName: yup.
        string()
            .email()
            .min(3, 'строка не должен состоять из 3 символов')
            .required('The fullName must be email.'),
        emailAddress: yup.
        string()
            .email()
            .min(3, 'строка не должен состоять из 3 символов')
            .required('The email  must be email'),
        password: yup
            .required('The password is required.')
            .min(8, 'пароль должен состоять из 8 символов')
            .oneOf([yup.ref('password'), null]),
        confirmPassword: yup
            .required('The  confirmPassword is required.')
            .min(8, 'пароль должен состоять из 8 символов')
            .oneOf([yup.ref('password'), null])

    });

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUserName] = useState('')
    const [chek, setChek] = useState(false)
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

    useEffect(() => {
        setValue('myCheckbox', chek);
    }, [chek]);

    const handleChangeIcon = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.signUpWrap}>
            <Title
                img={logoImg}
                children="Create an Account"
                title="Sign up now to get started with an account."
                pictures={pictures}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="fullName"
                    control={control}
                    rules={{
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 3,
                            message: "Минимум 5 символов"
                        }
                    }}
                    render={({field, fieldState}) =>
                        (<Input
                            {...field}
                            email="Full Name"
                            star="*"
                            type="text"
                            // style={{borderColor:errors.fullName && "red"}}
                            className={errors.fullName ? styles.emptyInput : ''}
                        />)}
                />
                {errors?.fullName &&
                    <p className={styles.errorValidation}>{errors?.fullName?.message || "Email address is a required field!"}</p>}
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({field, fieldState}) =>
                        (<Input
                            {...field}
                            email="Email Address"
                            star="*"
                            type="email"
                            className={errors.emailAddress ? styles.emptyInput : ''}
                        />)}
                />
                {errors?.emailAddress &&
                    <p className={styles.errorValidation}>{errors?.emailAddress?.message || "Email address is a required field!"}</p>}
                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState}) =>
                        (<InputAnt
                            {...field}
                            email="Password"
                            star2="*"
                            type="password"
                            className={errors.password ? styles.emptyInput : ''}
                        />)}
                />
                {errors?.password &&
                    <p className={styles.errorValidation}>{errors?.password?.message || "Email address is a required field!"}</p>}
                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символов"
                        }
                    }}
                    render={({field, fieldState}) =>
                        (<InputAnt
                            {...field}
                            email="Confirm Password"
                            star2="*"
                            type="password"
                            className={errors.confirmPassword ? styles.emptyInput : ''}
                        />)}
                />
                {errors?.confirmPassword &&
                    <p className={styles.errorValidation}>{errors?.confirmPassword?.message || "Email address is a required field!"}</p>}

                <Controller
                    name="myCheckbox"
                    control={control}
                    defaultValue={chek}
                    rules={{required: false}}
                    render={({field}) =>
                        (<Checked
                                checkbox="I have read and agree to the"
                                {...field}
                                setChek={setChek}
                                chek={chek}
                                // className={clsx()}
                            />
                        )}
                />
                <Button
                    button="Get Started"
                    text="Already have an account?"
                    signUp="Log in"
                />
            </form>

        </div>
    )
}
export default SignUp;