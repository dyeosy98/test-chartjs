import React from 'react';

import { HorizontalBar } from 'react-chartjs-2';

const options = {
    title: {
        display: true,
        text: 'Kinkiest Majors'
    },
    scales: {
         xAxes: [{
             stacked: true,
             ticks: {
                // Include a % sign in the ticks
                callback: function(value, index, values) {
                    return value + '%';
                }
            }
         }],
         yAxes: [{
             stacked: true
         }]
     }
 }

const data ={ 
   datasets:[{
        label: 'Definitely not',
        backgroundColor: 'rgba(10,10,10,0.2)',
        data:[25, 25, 25, 25]
    },
    {
        label: 'Hmm',
        backgroundColor: 'rgba(255,200,132,0.2)',
        data:  [60, 55, 45, 60]

    },
    {
        label: 'Let\'s experiment!',
        backgroundColor: 'rgba(255,99,132,0.2)',
        data:  [15, 20, 30, 15]

     }],
   labels:['Physics', 'Computer Science', 'Sociology', 'Political Science']
 }

const HorizontalStackedBarChart = () => (
      <div>
        <HorizontalBar 
            data={data}
            width={600}
            height={600}
            options={options}
        />
      </div>
);


export default HorizontalStackedBarChart;