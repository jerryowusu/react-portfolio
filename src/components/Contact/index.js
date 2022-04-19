import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ];

    useEffect(() => {
        // return setTimeout(() => {
            setLetterClass('text-animate-hover')
        // }, 2000)
    }, [])
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={contactArray} index={15} letterClass={letterClass} />
                    </h1>
                    <p>
                        I am interested in freelance and remote job opportunities especially ambitious and life-impacting projects. However, do not hesitate to contact me in the form below if you have any question
                    </p>
                <div className="contact-form">
            <form >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
                </div>
                <div className="info-map">
                    Jerry Owusu,
                    <br />
                    Ghana,
                    <br />
                    Flower Pot, off the Spintex Road <br />
                    Accra. <br />
                    <span>jerryowusu6133@gmail.com</span>
                </div>
                {/* <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={15}>
                        <TileLayer url='https//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Jerry stays around here, come over for a hearty chat :)</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Contact;