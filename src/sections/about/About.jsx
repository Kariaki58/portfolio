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
                    Greetings, I'm Stephen, hailing from Nigeria. As a seasoned full-stack 
                    MERN developer, I'm dedicated to crafting top-tier web solutions. 
                    Equipped with a Certificate in Software Engineering and a wealth of practical experience, 
                    I prioritize ensuring your online presence meets industry standards. 
                    My aim is to provide not just visually appealing designs, 
                    but also the seamless functionality essential for your online operations.
                     Don't hesitate to reach out with your project details – let's kickstart your
                     journey online! Take a glance at my resume below!


                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About
