import './index.scss';
import Jerry from '../../assets/images/gingerbread-letter-j.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'r', 'r', 'y'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        // return setTimeout(() => {
            setLetterClass('text-animate-hover')
        // }, 1000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={Jerry} alt="jerry" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={20} />
                </h1>
                <h2>Full-stack Developer | JavaScript lover</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Home;