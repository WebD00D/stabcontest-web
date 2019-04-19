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
        <a href="https://www.eventbrite.com.au/e/stab-high-an-invitational-world-class-surfing-event-in-texas-tickets-59865637734" className="cta-bar">
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
            className="sidebar-block"
          >
            <i className="fa fa-bars" />
          </div>
          <img
            className="logo"
            src={require('../layouts/images/_SH_logo.png')}
          />
          <div className="sidebar-text">
            {/* JUNE 29, 2019 */}
            <img src={require('../layouts/images/_date.png')} />
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
            <h3>
              <b>
                Stab High 2.0 is returning to Waco, Texas on June 29, along with
                a live broadcast on stabmag.com.
              </b>
            </h3>
            <p>
              “It's pretty much the sickest event ever,” Noa Deane said in 2018,
              following his win. “Chip and I just slammed like four beers before
              the final.”
            </p>
            <p>
              At the inaugural Stab High event in 2018, we saw the world’s
              aerial elite competing to land the most robust airs in surfing –
              from flips to varials to sky-high straighties. This year we’re
              doing it all again... with a few exciting tweaks.
            </p>
            <p>
              Last year’s greatest performers, including event champ Noa Deane,
              runner-up Chippa Wilson, Big Air winner Eithan Osborne, teenage
              flipster Eli Hanneman, and the highest scoring surfer Mason Ho
              will all be back in attendance, including another dozen (or so)
              elite punters.
            </p>
            <p>
              One addition to this year’s event is the Stab High Ladybirds – an
              invitational aerial competition for 14-and-under females,
              including Sierra Kerr, Caitlin Simmers, and Bella Kenworthy. First
              and second from this event will head to the 2019 Australian Stab
              High event (details coming soon) and the winner will receive a
              12-month Vans contract.
            </p>
            <p>
              “There's so much new energy in surfing and skating now that it’s
              really our job to set the stage and offer those opportunities to
              everyone,” says Scott Sismas, VP of Vans. “The Ladybird division
              is going to go off!”
            </p>
            <p>
              Monster Energy have continued their support of Stab High and,
              keeping tradition from last year’s event, they’re adamant that we
              penalize surfers for claiming, and that winners must forfeit all
              prize money to a charity of their choice if they’re chaired up the
              beach.
            </p>
            <p>
              Along with Monster, Vans has come on as headline sponsor in 2019.
              “I was lucky enough to attend the first Stab High,” says Vans VP,
              Scott Sisamis. “At the same time I was heading a team to re-launch
              Vans Surf through the lens of radical experimentation leading to
              cultural progression. It was easy to see that Stab High was a
              perfect example of this. Not many contests have a field of
              competitors exclaiming how much fun it was. It was also a really
              creative stage for progressive freesurfing and surfers that hadn't
              been seen before.”
            </p>
            <p>
              We’ll also have a return of the Vans Acid Drop hosted by Nathan
              Fletcher, in which surfers attempt to jump from the top of the
              wavepool’s concrete wall (12 feet) straight onto a wave. Because
              no one has ridden away from this atmospheric plunge in Waco’s
              history, this year we’ll be using a series of raised tiers along
              the wall that surfers must complete, in ascending order, before
              they can attempt the mega drop. “That was fucking heavy!” said
              Harry Bryant, after coming inches from an Acid Drop completion
              last year. “I’ve nearly buckled me board.”
            </p>
            <p>
              The ethos of Stab High is simple: we want to create a fun,
              progressive, and brutally honest surfing event that doesn't take
              all day. This year Stab High will run over the course of four
              hours and can be viewed in-person at Waco’s Barefoot Ski Resort
              (tickets on sale soon) or on our live webcast (Pay-Per-View, read
              south for $$), while a condensed version of the competition can be
              found on ESPN several weeks after the event.
            </p>
            <p>
              This year the event will be judged by 2018 Stab High competitor
              Albee Layer (who is currently out with an injury), east coast
              aerial tycoon Aaron ‘Gorkin’ Cormican, and one yet-to-be named
              surfing critic, with Stab’s own Michael Ciaramella acting as head
              judge (which is a fancy title for beer maid).
            </p>
            <p>
              One core aspect of Stab High is that we encourage our viewers to
              vocalize any of our judges’ wrongdoings. Throw a rotten tomato if
              they really blew it. “All that shuv-it crap isn't surfing,”
              proclaimed ...Lost Surfboard founder Matt ‘Mayhem’ Biolos after
              watching last year’s event, which saw Noa Deane win on two silky
              varials. “Guys were doing that stuff 20 years ago,” Matt
              continued. “Eli [Hanneman]’s flips on the other hand…” German
              artist Stefan Marks will be adorning Waco’s Barefoot Ski Ranch
              with all kinds of creative oddities, including the competitors’
              T-shirts – of which the goofies will wear white and regulars black
              – the concert venue, and the wavepool wall.
            </p>
            <p>
              Food, drinks, and exclusive event merchandise will be made
              available for our Waco event-goers. All ages are welcome and
              you’re allowed to surf during the event, too: we’ll just have you
              sitting away from the action and not fighting our competitors for
              waves. And don't worry, we'll do our best to keep Harry “Headlock”
              Bryant away from the children.
            </p>
            <p>
              Cost of admission to Stab High is $38.50, but $175 gets you to VIP
              status, which offers a number of notable perks. For those who
              can’t make it, Stab High will be broadcasted live at stabhigh.com
              for $14 (on the day) or $9 if you purchase early.
            </p>
          </div>
        </div>
        <div className="btn-wrappers">
          <a
            href="https://www.eventbrite.com.au/e/stab-high-an-invitational-world-class-surfing-event-in-texas-tickets-59865637734"
            className="btn-primary hide-mobile"
          >
            BUY TICKETS
          </a>
        </div>
        <div className="hero">
          <img src={require('../layouts/images/logo_plain_01.png')} />
        </div>
        <div className="random-monster__3">
          <img
            className="rellax"
            data-rellax-speed="11"
            src={require('../layouts/images/2x/outline_two-bk@2x.png')}
          />
        </div>

        {/* <div className="list-container">
          <div className="video-container">
            <video controls autoPlay >
              <source
                src={require('../layouts/STABHIGH_hype_YT_1.mp4')}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}

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
