import React from 'react';
import {Button} from "@/components/ui/button";

const LoginArea = () => {
    return (
        <div className="flex items-center space-x-2">
            <Button variant='default' size='sm'>
                Sign in
            </Button>
            <Button variant='outline' size='sm'>
                Sign up
            </Button>
        </div>
    );
};

export default LoginArea;