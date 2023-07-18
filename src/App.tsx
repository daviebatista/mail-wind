import Header from './components/Header'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Bottombar from './components/BottomBar'
import { useState } from 'react'
import EmailList from './components/EmailList'
import EmailSubject from './components/EmailList/EmailSubject'

function App() {
  const [openEmail, setOpenEmail] = useState(null)

  return (
    <>
      <Header/>
        <Container>
          <div className='flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative'>
            <Sidebar/>
            <EmailList setOpenEmail={setOpenEmail} />
            <Bottombar/>
            {openEmail && <EmailSubject setOpenEmail={setOpenEmail} email={openEmail}/>}
          </div>
        </Container>
    </>
  )
}

export default App
