import React from 'react';

import SignIn from '../../components/sign-in/signin.component'

import SignUp from '../../components/sign-up/signup-component'

import './sign-in-and-sign-up.style.scss'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;