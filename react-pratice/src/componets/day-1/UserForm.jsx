import React, { useState } from 'react'

function UserForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:-', formData);
        setFormData("");

    };

    return (
        <div>
            <h1>1️⃣ Create a React Form (Basic Controlled Form)</h1>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" name="name" onChange={handleChange} /><br />
                <label >Email</label>
                <input type="email" name='email' onChange={handleChange} />
                <br />
                <input type="password" name='password' onChange={handleChange} />
                <br />
                <label htmlFor="">Password</label>
                <button type='submit'>Submit</button>
                <p>{formData.name} - {formData.email}</p>
            </form>
        </div>
    )
}

export default UserForm
