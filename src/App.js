import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/outlate/sidebar/Sidebar';
import FaceRecognition from './components/outlate/pages/facerecognition/FaceRecognition';
import Donors from './components/outlate/pages/donors/Donors';
import Reports from './components/outlate/pages/reports/Reports';
import ReportHistory from './components/outlate/pages/reportsHistory/ReportHistory';
import DailyVisit from './components/outlate/pages/dailyVisit/DailyVisit';
import TestHistory from './components/outlate/pages/testHistory/TestHistory';
import WorkOrder from './components/outlate/pages/workOrder/WorkOrder';
import CalenderType from './components/outlate/pages/calendertype/CalenderType'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route path='/facerecogniton' element={<FaceRecognition />} />
            <Route path='/donors' element={<Donors/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/reportshistory' element={<ReportHistory/>}/>
            <Route path='/dailyvisit' element={<DailyVisit/>}/>
            <Route path='/testhistory' element={<TestHistory/>}/>
            <Route path='/workorder' element={<WorkOrder/>}/>
            <Route path='/calendertype' element={<CalenderType/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
