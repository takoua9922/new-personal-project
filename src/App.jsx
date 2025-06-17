import './app.css'
import TopBar from './Components/topBar/topBar'
import LeftBar from './Components/leftBar/leftBar'
import Gallery from './Components/gallery/gallery'

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      

    <div className="content">
      <TopBar/>
      <Gallery />
      </div>
    </div>
  )
}

export default App