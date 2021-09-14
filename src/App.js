import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function App() {
  
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1bnlpY2hlbiIsImEiOiJja3M1dG9iZnUwMzlqMnJtdHEzNHNsbHlnIn0.ePWbnCBIw3Cpp55XvazMvg';
    var map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [114, 22.6],
      zoom: 10,
      attributionControl: false
    });
    console.log("地图加载完成！")

  }, [])
  
  return (
    
    <div className="App" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        header
      </header>

      <body>
          <div className="App-body">
              <div className="left" id="map">
                
              </div>
              <div className="right">
                 thumbnail
              </div>

          </div>
       </body>
    </div>
  );
}

export default App;
