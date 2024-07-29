export const code = `import React from 'react';

const App = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleFirstName = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };

  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  return (
    <>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleFirstName}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleLastName}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmail}
        />
      </div>
      <br />
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handlePhone}
        />
      </div>
    </>
  );
};

export default App;
`;
