import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (formData.name.length < 3) {
      updatedErrors.name = 'Nama harus terdiri dari minimal 3 karakter.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      updatedErrors.email = 'Alamat email tidak valid.';
      isValid = false;
    }

    if (formData.message.trim() === '') {
      updatedErrors.message = 'Pesan tidak boleh kosong.';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Kirim formulir ke server atau lakukan tindakan lainnya
      console.log('Formulir berhasil dikirim:', formData);
    } else {
      console.log('Formulir tidak valid.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div><br></br>
      <div>
        <label htmlFor="email">Alamat Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div><br></br>
      <div>
        <label htmlFor="message">Pesan:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
      </div><br></br>
      <button type="submit">Kirim</button><br></br>
    </form>
  );
};

export default FormValidation;
