import React, { useState } from 'react'

function form1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handkeChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:-", formData);
         setFormData({
            name: "",
            email: "",
            password: ""
        });
    };


    return (
        <div>
            <h1> 1️⃣ Without React Hook Form (Plain React) Form 1</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:-</label>
                    <input type="text" name='name' value={formData.name} onChange={handkeChange} />
                </div>
                <div>
                    <label>Email:-</label>
                    <input type="email" name='email' value={formData.email} onChange={handkeChange} />
                </div>
                <div>
                    <label>Password:-</label>
                    <input type="password" name='password' value={formData.password} onChange={handkeChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default form1
