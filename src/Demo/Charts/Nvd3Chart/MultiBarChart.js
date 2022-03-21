import React from 'react';
import NVD3Chart from 'react-nvd3';

function generateNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function getDatum() {
    let sin = [],
        sin2 = [],
        sin3 = [];

    const len = 7 ;
    for (let i = 0; i < len; i++) {
        sin.push({
            'x': i,
            'y': generateNumber(0, 100),
        });
        sin2.push({
            'x': i,
            'y': generateNumber(0, 100)
        });
        sin3.push({
            'x': i,
            'y': generateNumber(0, 100)
        });
    }
    return [
        {
            values: sin,
            key: 'collection',
            color: '#6610f2'
        },
        
        {
            values: sin2,
            key: 'Sales',
            color: '#198754'
        },
        {
            values: sin3,
            key: 'Remainings',
            color: '#1de9b6',
            area: true
        },
    ];
}

class MultiBarChart extends React.Component {

    render() {
        const data = getDatum();
        return <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.1} />
    }
}

export default MultiBarChart;