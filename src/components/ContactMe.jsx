// ContactMe.jsx

import React, { useState } from 'react';

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };
    const handleBlur = (field) => {
        if (field === 'name' && !name.trim()) {
            setNameError('Name is required');
        } else if (field === 'email') {
            validateEmail();
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
            setNameError('');
        } else if (name === 'email') {
            setEmail(value);
            setEmailError((prev) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? '' : 'Invalid email address';
            });
        } else if (name === 'message') {
            setMessage(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim()) {
            setNameError('Name is required');
            return;
        }
        validateEmail();
        if (emailError) {
            return;
        }
        console.log('Submitting form data:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <div className="contact-me-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                id="name" 
                name="name" 
                required
                onBlur={() => handleBlur('name')}
                onChange={handleChange}
                value={name}
                />
                {nameError && <p className='error'>{nameError}</p>}

                <label htmlFor="email">Email Address:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                required
                onBlur={() => handleBlur('email')}
                onChange={handleChange}
                value={email} 
                />
                {emailError && <p className='error'>{emailError}</p>}

                <label htmlFor="message">Message:</label>
                <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required
                onChange={handleChange}
                value={message}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;