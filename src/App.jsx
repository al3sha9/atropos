
import './App.css'
import Atropos from 'atropos/react';
import abc from './assets/1.png'

function App() {

  return (
    <div className="App">
      


<div className="hero w-screen min-h-screen" >
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className=" hero-content text-center rounded-full text-neutral-content">
  <Atropos
      className="atropos-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atropos-banner-spacer"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
        alt=""
      />
      <img
        data-atropos-offset="-2.5"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-mountains.svg"
        alt=""
      />
      <img
        data-atropos-offset="0"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-back.svg"
        alt=""
      />
      <img
        data-atropos-offset="2"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-mid.svg"
        alt=""
      />
      <img
        data-atropos-offset="4"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-front.svg"
        alt=""
      />
      <img
        data-atropos-offset="5"
        src="https://al3sha9.github.io/portfolio/static/media/1.98d065aceefc7e034814.png"
        alt=""
      />
    </Atropos>
  </div>
</div>
    </div>
  )
}

export default App
