import UserButton from '../userButton/userButton';
import './topBar.css';

const TopBar = () => {
    return (
        <div className="topBar">
            <div className="searchBar">
                <img src="/general/search.svg" alt="Search Icon" />
                <input type="text" placeholder="Search..." />
            </div>
            <UserButton />
        </div>
    );
};

export default TopBar;
