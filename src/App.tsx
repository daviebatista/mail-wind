import Header from './components/Header'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Bottombar from './components/BottomBar'

function App() {

  return (
    <>
      <Header/>
        <Container>
          <div className='flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative'>
            <Sidebar/>
              <div className='h-96'>
                <h1 className='text-center text-4xl'>Let's test you, Tailwind!</h1>
              </div>
              <Bottombar/>
          </div>
        </Container>
    </>
  )
}

export default App
