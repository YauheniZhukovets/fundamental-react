import React, {useContext} from 'react';
import {Input} from "../Components/UI/input/Input";
import {Button} from "../Components/UI/button/Button";
import {AuthContext} from "../context";

export const Login = () => {
    const {setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1 style={{marginTop: 40}}>Страница логина</h1>
            <form onSubmit={login}
                  style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: 10
                  }}
            >
                <Input type={'text'} placeholder={'Введите логин'}/>
                <Input type={'password'} placeholder={'Введите пароль'}/>
                <Button>Войти</Button>
            </form>
        </div>
    )
}