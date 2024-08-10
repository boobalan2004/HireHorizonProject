import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Signup from './signup';
import Login from './login';
import Companies from './companies';
import About from './aboutus';
import Programs from './Programs';
import Adminlog from './Adminlog';
import Resume from './Resume';
import View1 from './View1';
import DashboardContainer from './DashboardContainer';
import JobPostForm from './JobPostForm';
import JobLists from './JobLists';
import { AuthProvider } from './AuthContext';
import MyJobs from './MyJobs';
import ListOfJobs from './ListOfJobs';
import CompanyCat from './CompanyCat';
import UserQueries from './UserQueries';
import View2 from './View2';
import View3 from './View3';
// import TopCompanies from './TopCompanies';

const RouterComp = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/programming" element={<Programs/>} />
        <Route path="/admin-login" element={<Adminlog/>} />
        <Route path="/resumedis" element={<Resume/>} />
        <Route path="/admin-dash" element={<DashboardContainer/>} />
        <Route path="/add-job" element={<JobPostForm/>} />
        <Route path="/view1" element={<View1/>} />
        <Route path="/view2" element={<View2/>} />
        <Route path="/view3" element={<View3/>} />
        <Route path="/joblist" element={<JobLists/>} />
        <Route path="/myjobs" element={<MyJobs/>} />
        <Route path="/list-of-jobs" element={<ListOfJobs/>} />
        <Route path="/com-category" element={<CompanyCat/>} />
        <Route path="/query-list" element={<UserQueries/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default RouterComp;

