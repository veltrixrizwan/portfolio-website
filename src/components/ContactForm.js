import React, { useState } from 'react';
import api from '../api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Dummy line 19
    // Dummy line 20
    // Dummy line 21
    // Dummy line 22
    // Dummy line 23
    // Dummy line 24
    // Dummy line 25
    // Dummy line 26
    // Dummy line 27
    // Dummy line 28
    // Dummy line 29
    // Dummy line 30
    // Dummy line 31
    // Dummy line 32
    // Dummy line 33
    // Dummy line 34
    // Dummy line 35
    // Dummy line 36
    // Dummy line 37
    // Dummy line 38
    // Dummy line 39
    // Dummy line 40
    // Dummy line 41
    const handleSubmit = (e) => {
        e.preventDefault();
        api.submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
            <textarea name="message" onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
