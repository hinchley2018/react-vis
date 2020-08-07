import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, LineSeries, MarkSeries} from 'react-vis';
import './App.css';
import {AnimalChart} from './AnimalChart'

// dot or line is gatorade consumption per day
// label series is my favorite lang with developer productivity and performance
function App() {
  return (
    <div>
      <h2>I thought this would be a more creative way of introducing myself than a resume</h2>
      
      
      <h4>My Favorite Animals vs how many I've owned</h4>
      <AnimalChart/>
  {/* <XYPlot height={200} width={200}>
    <LineSeries data={data} />
  </XYPlot>
  <XYPlot height={200} width={200}>
    <MarkSeries data={data} />
  </XYPlot> */}
  <h4>hosted with love by <a href="https://jonathon-intro.herokuapp.com/">heroku</a></h4>
  <h4>source at <a href="https://github.com/hinchley2018/react-vis">Github</a></h4>
  </div>
  );
}

export default App;
