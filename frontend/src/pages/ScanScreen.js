import React from 'react';
import { useFormik } from 'formik';

const ScanScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>

      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor='phone'>Phone number</label>
      <input
        id='phone'
        name='phone'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default ScanScreen;
