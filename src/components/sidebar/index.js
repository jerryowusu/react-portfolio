import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logoj from '../../assets/images/j-letter.png';
import LogoSubtitle from '../../assets/images/jerry-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
          <img src={Logoj} alt="logo" />
          <img src={LogoSubtitle} className='sub-logo' alt="jerry" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4de' />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4de' />
            </NavLink> 
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4de' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jerry-owusu/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.github.com/jerryowusu">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://angel.co/u/jerry-owusu1">
                    <FontAwesomeIcon icon={faAngellist} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    );

export default Sidebar;