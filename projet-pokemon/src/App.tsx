
import Router from './pages/Router'
import NavBar from './components/navbar.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

function App() {


  return (
    <>
      <div className='h-screen flex flex-col justify-between'>
      <NavBar />
      <Router />
      <Footer />
</div>
    
    
    </>
  )
}

export default App
