import React from 'react';
import {XYPlot, VerticalBarSeries,
  DiscreteColorLegend,
  XAxis,YAxis} from 'react-vis';
const AnimalData = [
    {x: 5, y: 2},//cats
    {x: 7, y: 30},//cattle
    {x: 9, y: 6},//dogs
    
    {x: 11, y: 10},//horses

    
  ];
  //TODO: bar is my favorite animals
export const AnimalChart = () => (
    <XYPlot height={400} width={400}>
      <DiscreteColorLegend
        style={{position: 'absolute', left: '50px', top: '10px'}}
        orientation="horizontal"
        items={[
          {
            title: 'Cats',
            color: '#79C7E3'
          },
          {
            title: 'Cattle',
            color: '#79C7E3'
          },
          {
            title: 'Dogs',
            color: '#79C7E3'
          },
          
          
          {
            title: 'Horses',
            color: '#12939A'
          },
        ]}
      />
      
      <YAxis title="# Animals I've owned"/>
      <VerticalBarSeries data={AnimalData} opacity={5}/>
    </XYPlot>
  )
