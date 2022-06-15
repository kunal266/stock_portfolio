import React from 'react'
import LineChart from 'react-svg-line-chart'

const data = []

for (let x = 1; x <= 30; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * (100)) })
}

export default class Bruh extends React.Component {
    state = {
        activePoint: null,
    }

    handlePointHover = (activePoint, e) => {
        this.setState({activePoint})
    }

    render() {
        const {activePoint} = this.state
        return (
            <LineChart
            data={data.map((point, i) => ({...point, active: point.x === activePoint.x ? true : false}))}
            pointsOnHover={this.handlePointHover}
            />
        )
    }
}