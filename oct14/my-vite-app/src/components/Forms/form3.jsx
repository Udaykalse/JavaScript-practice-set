import React, { useState } from 'react'

function form3() {
    const [formData, setFromData] = useState({
        name: "", email: "", password: ""
    });
    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data 3:- ", formData);
        setFromData({
            name: "", email: "", password: ""
        })
    }
    return (
        <div>
            <h1>3 Without React Hook Form (Plain React) Form 3</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:-</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} />

                </div>

                <div>
                    <label>Email:-</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:-</label>

                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default form3
