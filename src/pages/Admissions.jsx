import Footer from '../components/Footer'
import Navbarr from '../components/Navbarr'
import './Admission.css'
import { Link } from 'react-router-dom'

const Admissions = () => {
    return (
        <>
        <Navbarr/>
            <div className="">
                <header className="header">
                    <div className="header-content">
                        <h1>Admissions</h1>
                        <p>Learn about our admissions process and important dates.</p>
                    </div>
                </header>
                <main className="main">
                    <div className="main-content">
                        <section className="section">
                            <h2>Admissions Process</h2>
                            <div className="grid">
                                <div>
                                    <h3>Step 1: Application</h3>
                                    <p>
                                        Complete our online application form and submit the required documents. You can download the
                                        application form{" "}
                                        <Link href="#" className="link">
                                            here
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div>
                                    <h3>Step 2: Entrance Test</h3>
                                    <p>
                                        All applicants are required to take our entrance test. The test covers various subjects and assesses
                                        your academic abilities. You can find more information about the test{" "}
                                        <Link href="#" className="link">
                                            here
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div>
                                    <h3>Step 3: Interview</h3>
                                    <p>
                                        Shortlisted candidates will be invited for an interview, where we'll assess your fit for our program
                                        and discuss your academic and personal goals.
                                    </p>
                                </div>
                                <div>
                                    <h3>Step 4: Admission Decision</h3>
                                    <p>
                                        After the interview, we'll review your application and make a decision. You'll be notified of the
                                        outcome via email and given further instructions if you're accepted.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <h2>Admission Criteria</h2>
                            <div className="grid">
                                <div>
                                    <h3>Academic Performance</h3>
                                    <p>
                                        We consider your academic record, including your grades, test scores, and any academic achievements or
                                        awards.
                                    </p>
                                </div>
                                <div>
                                    <h3>Entrance Test</h3>
                                    <p>
                                        Your performance on our entrance test is a crucial factor in the admissions decision. The test covers
                                        a range of subjects and assesses your critical thinking and problem-solving abilities.
                                    </p>
                                </div>
                                <div>
                                    <h3>Extracurricular Activities</h3>
                                    <p>
                                        We value well-rounded applicants and consider your involvement in extracurricular activities, such as
                                        sports, clubs, or community service.
                                    </p>
                                </div>
                                <div>
                                    <h3>Personal Statement</h3>
                                    <p>
                                        Your personal statement is an opportunity to share your background, interests, and goals, and explain
                                        why you're a good fit for our program.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <h2>Important Dates</h2>
                            <div className="grid">
                                <div>
                                    <h3>Application Deadlines</h3>
                                    <ul>
                                        <li>
                                            Early Action: <strong>November 1</strong>
                                        </li>
                                        <li>
                                            Regular Decision: <strong>January 15</strong>
                                        </li>
                                        <li>
                                            Late Decision: <strong>April 1</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Entrance Test Dates</h3>
                                    <ul>
                                        <li>
                                            Early Action: <strong>November 15</strong>
                                        </li>
                                        <li>
                                            Regular Decision: <strong>January 30</strong>
                                        </li>
                                        <li>
                                            Late Decision: <strong>April 15</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Admission Decisions</h3>
                                    <ul>
                                        <li>
                                            Early Action: <strong>December 15</strong>
                                        </li>
                                        <li>
                                            Regular Decision: <strong>March 1</strong>
                                        </li>
                                        <li>
                                            Late Decision: <strong>May 1</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Enrollment Deadlines</h3>
                                    <ul>
                                        <li>
                                            Early Action: <strong>January 1</strong>
                                        </li>
                                        <li>
                                            Regular Decision: <strong>May 1</strong>
                                        </li>
                                        <li>
                                            Late Decision: <strong>June 1</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Admissions