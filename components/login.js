import React from 'react';

const LoginArea = () => {
    return (
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button className="mx-1 h-auto w-12  rounded-sm bg-green-600 hover:bg-green-400 text-white" type="submit">Login</button>
            <a className="text-orange-500" href="#">New User</a>
        </div>
    );
};

export default LoginArea;