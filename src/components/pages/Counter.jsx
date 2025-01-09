import CountUp from "react-countup"
import { project } from "../data/dummydata"

export const Counter = () => {
    return (
        <>
            <div className="hero counter">
                <div className="container grid3 grid4">
                    {project.map((item, i) => (
                        <div key={i} className="box" data-aos="zoom-in">
                            <i>{item.icon}</i>
                            <h1 className="heading">
                                <CountUp enableScrollSpy duration={2} end={item.num}/>
                            </h1>
                            <i>{item.title}</i>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
