import React from 'react';

const LoginArea = () => {
    return (
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="  Username" required />
            <input type="password" placeholder="  Password" required />
            <button className="
                    mx-1 h-auto w-20
                    rounded-sm
                    bg-swans-down-500 
                    hover:bg-swans-down-700 
                    text-white"
                    type="submit"
                    >
                        Login
            </button>
            <a className="text-orange-500" href="#">New User</a>
        </div>
    );
};

export default LoginArea;