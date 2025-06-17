import { useState } from 'react';
import './userButton.css';

const UserButton = () => {
    const [open, setOpen] = useState(false); 
    //temparary user state
    const currentUser = true;
    
    // if the currente user exists, show the user button with options
    return currentUser ? (
        //if user is logged in, show the user button with options
        <div className="userButton">
            <img src="/general/noAvatar.png" alt="User Avatar" />
            <img  
                onClick={() => setOpen((prev) => !prev)}
                src="/general/arrow.svg"
                alt="Arrow"
                className="arrow" />
            {open && (
                <div className="userOptions">   
                    <div className="userOption">Profile</div>
                    <div className="userOption">Settings</div>
                    <div className="userOption">Logout</div>
                </div>
            )}
        </div>
    ) : (
        //else show the login link
        <a href="/" className="loginLink">Login / Sign Up</a>
    );
}

export default UserButton;
