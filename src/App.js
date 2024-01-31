import './App.css'

import logo from './images/logo.png'
import search_icon from './images/search_icon.png'
import cart_icon from './images/cart_icon.png'
import image_1 from './images/image_1.png'



const App = () => {
  return (
    <div>
      <header className='flex justify-around items-center'>
        <div className='flex justify-around w-7/12'>
          <div className='flex '>
            <img src={logo} className='w-10 m-3' />
            <h1 className='self-center text-3xl text-dark-blue font-roboto'>Organick</h1>
          </div>
          <div className='flex w-[700px] justify-around self-center font-roboto'>
            <a className='inline-block'>Home </a>
            <a>About </a>
            <a>Pages </a>
            <a>Shop </a>
            <a>Projects </a>
            <a>News</a>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={search_icon} />
          </div>
          <div className='flex'>
            <img src={cart_icon} />
            <p className='self-center m-3'>Cart</p>
          </div>
        </div>
      </header>
      <main >
        <div className='flex justify-evenly '>

          <div className='bg-background-1 justify-center items-center w-7/12 '>
              <span>100% Natural Food</span>
              <h1 className='font-roboto text-dark-blue text-7xl flex justify-center'>Choose the best healthier way of life</h1>
              <button className='bg-light-yellow p-6 rounded-2xl'>Explore Now</button>
          </div>

          <img src={image_1} className='relative'/>
        </div>
        
      </main>
    </div>
  )
}
export default App