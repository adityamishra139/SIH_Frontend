import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Contact from './pages/Contact'
import LocalizationPage from './pages/Localizationpage'
import PredictiveAnalyticsPage from './pages/PredictiveAnalyticsPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>


    <Route path='/' element={<Landingpage></Landingpage>}/>
    <Route path='/analysis' element={<PredictiveAnalyticsPage></PredictiveAnalyticsPage>}/>
    <Route path='/contact' element={<Contact></Contact>}/>
    <Route path='/localization' element={<LocalizationPage></LocalizationPage>}/>
    <Route path='/about' element={<About></About>}/>    
    {/* <Route path="/signin" element={<Signin />} /> 
    <Route path="/signup" element={<Signup />} />  */}
    </Routes>

    
      
    </BrowserRouter>
      
    </>
  )
}

export default App
