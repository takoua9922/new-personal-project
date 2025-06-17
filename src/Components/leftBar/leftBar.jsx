import './leftBar.css';

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="menuIcons">
                <a href="/" className="menuIcon">
                    <img src="/general/logo.png" alt="" />
                </a>
                <a href="/" className="menuIcon">
                    <img src="/general/home.svg" alt="home" />
                </a>
                <a href="/" className="menuIcon">
                    <img src="/general/create.svg" alt="create" />
                </a>
                <a href="/" className="menuIcon">
                    <img src="/general/updates.svg" alt="updates" />
                </a>
             <a href="/" className="menuIcon">
                    <img src="/general/messages.svg" alt="messages" />
                </a>

            </div>
             <a href="/" className="menuIcon">
                    <img src="/general/messages.svg" alt="messages" />
                </a>
        </div>
    );
};

export default LeftBar;
