import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {

  return (
    <>
      <Navbar />
      <div className='container mx-auto space-y-2'>
        <Meme />
      </div>
    </>
  )
}

export default App
