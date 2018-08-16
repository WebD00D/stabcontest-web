import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import SectionItems from '../components/SectionItems'

import '../layouts/stabhigh.css'

import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

class IndexPage extends PureComponent {
  constructor(props) {
    super(props)

    this.handleMobileClick = this.handleMobileClick.bind(this)

    this.state = {
      showInfo: false,
      activeItem: '',
    }
  }
  componentDidMount() {
    var rellax = new Rellax('.rellax')
  }

  handleMobileClick() {
    if (this.state.showInfo) {
      this.setState({
        showInfo: false,
      })

      // remove body overflow hidden
      document.body.style.overflowY = ''
    } else {
      this.setState({
        showInfo: true,
      })

      // set body to overflow hidden.
      document.body.style.overflowY = 'hidden'
    }
  }

  render() {
    const fixedMenuClass = this.state.showInfo
      ? 'fixed-menu'
      : 'fixed-menu fixed-menu--hidden'

    return (
      <div>
        <div
          onClick={() => {
            this.handleMobileClick()
          }}
          className="sidebar-block--mobile"
        >
          <i className="fa fa-bars" />
        </div>

        <div className="sidebar">
          <div
            onClick={() => {
              this.setState({ showInfo: !this.state.showInfo })
            }}
            className="sidebar-block"
          >
            <i className="fa fa-bars" />
          </div>
          <img
            className="logo"
            src={require('../layouts/images/_SH_logo.png')}
          />
          <div className="sidebar-text">
            <img src={require('../layouts/images/_date.png')} />
          </div>
        </div>

        <div className={fixedMenuClass}>
          <div className="mb-50">
            <h1>
              <b>ALL THE DETAILS</b>
            </h1>
            <h2>
              <b>September 22 - WACO, TX</b>
            </h2>
            <h4>
              THAT DIDN'T LOOK GOOD ANYWHERE ELSE AND THAT YOU PROBABLY WON'T
              READ
            </h4>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>What is Stab High?</b>
            </h3>
            <p>
              Stab High is a world class surfing event in the heart of Texas.
            </p>
            <p>
              {' '}
              Despite the oxymoron, this middle-American location may just be
              surfing’s ultimate competitive platform.{' '}
            </p>
            <p>
              Some context: At Barefoot Ski Ranch in Waco, Texas, owner Stuart
              Parsons installed the first full-sized American Wave Machines wave
              pool. Professional surfer Cheyne Magnusson was hired to manage the
              site and lead wavepool testing, which led to the creation of the
              world’s greatest man-made air section. Stab High will gather 16 of
              surfing’s premier aerialists in Waco, where over a live webcast
              surfers like Chippa Wilson, Noa Deane, and Albee Layer will
              attempt to land the biggest and most innovative aerials possible,
              for a significant cash prize.
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>The Premiere Performance Wave</b>
            </h3>
            <p>
              Without the slightest whiff of hyperbole, the BSR wavepool is the
              premiere performance wave in the world. Surfers who visited Stab
              there in May said they hadn’t met an air section as good as this
              pool provided in the past 12 months. Not one.
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>Competition Breakdown</b>
            </h3>
            <p>
              <ul>
                <li>There will be 16 surfers in the preliminary round.</li>
                <li>
                  All surfers will receive four rights and four lefts, with the
                  top right score and top left score counting toward the
                  surfers’ two-wave totals.
                </li>
                <li>
                  The top eight two-wave totals from the preliminary round will
                  advance to the Semi-finals*
                </li>

                <li>
                  Semi-finalists will receive another four rights and four
                  lefts, again counting their top right score and top left score
                  toward their two-wave totals.
                </li>
                <li>
                  The top four two-wave totals will advance to the finals*.
                </li>
                <li>
                  Finalists will receive four rights, four lefts, and one bonus
                  wave of their directional preference.
                </li>
                <li>
                  Whichever surfer has the highest two-wave total (using a right
                  and a left) at the end of the final, wins.
                </li>
              </ul>
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>How the judging works</b>
            </h3>
            <p>
              <ul>
                <li>
                  Waves will be scored from 0 to 100 on a static, event-wide
                  scale (judges will be able to look back at past-completed airs
                  to keep their scoring consistent throughout the event).
                </li>
                <li>
                  Only airs will be scored. Turns/blowtails/club-sandwiches will
                  not count.
                </li>
                <li>
                  Airs must be completed with control and ridden out under the
                  power of the wave, with at least the nose of the board
                  breaking free from the whitewater. (WSL rulez)
                </li>
                <li>
                  Scoring criteria: We’re gonna be stingy with our scores, but
                  only because we know how good these guys are! For a benchmark,
                  we’ve set Seth Moniz’s backflip (currently the best air landed
                  at the Waco site) at a clean 80-pointer. Here’s what the airs
                  will be judged on:
                  <ul>
                    <li>
                      Height (determined by the lowest part of board or body)
                    </li>
                    <li>
                      Speed/Distance covered (has anybody cleared the whole
                      section yet?)
                    </li>
                    <li>Style (if it looks good, it scores great)</li>
                    <li>
                      Progression and creativity (any weird grabs, tweaks,
                      spins, rolls, and flips will be noted!)
                    </li>
                    <li>Landing (the cleaner, the better)</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>


          <div className="mb-50">
            {' '}
            <h3>
              <b>Beyond the surf.</b>
            </h3>
            <p>
              Stab High isn’t just a surfing competition – it’s also an
              end-of-summer-blowout, suitable for humans of all ages, interests,
              and ideologies!
            </p>
            <p>
              Stab High attendees are encouraged to wade in the shallow-end
              while our surfers kiss the stratosphere, enjoy chilled beverages
              at the heavily stocked pool bar, or feast on cuisine from our
              fleet of health-focused food trucks. The event will also feature
              vibrant art exhibits, live music and a wild affter-party, making
              Stab High the ultimate way to bid summer adieu.{' '}
            </p>
          </div>
        </div>

        <a href="#" className="btn-primary hide-mobile">
           TICKETS ON SALE SOON
        </a>

        <div className="hero">
          <img src={require('../layouts/images/01_title.png')} />
        </div>

        {/* RANDOM MONSTERS */}

        <div className="random-monster__3">
          <img
            className="rellax"
            data-rellax-speed="11"
            src={require('../layouts/images/2x/outline_two-bk@2x.png')}
          />
        </div>

        <div className="list-container">
          <SectionItems />
        </div>

        <a href="#" className="buy-tickets-mobile">
        TICKETS ON SALE SOON

        </a>
      </div>
    )
  }
}

export default IndexPage
