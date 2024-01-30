import './App.css'

import logo from './images/logo.png'

const App = () => {
  return (
    <div>
      <header className='flex justify-around'>
        <div className='flex '>
          <div className='flex'>
            <img src={logo} className='w-10' />
            <h1 className='text-center text-3xl text-dark-blue'>Organick</h1>
          </div>
          <div className='flex w-[600px] justify-around'>
            <a>Home </a>
            <a>About </a>
            <a>Pages </a>
            <a>Shop </a>
            <a>Projects </a>
            <a>News</a>
          </div>
        </div>
        <div className=''>
          <div></div>
        </div>
      </header>
    </div>
  )
}
export default App