import './Faculty.css'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'

export default function Faculty() {
    return (
        <>
            <Navbarr />
            <section className="fctly1">
                <div className="fctly2">
                    <div className="fctly3">
                        <div className="header-content">
                            <h2>Our Dedicated Faculty</h2>
                            <p>Meet the experienced and passionate educators who make our school exceptional.</p>
                        </div>
                    </div>
                    <div className="faculty-grid">
                        {facultyMembers.map((member, index) => (
                            <div key={index} className="faculty-member">
                                <img src={member.image} alt='' />
                                <div className="member-details">
                                    <h3>{member.name}</h3>
                                    <p>{member.position}</p>
                                    <p>{member.experience}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal, M.Ed",
      experience: "20 years of experience in educational administration",
      image: "https://tse4.mm.bing.net/th?id=OIP.tei9Vsc8styOGZ9nN0I3RAAAAA&pid=Api&P=0&h=180",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal, M.Sc. in Physics",
      experience: "15 years of teaching experience",
      image: "https://tse1.mm.bing.net/th?id=OIP.ojC9EAuxw_7fvj3vOcg-oQHaFQ&pid=Api&P=0&h=180",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher, M.A. in English",
      experience: "10 years of teaching experience",
      image: "https://tse4.mm.bing.net/th?id=OIP.2Ecc2kJaDoiau98cs8wETgHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher, M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
      image: "https://tse2.mm.bing.net/th?id=OIP.piYyMRudAiXdZGBWCv0EkQHaFC&pid=Api&P=0&h=180",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher, M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
      image: "https://tse3.mm.bing.net/th?id=OIP.kbQxKV3QGfayjz43BqMJtwHaEh&pid=Api&P=0&h=180",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher, B.Tech in Computer Science",
      experience: "5 years of teaching experience",
      image: "https://tse4.mm.bing.net/th?id=OIP.P2oCa5tUZS18DCdA116tswHaE8&pid=Api&P=0&h=180",
    },
  ];
  