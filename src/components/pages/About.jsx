import { about } from '../data/dummydata'
import { Heading } from '../common/Heading'

export const About = () => {
    return (
        <>
            <div className='about'>
                <div className='container flex'>
                {/* <Heading title='About Me'/> */}
                    {about.map((val, i) => (
                        <div className='aboutContainer'>
                            <div className='left' data-aos="fade-down-right">
                                <img alt='' data-aos="flip-left" />
                            </div>
                            <div className='right' data-aos="fade-down-left">
                                <div className='aboutMe'>
                                    <Heading title='About Me' />
                                    <img alt='' data-aos="flip-left" />
                                    <p>{val.desc}</p>
                                    <p>{val.desc1}</p>
                                    <button>Download CV</button>
                                    <button className='primaryBtn'>Download CV</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>

    )
}
