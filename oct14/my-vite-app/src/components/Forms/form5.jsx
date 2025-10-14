import React, { useState } from 'react'

function form5() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSumite = (e) => {
        e.preventDefault();
        console.log("Form Data 5:-", formData);
        setFormData({
            name: "", email: "", password: ""
        })
    };

    return (
        <div>
            <h1>5 Without React Hook Form (Plain React) Form Uday 5</h1>
            <form onSubmit={handleSumite}>
                <div>
                    <label>Name:-</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:-</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:-</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default form5
