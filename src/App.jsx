import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignupPage from './pages/LoginSignupPage';
import Homepage from './pages/Homepage';
import PrivateRoute from './components/PrivateRoute';
import Landingpage from './components/Landingpage';
import BandeightTopics from './components/BandeightTopics';
import Day1 from './components/Day1'
import './App.css'
import Writing2 from './components/Writing2';
import Writing1 from './components/Writing1';
import UserWritings from './components/UserWritings';
import SpeechToText from './components/SpeechToText';
import WritingHistory from './components/WritingHistory';
import ContactUsForm from './components/ContactUsForm';
import FeedbackForm from './components/FeedbackForm';
import PricingPage from './components/PricingPage';
import ScholarshipComponent from './components/ScholarshipComponent';
import Writing1Results from './components/writing1results';
import VocabularyBuilder from './components/VocabularyBuilder';
import SpeakingResults from './components/speakingresults';

import IELTSReadingTest from './components/Reading2';
import WritingShare from './components/WritingShare';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/loginsignup" element={<LoginSignupPage />} />
        <Route path="/homepage/bandeighttopics" element={<BandeightTopics/>} />
        <Route path="/homepage" element={<PrivateRoute element={Homepage} />} />
        <Route path="/homepage/bandeighttopics/day1" element={<Day1/>} />
        <Route path="/bandeighttopics" element={<BandeightTopics/>} />
        <Route path="/writing2" element={<Writing2/>} />
          <Route path="/writing1" element={<Writing1/>} />
          <Route path="/userwritings" element={<UserWritings/>} />
          <Route path='/SpeechToText' element={<SpeechToText/>}/>
          <Route path="/WritingHistory" element={<WritingHistory/>} />
          <Route path="/contactusform" element={<ContactUsForm/>} />
          <Route path="/feedbackForm" element={<FeedbackForm/>} />
          <Route path="/pricingpage" element={<PricingPage/>} />
          <Route path="/scholarshipcomponent" element={<ScholarshipComponent/>} />
          <Route path="/writing1results" element={<Writing1Results/>} />
          <Route path="/VocabularyBuilder" element={<VocabularyBuilder />} />
          <Route path="/writingresults" element={<Writing1Results/>} />
          <Route path="/speakingresults" element={<SpeakingResults/>} />
          <Route path="/IELTSReadingTest" element={<IELTSReadingTest/>} />
          <Route path="/writing/share/:shareId" element={<WritingShare />} />
        </Routes>
    </Router>
  );
};

export default App;