import React, { Component } from 'react'

export default class HeatRow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    console.log("heat row", this.props.details);

    const { bestLeft, bestRight, location, name, photo_title, total } = this.props.details;


    return (
      <div className="competitor">
        <div className="profile">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${require('../layouts/surfers/' + photo_title + '.png')})`
            }}
          />
          <div className="profile-name">
           <small>{this.props.idx + 1}</small> {name} <span>{location}</span>
          </div>
        </div>

        <div className="rounds">
          <div className="round">
            <div className="score">
              <b>{bestRight}</b>
            </div>
            <small>Best Right</small>
          </div>
          <div className="round">
            <div className="score">
              <b>{bestLeft}</b>
            </div>
            <small>Best Left</small>
          </div>

          <div className="round total">
            <div className="score">
              <b>{total}</b>
            </div>
            <small>Total Score</small>
          </div>
        </div>
      </div>
    )
  }
}
