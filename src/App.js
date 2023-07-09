import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Dashboard
            </Typography>
            <Button color="inherit" href="/Employee_App_Frontend_Integration">
              Home
            </Button>
            <Button color="inherit" href="#/employee-form">
              Employee Form
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/Employee_App_Frontend_Integration" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
