import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage.jsx'
import MainLayout from '@layouts/MainLayout.jsx';

import '@/bootstrapAdd.css'
import '@/components/additional/styles/redLine.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
