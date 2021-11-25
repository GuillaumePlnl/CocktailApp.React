import React, { Component } from 'react'
import { ThemeContext } from '../../ThemeContext/theme-context'
import './Login.css'

export function Logout() {
    return (<div onClick={logoutFct}>Logout</div>);
}

let logoutFct = () => { 
    console.log('LOGGING OUT. ' + localStorage.getItem('AuthenticationToken'));
    localStorage.removeItem('AuthenticationToken')
    // reload page to display content
    window.location.reload(true)
};