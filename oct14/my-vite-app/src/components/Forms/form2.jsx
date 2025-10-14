import React, { useState } from 'react'

function form2() {
    const [formData, setFormData] = useState({
        name: "", email: "", password: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data 2:- ", formData);
        setFormData({
            email: "", name: "", password: ""
        })
    };
    return (
        <div>
            <h1>2 Without React Hook Form (Plain React) Form 2</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:-</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:-</label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:-</label>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default form2
