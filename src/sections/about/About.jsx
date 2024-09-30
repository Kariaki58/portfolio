import AboutImage from '../../assets/profile2.jpeg';
import CV from '../../assets/resume.pdf'
import { HiDownload } from "react-icons/hi";
import data from './data';
import Card from '../../components/Card';
import './about.css'

const About = () => {
    return (
        <section id='about' data-aos="zoom-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__potrait">
                        <img src={AboutImage} alt="About pic" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    
                    <p>
                    Hi! I’m Stephen, a Next.js Full Stack Developer dedicated to bringing your ideas to life. From design to development to production, I’ve got you covered.

                    I specialize in HTML, CSS, JavaScript, React, Node.js, Express, Python, and Flask. I thrive on creating seamless user experiences and ensuring efficient back-end functionality.
                    Let’s connect and build something amazing!

                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About
