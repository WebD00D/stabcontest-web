import React from 'react'
import Link from 'gatsby-link'

import 'antd/dist/antd.css'
import './index.css'

import { Row, Col, Icon } from 'antd'

import * as UI from '../StyledComponents/index'



const Hero = () => (
  <div className="hero" >
    <div className="hero-filter"></div>
    <Row>
      <Col span={10}>
        <div className="pad-24">
          <UI.H1 className="mb-12">
            <b>Stab High is here.</b>
          </UI.H1>

          <Row className="fx fx-ac mb-12">
            <Col span={7}>
              <UI.H1 className="year-headline">
                <b>2018</b>
              </UI.H1>
            </Col>
            <Col span={13}>
              <UI.H3 className="lh-1x-1">Waco, TX</UI.H3>
              <UI.H3 className="lh-1x-1">September 22nd</UI.H3>
            </Col>
          </Row>

          <button className="fc-mono">
            BUY TICKETS
            <Icon type="arrow-right" />
          </button>
        </div>
      </Col>
    </Row>
  </div>
)

export default Hero
