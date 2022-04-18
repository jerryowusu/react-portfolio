import './index.scss';
import Jerry from '../../assets/images/gingerbread-letter-j.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br /> I am
                <img src={Jerry} alt="jerry" />
                erry
                <br />
                Software Engineer
                </h1>
                <h2>Full-stack Developer | JavaScript lover</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
};

export default Home;