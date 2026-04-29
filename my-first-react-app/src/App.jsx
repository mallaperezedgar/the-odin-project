import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Trending from './components/Trending'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Trending />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App