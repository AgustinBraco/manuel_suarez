import { useState } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await fetch(
        'https://email-api-34x5.onrender.com/cc',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            API_KEY: API_KEY,
          },
          body: JSON.stringify(formData),
        },
      );

      if (responseData.status === 200) {
        document.getElementById('FormWrapper').reset();
        alert("Mensaje enviado")
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <form id="FormWrapper" onSubmit={handleSubmit}>
      <label className="FormLabel">
        Nombre
        <input
          className="FormInput"
          id="name"
          name="name"
          maxLength={30}
          required
          type="text"
          placeholder="Juan"
          onChange={handleChange}
        />
      </label>
      <label className="FormLabel">
        Celular
        <input
          className="FormInput"
          id="phone"
          name="phone"
          maxLength={20}
          required
          type="number"
          placeholder="011-2222-3333"
          onChange={handleChange}
        />
      </label>
      <label className="FormLabel">
        Email
        <input
          className="FormInput"
          id="email"
          name="email"
          maxLength={50}
          required
          type="email"
          placeholder="ejemplo@gmail.com"
          onChange={handleChange}
        />
      </label>
      <label className="FormLabel">
        Mensaje
        <textarea
          className="FormMessage"
          id="message"
          name="message"
          maxLength={200}
          required
          placeholder="Hola..."
          onChange={handleChange}
        />
      </label>
      <label className="FormLabel">
        <input className="FormButton" type="submit" value="Enviar →" />
      </label>
    </form>
  );
};
