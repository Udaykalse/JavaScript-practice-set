import React, { useState } from "react";

export default function app1() {
    const [formData, setFormData] = useState({
        name: "", email: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("From Data:--", formData);

        setFormData({
            name: "",
            email: ""
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Data:-", formData);
    //     setFormData({
    //         name: "",
    //         email: "",
    //         password: ""
    //     });
    // };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>🧾 1. Create a simple form in React with controlled inputs and validation</h2>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}