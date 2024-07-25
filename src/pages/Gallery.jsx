import { Link } from 'react-router-dom'
import './Gallery.css'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'

const Gallery = () => {
    return (
        <>
            <Navbarr />
            <section className="glr1">
                <span>
                    <h1>Gallery :-</h1>
                    <hr />
                </span>
                <div className="glr2">
                    <div className="glr3">
                        <Link href="#" className="glr4" prefetch={false}>
                            <p>"Students participating in various sports events."</p>
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.fa4MJclA1VPnF5-rmmfGOwHaD7&pid=Api&P=0&h=180"
                                alt="Students participating in sports event"
                                width={600}
                                height={400}
                                className="glr5"
                            />
                        </Link>
                        <Link href="#" className="glr4" prefetch={false}>
                            <p>"Students presenting their science projects."</p>
                            <img
                                src="https://tse2.mm.bing.net/th?id=OIP.qSwMnEtGQSjN6BBRwmuRCQHaC8&pid=Api&P=0&h=180"
                                alt="Students presenting science project"
                                width={600}
                                height={400}
                                className="glr5"
                            />
                        </Link>
                        <Link href="#" className="glr4" prefetch={false}>
                            <p> "Students performing in the cultural fest."</p>
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP.OsI6XuOnGs2WckSx0VxHLgHaE8&pid=Api&P=0&h=180"
                                alt="Students performing in cultural program"
                                width={600}
                                height={400}
                                className="glr5"
                            />
                        </Link>
                        <Link href="#" className="glr4" prefetch={false}>
                            <p>"A glimpse of our interactive classrooms."</p>
                            <img
                                src="https://tse2.mm.bing.net/th?id=OIP.FI8OWqK3pnpzsIM3F9mTgQHaEK&pid=Api&P=0&h=180"
                                alt="Interactive classroom"
                                width={600}
                                height={400}
                                className="glr5"
                            />
                        </Link>
                    </div>
                    <div className="glr8">
                        <div className="glr9">
                            <video controls className="glr10">
                                <source src="/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="glr11">
                                <div className="glr12">Virtual Tour of Springdale Public School</div>
                            </div>
                        </div>
                        <div className="glr9">
                            <video controls className="glr10">
                                <source src="/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="glr11">
                                <div className="glr12">Highlights from Annual Function 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Gallery