import React, { Component } from 'react'
import HeatRow from './HeatRow'

export default class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { name, surfers } = this.props.data

    const surferList =
      surfers &&
      Object.keys(surfers).map((item, idx) => {
        return <HeatRow key={item} idx={idx} details={surfers[item]} />
      })

    return (
      <div className="results_wrap">
        <div className="heat-wrap">
          <div className="heat-wrap__header">{name}</div>
          {surferList}
        </div>
      </div>
    )
  }
}
