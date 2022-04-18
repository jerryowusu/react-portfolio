import './index.scss';
import Jerry from '../../assets/images/gingerbread-letter-j.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'r', 'r', 'y'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const greetArray = ['H', 'e', 'l', 'l', 'o', ','];

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={greetArray} index={10} />
                <br /> 
                <span className={letterClass}>I</span>
                <span className={letterClass} _13>'m</span>
                <img src={Jerry} alt="jerry" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
                </h1>
                <h2>Full-stack Developer | JavaScript lover</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
};

export default Home;