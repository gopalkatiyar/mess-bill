

import ExcelUploader from './components/ExcelUploader';
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route, Routes } from "react-router-dom";

function App() {


  return (
	  <>
		  <Navbar />
		  
			  <Routes>
				  <Route path="/" element={<Home />} />
				  <Route path="/upload" element={<ExcelUploader />} />
			  </Routes>
      
    </>
  )
}
export default App
