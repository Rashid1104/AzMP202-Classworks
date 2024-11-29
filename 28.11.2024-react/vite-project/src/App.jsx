import './App.css'
import Card from './assets/components/card'
import Footer from './assets/layouts/footer'
import Header from './assets/layouts/header'


function App() {
  return (
    <>
    <Header />
 <hr />
 <div className="cards">
        <Card
          name="Aslan"
          grup="AZMP202 the best gruop in the world"
          ball={1500}
        />
        <Card
          name="Nihad"
          grup="AZMP202 the best gruop in the world"
          ball={1750}
        />
        <Card
          name="Sefer"
          grup="AZMP202 the best gruop in the world"
          ball={2200}
        />
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default App
