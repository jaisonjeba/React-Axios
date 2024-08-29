import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, selectedUser, updateUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || '',
        username: selectedUser.username || '',
        email: selectedUser.email || '',
        street: selectedUser.address?.street || '',
        suite: selectedUser.address?.suite || '',
        city: selectedUser.address?.city || '',
        zipcode: selectedUser.address?.zipcode || '',
        lat: selectedUser.address?.geo?.lat || '',
        lng: selectedUser.address?.geo?.lng || '',
        phone: selectedUser.phone || '',
        website: selectedUser.website || '',
        companyName: selectedUser.company?.name || '',
        catchPhrase: selectedUser.company?.catchPhrase || '',
        bs: selectedUser.company?.bs || '',
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      address: {
        street: formData.street,
        suite: formData.suite,
        city: formData.city,
        zipcode: formData.zipcode,
        geo: {
          lat: formData.lat,
          lng: formData.lng,
        },
      },
      phone: formData.phone,
      website: formData.website,
      company: {
        name: formData.companyName,
        catchPhrase: formData.catchPhrase,
        bs: formData.bs,
      },
    };
console.log(user);
    if (selectedUser) {
      updateUser(selectedUser.id, user);
    } else {
      addUser(user);
    }

    setFormData({
      name: '',
      username: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      lat: '',
      lng: '',
      phone: '',
      website: '',
      companyName: '',
      catchPhrase: '',
      bs: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add inputs for all form fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="suite"
        placeholder="Suite"
        value={formData.suite}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zipcode"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lat"
        placeholder="Latitude"
        value={formData.lat}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lng"
        placeholder="Longitude"
        value={formData.lng}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website} onChange={handleChange} />
      <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
      <input type="text" name="catchPhrase" placeholder="Catch Phrase" value={formData.catchPhrase} onChange={handleChange} />
      <input type="text" name="bs" placeholder="Business (BS)" value={formData.bs} onChange={handleChange} />
      <button type="submit"> {selectedUser ? "Update User" : "Add User"} </button>
    </form>);
};

export default UserForm;