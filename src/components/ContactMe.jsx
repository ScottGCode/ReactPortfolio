// ContactMe.jsx

import React from 'react';

function ContactMe() {
    return (
        <div className="contact-me-container">
            <h2>Contact Me</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;