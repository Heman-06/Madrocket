import './ContactUs.css'
import React, { useState } from 'react';
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
     console.log('Form submitted:', formData);
    };

    return (
        <>
            <Navbarr />
            <div className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509837!2d144.95373631550423!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779a9f7c51e2a5!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1622649034745!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
