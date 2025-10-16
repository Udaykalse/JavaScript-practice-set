import React, { useState } from 'react'

function app10() {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
        console.log('form Data:-', formdata);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(formdata);
        setFormData({ name: '', email: '', password: '' });
    };
    return (
        <div>
            <div>
                <h2>Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name:-</label>
                    <input type="text" name='name' value={formdata.name} onChange={handleChange} />
                    <label>Email</label>
                    <input type="email" name='email' value={formdata.email} onChange={handleChange} />
                    <label>Password</label>
                    <input type="password" name='password' value={formdata.password} onChange={handleChange} />
                    <button type='submit'>Submit</button> 
                </form>
            </div>

            {
                submitted && (
                    <div>
                        <h3>Submiited data:-</h3>
                        <p>Name:- {submitted.name}</p>
                        <p>Email:- {submitted.email}</p>
                    </div>
                )
            }

        </div>
    )
}

export default app10
