import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Reset the form fields
    setName('');
    setDesignation('');
    setLocation('');
    setSalary('');
  };

  return (
    <div>
      <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            fullWidth
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
    
  );
}

export default EmployeeForm;
