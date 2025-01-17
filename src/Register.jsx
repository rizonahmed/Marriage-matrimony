import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photoURL: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Registration successful!');
        setFormData({
            name: '',
            email: '',
            password: '',
            photoURL: '',
        });
    };

    return (
       <div>
        
       </div>
    );
};

export default Register;
