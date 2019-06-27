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
    const inplayer = document.createElement('script')
    inplayer.type = 'text/javascript'
    inplayer.src = 'https://assets.inplayer.com/paywall/latest/paywall.min.js'
    document.head.appendChild(inplayer)

    inplayer.onload = () => {
      const paywall = new InplayerPaywall(
        '23b08bc0-c50c-4bb1-8606-6a2db940919e',
        [
          {
            id: 67120,
          },
        ],
        {
          brandingId: 472,
        }
      )
    }

    // inplayer-67120
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
        <a
          href="https://www.eventbrite.com.au/e/stab-high-an-invitational-world-class-surfing-event-in-texas-tickets-59865637734"
          className="cta-bar"
        >
          <div className="cta-text">
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
            <div>TICKETS ON SALE NOW - JUNE 29 2019</div>
          </div>
        </a>
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
            style={{ flexDirection: 'column' }}
            className="sidebar-block"
          >
            <i className="fa fa-question" />
            <span style={{ fontSize: '13px', letterSpacing: '1px' }}>FAQ</span>
          </div>
          <img
            className="logo"
            src={require('../layouts/images/logo_plain_02.png')}
          />
          <div className="sidebar-text">
            {/* JUNE 29, 2019 */}
            <img src={require('../layouts/images/WACO_LOGO.png')} />
          </div>
        </div>
        <div className={fixedMenuClass}>
          <div className="mb-50">
            <h1>
              <b>ALL THE DETAILS</b>
            </h1>
            <h2>
              <b>June 29 - WACO, TX</b>
            </h2>
            <img
              style={{ width: '100%', marginTop: '22px' }}
              src={require('../layouts/images/waco.jpg')}
            />
          </div>

          <div className="mb-50">
            <h2>
              <b>Broadcast / InPlayer Details</b>
            </h2>
            <p>
              <div>
                <b>Where and how do I watch the live event?</b>
              </div>
              To watch the live event, you will need to create an account and
              make a purchase from the homepage of this site.
            </p>

            <p>
              <div>
                <b>Will I be able to watch the live event from my location?</b>
              </div>
              Yes. The live event is available worldwide.
            </p>

            <p>
              <div>
                <b>How do I create an account?</b>
              </div>
              <ul>
                <li>1. Press the [Buy] button "Buy for $14.99"</li>
                <li>
                  2. Login, or Signup with a social account (Facebook, Google,
                  Twitter), or use an email and password.
                </li>
                <li>
                  3. You will receive an email confirmation for a successfully
                  created account. To make a purchase, proceed to the next
                  section.
                </li>
              </ul>
            </p>

            <p>
              <div>
                <b>How do I login and watch?</b>
              </div>
              <ul>
                <li>
                  1. Click on the [Buy] button or on the “Already Have Access”?
                </li>
                <li>
                  2. On the form that appears, enter your login credentials
                  (Email and Password).
                </li>
                <li>3. Click login</li>
              </ul>
            </p>

            <p>
              <div>
                <b>Is payment on your site secure?</b>
              </div>
              Yes! All sensitive data we handle is sent via SSL.
            </p>

            <p>
              <div>
                <b>How do I reset my password?</b>
              </div>
              <ul>
                <li>
                  1. Navigate to the login form by clicking on the Buy button or
                  on the Already Have Access Button.
                </li>
                <li>
                  2. Press the Forgot Password button located below the password
                  field on the login screen.
                </li>
                <li>
                  3. Enter your Email Address and press the Submit button.
                </li>
                <li>
                  4. Leave the tab with the form open. In the new tab, check
                  your email for a Token – A Token is a code consisting of
                  numbers and letters which you can use to update your password.
                </li>
                <li>
                  5. Copy and paste the Token in the Token field and type in
                  your new password. Then click Submit. Your password will be
                  updated. If you experience issues, please email
                  support@inplayer.com
                </li>
              </ul>
            </p>
          </div>

          <div className="mb-50">
            <h2>
              <b>Stab High 2.0 is returning to Waco, Texas on June 29</b>
            </h2>
            <p>
              Last year&rsquo;s greatest performers, including event champ Noa
              Deane, runner-up Chippa Wilson, Big Air winner Eithan Osborne,
              teenage flipster Eli Hanneman, and the highest scoring surfer
              Mason Ho will all be back in attendance, including another dozen
              (or so) elite punters.
            </p>

            <p>
              &ldquo;It's pretty much the sickest event ever,&rdquo; Noa Deane
              said in 2018, following his Stab High win. &ldquo;Chip and I just
              slammed like four beers before the final.&rdquo;
            </p>

            <p>
              The ethos of Stab High is simple: we want to create a fun,
              progressive, and brutally honest surfing event that doesn't take
              all day. This year, Stab High will run from 3 p.m. 'till sunset
              and can be viewed in-person at Waco&rsquo;s Barefoot Ski Resort or
              on our live webcast. Competition highlights will air on ESPN
              following the event.
            </p>

            <p>
              This year&rsquo;s event will introduce the Stab High Ladybirds
              division&ndash; an invitational aerial competition for
              15-and-under females, including Sierra Kerr, Caitlin Simmers, and
              Bella Kenworthy. First and second place will advance to the 2019
              Australian Stab High event (details coming soon) and the Ladybirds
              winner will be awarded a 12-month Vans flow contract.
            </p>

            <p>
              &ldquo;There's so much new energy in surfing and skating now.
              It&rsquo;s our job to set the stage and offer these unique
              opportunities to everyone,&rdquo; says Scott Sisamis, Vans&rsquo;
              Director of Sports Marketing. &ldquo;The Ladybird division is
              going to go off!&rdquo;
            </p>

            <p>
              Monster Energy have continued their support of Stab High and,
              keeping tradition from last year&rsquo;s event, they&rsquo;re
              adamant that we penalize surfers for claiming, and that winners
              must forfeit all prize money to a charity of their choice if
              they&rsquo;re chaired up the beach.{' '}
            </p>

            <p>
              Along with Monster, Vans have returned as a headline sponsor of
              Stab High in 2019. &ldquo;I was lucky enough to attend the first
              Stab High,&rdquo; said Sisamis. &ldquo;At the time, I was heading
              a team to re-launch Vans Surf through the lens of radical
              experimentation leading to cultural progression&mdash;Stab High is
              the perfect example of this. Not many contests have a field of
              competitors exclaiming how much fun the contest was. It is a
              really creative stage for progressive freesurfing and surfers that
              haven&rsquo;t been showcased on this level before, and for a live,
              truly engaged audience.&rdquo;
            </p>

            <p>
              We&rsquo;ll also welcome the return of the Vans Acid Drop hosted
              by Nathan Fletcher, in which surfers attempt to jump from the top
              of the wavepool&rsquo;s 12-foot concrete wall straight onto a
              wave. Since no one has ridden away from this atmospheric plunge in
              Waco&rsquo;s brief history, this year we&rsquo;ll be using a
              series of raised tiers along the wall that surfers must complete,
              in ascending order, before they can attempt the mega drop.
            </p>

            <p>
              &ldquo;That was fucking heavy!&rdquo; said Harry Bryant, after
              coming inches from an Acid Drop completion last year. &ldquo;I
              nearly buckled me board.&rdquo;
            </p>

            <p>
              This year the event will be judged by 2018 Stab High competitor
              Albee Layer (who is out of the water with an injury), east coast
              aerial tycoon Aaron &lsquo;Gorkin&rsquo; Cormican, and one
              yet-to-be-named punt critic, with Stab&rsquo;s resident surf nerd
              Michael Ciaramella acting as head judge (which is a fancy title
              for beer maid).
            </p>

            <p>
              One core aspect of Stab High is that we encourage our viewers to
              vocalize any of our judges&rsquo; wrongdoings. Hell, you can throw
              a rotten tomato for all we care.
            </p>

            <p>
              &ldquo;All that shuv-it crap isn't surfing,&rdquo; proclaimed
              ...Lost Surfboard founder Matt &lsquo;Mayhem&rsquo; Biolos after
              watching last year&rsquo;s event, which saw Noa Deane win on two
              silky varials.
            </p>

            <p>
              &ldquo;Guys were doing that stuff 20 years ago,&rdquo; Matt
              continued. &ldquo;Eli [Hanneman]&rsquo;s flips on the other
              hand&#8230;&rdquo;
            </p>

            <p>
              German artist Stefan Marks will be adorning Waco&rsquo;s Barefoot
              Ski Ranch with all kinds of creative oddities, including the
              competitors&rsquo; T-shirts &ndash; of which the goofies will wear
              white and regulars black &ndash; the concert venue, and the
              wavepool wall.
            </p>

            <p>
              Food, drinks, and exclusive event merchandise will be made
              available for our Waco event-goers. All ages are welcome and
              you&rsquo;re allowed to surf during the event, too; we&rsquo;ll
              just have you sitting away from the action and not fighting our
              competitors for waves.{' '}
            </p>

            <p>
              And don't worry, we'll do our best to keep Harry
              &ldquo;Headlock&rdquo; Bryant away from the children.
            </p>

            <p>
              Cost of admission to Stab High is $41.50, but $175 gets you to VIP
              status, which offers a number of notable perks.{' '}
            </p>

            <p>
              For those who can&rsquo;t make it, Stab High will be broadcast
              live for $14.99, starting at
              the following global hours on June 29 (or June 30 in Oz): 12:30 p.m
              PST; 2:30 p.m. CST (local Texas time); 3:30 p.m. EST; 5:30 a.m. AEST
            </p>

            <p>See you there.</p>
          </div>
        </div>
        <div className="btn-wrappers">
          <a
            href="/#inplayer-67120"
            className="btn-primary hide-mobile"
            style={{ marginRight: '12px' }}
          >
            LIVESTREAM TICKETS
          </a>
          <a
            href="https://www.eventbrite.com.au/e/stab-high-an-invitational-world-class-surfing-event-in-texas-tickets-59865637734"
            className="btn-primary hide-mobile"
            target="_blank"
          >
            EVENT TICKETS
          </a>
        </div>
        <div className="hero">
          <img src={require('../layouts/images/logo_plain_01.png')} />
        </div>
        {/* <div className="random-monster__3">
          <img
            className="rellax"
            data-rellax-speed="11"
            src={require('../layouts/images/2x/outline_two-bk@2x.png')}
          />
        </div> */}

        <div className="list-container">
          <div className="video-container" style={{ paddingBottom: '0px' }}>
            <h3 className="headline-title pre-order-title">
              WATCH THE LIVE STREAM
            </h3>
          </div>

          <div className="video-container" style={{ paddingTop: '0px' }}>
            <div id="inplayer-67120" className="inplayer-paywall" />
            {/* <iframe
              src="https://www.youtube.com/embed/r6pDrY8ZQsE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </div>

        <div
          className="list-container"
          id="event-results"
          style={{ backgroundColor: 'white', display: 'none' }}
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
          style={{ backgroundColor: 'white', display: 'none' }}
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
          href="https://www.eventbrite.com.au/e/stab-high-an-invitational-world-class-surfing-event-in-texas-tickets-59865637734"
          className="buy-tickets-mobile"
        >
          EVENT TICKETS
        </a>
        {/* <a
          target="_blank"
          href="https://stabmagazine.cleeng.com/stab-high-a-surf-contest-mostly-in-the-air/E976314967_US?_ga=2.24139570.963626054.1536793788-1585989039.1534795076"
          className="buy-tickets-mobile"
          style={{ borderTop: '1px solid #fff' }}
        >
          PAY PER VIEW TICKETS
        </a> */}
      </div>
    )
  }
}

export default ResultsPage
