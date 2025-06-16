import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Applyjob from './Pages/Applyjob'
import Application from './Pages/Application'
import Reclogin from './components/Reclogin'
import { useClerk } from '@clerk/clerk-react'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Dashboard from './Pages/Dashboard'
import ManageJobs from './Pages/ManageJobs'
import AddJob from './Pages/AddJob'
import ViewApplications from './Pages/ViewApplications'
import 'quill/dist/quill.snow.css'
const App = () => {
  const {showRecruiterLogin}=useContext(AppContext)
  return (
    
    <div>
      {showRecruiterLogin&&<Reclogin/>}
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/apply-job/:id' element={<Applyjob />}/>
        <Route path='/applications' element={<Application />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes for Dashboard */}
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
