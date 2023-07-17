import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {

  return (
    <div>
      <Parallax pages={2}>

        <ParallaxLayer offset={0} speed={0.02}>
          <div className='pDiv p0'></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.05}>
          <div className='pDiv p1'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.11}>
          <div className='pDiv p2'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.16}>
          <div className='pDiv p3'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.26}>
          <div className='pDiv p4'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.36}>
          <div className='pDiv p5'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.49}>
          <div className='pDiv p6'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.69}>
          <div className='pDiv p7'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <div className='pDiv p8'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.01}>
          <div className='rest'>
            <h1>Firewatch Parallax</h1>
            <a target='_blank' href="https://github.com/NureddinFarzaliyev/parallax-firewatch">Source Code</a>
          </div>
        </ParallaxLayer>
      </Parallax>

      
      
    </div>
  )
}

export default App
