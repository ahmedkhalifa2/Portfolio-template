import { social } from '../data/dummydata'

export const Footer = () => {
    return (
        <>
        <footer>
            <div data-aos="zoom-in-right">
            {social.map((item) => (
                <>
                    <i>{item.icon}</i>
                </>
            ))}
            </div>
                <p data-aos="zoom-in-left">All Rights Reserved 2024</p>
        </footer>
        </>
    )
}
