import React from 'react';
import {Button} from "@/components/ui/button";

const LoginArea = () => {
    return (
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="  Username" required />
            <input type="password" placeholder="  Password" required />
            {/*<button className="*/}
            {/*        mx-1 h-auto w-20*/}
            {/*        rounded-sm*/}
            {/*        bg-swans-down-500 */}
            {/*        hover:bg-swans-down-700 */}
            {/*        text-white"*/}
            {/*        type="submit"*/}
            {/*        >*/}
            {/*            Login*/}
            {/*</button>*/}
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