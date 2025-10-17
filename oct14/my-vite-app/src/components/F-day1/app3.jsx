import React, { useState } from 'react'

function app3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data 17 oct:- ', formData);
    setFormData({
      name: '', email: '', password: ''
    })
  };

  return (
    <div>

      <h2>Oct 17 form
      </h2>      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:-</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="">Email:-</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default app3
