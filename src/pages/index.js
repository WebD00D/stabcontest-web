import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import SectionItems from '../components/SectionItems'
import Results from '../components/Results'

import '../layouts/stabhigh.css'

import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

import resultData from '../data/results.json'

class ResultsPage extends PureComponent {
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
        <div className="cta-bar">
          <div className="cta-text">
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
            <div>
              HOOT! AND THE WINNER OF STAB HIGH PRESENTED BY MONSTER IS NOA
              DEANE!
            </div>
          </div>
        </div>
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
            <img
              style={{ width: '100%', marginTop: '22px' }}
              src={require('../layouts/images/waco.jpg')}
            />
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>What is Stab High?</b>
            </h3>
            <p>
              Stab High is a world class surfing event in the heart of Texas.
              Despite the oxymoron, this middle-American location may just be
              surfing’s ultimate competitive platform.
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
              <b>Here's what a ticket will get you</b>
            </h3>
            <p>
              Access to Stab's air contest, starring 20 of the world’s best,
              non-WSL owned, jumpers; a pass to all of BSR Cable Park’s
              features—the world’s largest Lazy River and the Royal Flush (a
              water slide/launch ramp unlike any you’ve ever seen); the after
              party featuring a live performance by Poolside; the after-after
              party featuring Reverberation Radio; drinks, food, libations and
              much much more.
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>Here's what you need to know (Competition Breakdown)</b>
            </h3>
            <p>
              <ul>
                <li>
                  The Broadcast will go live at 12:30 pm local time. As most of
                  us don’t live in Texas, here’s how that translates to your
                  areas:
                </li>
                <li>
                  <i>EST. Saturday, September 22, 1.30pm</i>
                </li>
                <li>
                  <i>PST. Saturday, September 22, 10.30am</i>
                </li>
                <li>
                  <i>AEST. Sunday, September 23, 3.30am</i>
                </li>
                <li>
                  <i>AWST. Sunday, September 23, 1.30am</i>
                </li>
              </ul>
            </p>
            <p>
              The Round One Qualifier will run from 12:45 - 2:40 pm and will be
              available online free of charge. After that, you can pre-register
              for Pay Per View here: $13.99USD on event day or early bird price
              of $8.99USD. Round One will feature two lefts and two rights per
              surfer.
            </p>
            <p>
              The Round Two Qualifier will run from 2:45 - 4:40, and will once
              again feature two lefts and two rights per surfer (20 surfers in
              both Qualifiers).
            </p>
            <p>
              From 4:53 - 5:20 there will be a bonus wave, each surfer choosing
              a left or right of their choice. Two scores are held on to. One
              right and one left.{' '}
            </p>
            <p>The top six surfers will be in the final.</p>
            <p>
              Prior to the final, we have a special event to be announced soon.
              This will run from 5:25 - 5:50.
            </p>
            <p>At 6 pm (local time) the final round will kick off.</p>
            <ul>
              <li>
                <i>EST. Saturday, September 22, 7pm</i>
              </li>
              <li>
                <i>PST. Saturday, September 22, 5pm</i>
              </li>
              <li>
                <i>AEST. Sunday, September 23, 10am</i>
              </li>
              <li>
                <i>AWST. Sunday, September 23, 8am</i>
              </li>
            </ul>
            <p>
              In the final, four lefts and four rights will be ridden by each
              surfer plus a bonus wave of choice. The best two scores (left +
              right) will be taken into account to determine the winner.
            </p>
            <p>
              After the final, we will be rewarding six spectators a lucky door
              prize. They will be given a session in the pool with Shane Dorian
              and Bobby Martinez.
            </p>
            <p>
              Also, throughout the day, kids who want to ride the whitewash and
              the reform will be allowed to do so. We’re working with the
              lifeguards on what those final numbers look like, but we’ll be
              sure to get the groms riding a few waves at very least.
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
              fleet of health-focused food trucks.
            </p>
            <p>
              After the competition ends, daytime disco group, Poolside will
              play a live show at sunset.
            </p>
            <p>
              There will be a following after-after party spun by various DJs to
              keep the vibes going well past our bedtimes on the lawn at BSR
              Cablepark.
            </p>
          </div>
        </div>
        <div className="btn-wrappers">
          <a
            href="https://stabmagazine.cleeng.com/vod/stab-high-vod/A617539948_US"
            className="btn-primary hide-mobile"
          >
            WATCH ON DEMAND
          </a>
        </div>
        <div className="hero">
          <img src={require('../layouts/images/01_title.png')} />
        </div>
        <div className="random-monster__3">
          <img
            className="rellax"
            data-rellax-speed="11"
            src={require('../layouts/images/2x/outline_two-bk@2x.png')}
          />
        </div>ya
        <div
          className="list-container"
          id="event-results"
          style={{ backgroundColor: 'white' }}
        >
          <div className="photos-wrap">
            <h3 className="headline-title">FINAL RESULTS</h3>
            <p className="results-copy">
              From Round One to the Finals, the maneuvers progressed. It was a
              very different type of surf event. People lined the wall above the
              wave. Kids rode and played in the whitewash on the inside. There
              were cheers and laughs and hoots and hollers. And the six best
              surfers entered in to the final.
            </p>

            <Results data={resultData[0]} />
            {/* <Results data={resultData[1]} /> */}
          </div>
        </div>
        <div
          className="list-container"
          id="event-photos"
          style={{ backgroundColor: 'white' }}
        >
          <div className="photos-wrap">
            <h3 className="headline-title">EVENT PHOTOS</h3>

            <img
              className="event-photo"
              src={require('../layouts/images/event/Noa.jpg')}
            />
            <p className="photo-caption">
              1st place and $20k to the event winner Noa Deane.
            </p>

            <img
              className="event-photo"
              src={require('../layouts/images/event/EithanPhotoAir.jpg')}
            />
            <p className="photo-caption">
              Eithan Osborne won $20k for this air.
            </p>

              <img
              className="event-photo"
              src={require('../layouts/images/event/MasonHo.jpg')}
            />
            <p className="photo-caption">
            Mason Ho wins the award for best air shot we've ever seen.
</p>

            <img
              className="event-photo"
              src={require('../layouts/images/event/Eli.jpg')}
            />
            <p className="photo-caption">
              3rd place, 15 year old Eli Hanneman with the lunch money launch.{' '}
            </p>

            <img
              className="event-photo"
              src={require('../layouts/images/event/Ian.jpg')}
            />
            <p className="photo-caption">
              6th place Ian Crane and the electric spray.
            </p>



            <img
              className="event-photo"
              src={require('../layouts/images/event/Crane2.jpg')}
            />
            <p className="photo-caption">Crane doing the Crane.</p>

            <img
              className="event-photo"
              src={require('../layouts/images/event/Eli2.jpg')}
            />
            <p className="photo-caption">
              Eli Hanneman with another twirly whirly.
            </p>
          </div>
        </div>
        <div className="list-container">
          <SectionItems />
        </div>
        <a
          target="_blank"
          href="https://www.eventbrite.com.au/e/stab-high-tickets-49200690590"
          className="buy-tickets-mobile"
        >
          EVENT TICKETS
        </a>
        <a
          target="_blank"
          href="https://stabmagazine.cleeng.com/stab-high-a-surf-contest-mostly-in-the-air/E976314967_US?_ga=2.24139570.963626054.1536793788-1585989039.1534795076"
          className="buy-tickets-mobile"
          style={{ borderTop: '1px solid #fff' }}
        >
          PAY PER VIEW TICKETS
        </a>
      </div>
    )
  }
}

export default ResultsPage
