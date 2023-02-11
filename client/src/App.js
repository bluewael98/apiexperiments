import React from 'react'
// import WeatherWidget from './components/Weatherwidget'
import StockMarketData from './components/StockMarketData'
// import StockMarketNews from './components/StockMarketNews'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'

function App () {

  return (
    <section className='app max-h-max'>
      <div className='className="w-5/6 mx-auto h-full"'>
        <Navbar />
      <LandingPage />
      </div>

      <div className="w-5/6 mx-auto h-full">
      <StockMarketData />
      </div>
      
      
      {/* <StockMarketNews /> */}
      
    </section>
  )
}

export default App