import { useState } from 'react';
import Main from './components/Main';
import Test from './Test';
import './App.css';
import CarouselCustom from './components/Carusel';
import { Carousel } from 'flowbite-react';
import Img from './img/click.png';
import MapComponent from './components/MapComponent';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Main />
      <div className='w-[50%] flex justify-center overflow-hidden '>
        <MapComponent />
      </div> */}
      <Test />
    </>
  );
}

export default App;
