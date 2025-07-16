import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'
import AskAQuestion from './pages/AskAQuestion.jsx'
import AskAQuestionQuill from './pages/AskAQuestionQuill.jsx'
import QA from './components/QA.jsx'
import CommunityGuidelines from './pages/CommunityGuidelines.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/ask-a-question' element={<AskAQuestionQuill />} />
        <Route path='/question/:id' element={<QA />} />
        <Route path='/community-guidelines' element={<CommunityGuidelines />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='terms-of-service' element={<TermsOfService />} />
        <Route path='/cookie-policy' element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
