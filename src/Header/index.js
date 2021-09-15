import './Header.css';
import Logo from './logo.png';
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} className="logo" alt="logo-missing" />
            <span className = "welcome" >Welcome ! </span>
            <span className = "user" >Anto Peter</span>
            <i className = "fa fa-power-off header-icon" aria-hidden="true"></i>
            <i className = "fa fa-user header-icon" aria-hidden="true"></i>
        </div>
     );
}
 
export default Header;