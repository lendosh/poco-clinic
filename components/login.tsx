import React from 'react';
import LoginButton from "./auth/login-button";
import {Button} from "./ui/button";
import {signOut} from "next-auth/react";
import {LogoutButton} from "./auth/logout-button";
import RegisterButton from "./auth/register-button";

const LoginArea = () => {
    return (
        <div className="flex items-center space-x-2">
            <LoginButton>
                <Button size="sm">
                    Sign In
                </Button>
            </LoginButton>
            <RegisterButton>
                <Button variant='outline' size='sm'>
                    Sign up
                </Button>
            </RegisterButton>
            {/*<LogoutButton>*/}
            {/*    <Button variant='destructive' size='sm'>*/}
            {/*        Logout*/}
            {/*    </Button>*/}
            {/*</LogoutButton>*/}

        </div>
    );
};

export default LoginArea;