import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import '../layouts/stabhigh.css'

import DemBars from '../components/BackgroundBars/index'
import Navigation from '../components/Navigation/index'

import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

class IndexPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
      activeItem: '',
    }
  }
  componentDidMount() {
    // var scene = document.getElementById('scene')
    // var parallaxInstance = new Parallax(scene)

    var rellax = new Rellax('.rellax')
  }

  render() {
    const sections = [
      {
        title: 'ALBEE LAYER',
        content: `An aerial pioneer of the highest order, Albee Layer is the first surfer ever to land both a double-alleyoop and a double-backside-air-reverse. At Stab High, he intends to add a few more novel tricks to that list (hint: watch for the judo alleyoop!)`,
      },
      {
        title: 'Matt Meola',
        content: `Like Albee, Matt Meola hails from Maui and is the owner of his very own surfing maneuver, the Spindle Flip – a corked, 540-degree double-grab rotation. Matt is considered one of the most nimble aerialists in the world, and is an easy favorite coming into Stab High.`,
      },
      {
        title: 'Dion Agius',
        content: `A former air show competitor from the early 2000s, Dion Agius has built a career around his ability to take flight. Dion’s small stature and compact stance will be an advantage at Waco, where high flights and soft landings will be the recipe for big scores. After the skyscraper ‘oop he landed in Epokhe’s Listen Now, Misty Dawn, Dion should be considered a favorite for our $20k big air prize.`,
      },
      {
        title: 'Seth Moniz',
        content: `On his first trip to Waco this past May, Seth Moniz stomped what was, and still is, the best air ever landed in a wavepool. His unfathomably clean backflip sent the surfing world topsy turvy when it splashed on Instagram, and since then many pros have tried to replicate the maneuver. While there have since been flips landed by Barron Mamiya, Eli Hanneman, and Noah Beschen, none have eclipsed Seth’s original gainer.`,
      },
      {
        title: 'Craig Anderson',
        content: `An iconic modern stylist, Craig Anderson is what you get when mixing Rob Machado’s long-haired panache with Dion Agius’ aerial mastery. Despite Craig’s permanently cocked knee, he’s proven capable of tackling all aspects of surfing, be it a sapphire mutant or full rotation to the flats. The man is a sea ballerina`,
      },

      {
        title: 'Jay Davies',
        content: `Physically speaking, Jay Davies is the biggest aerialist in the world. Despite being 6’3” and carved out of West Australian rock, Jay is incredibly limber and will finesse a spin with the best of them. He can also consume more Texas BBQ than Dion, Craig, and Meola combined.`,
      },
      {
        title: 'Chippa Wilson',
        content: `Christopher ‘Chippa’ Wilson is the most technically gifted aerialist in the world. The lynx-like Australian has both a deeper bag of tricks and a higher completion rate than just about anybody in the world, which is what makes Chippa the odds-on favorite to win Stab High`,
      },
      {
        title: 'Noa Deane',
        content: `The son of surfing royalty, Noa Deane has built a niche for himself in the world of non-compete aerial mastery. He’s landed a few of the biggest airs in the history of sport, which can be attributed to his thunderous thighs and general absence of fear.`,
      },
      {
        title: 'Ethan Osborne',
        content: `If he isn’t able to win on talent alone, Eithan Osborne will use his homo erectus hunch to shock competitors into submission. We wonder if this underground punter from Santa Barbara might whet a few palettes with his Reynolds-inspired flair.`,
      },
      {
        title: 'Harry Bryant',
        content: `After bursting onto the scene a few years back, Harry Bryant has contributed many terrific oddities to the world of surf, but none greater than his patented bowl cut. With a clean line of vision made possible by his pin-straight bangs, Harry will attack the ramp with rigor and aplomb`,
      },
      {
        title: 'Brendon Gibbens',
        content: `This rubber-legged lad can absorb impact like Russian gymnast, often crumbling into pile of limbs before resurrecting from the whitewash completely intact. As the only South African surfer in the draw, Brendon Gibbens will have the advantage`,
      },
      {
        title: 'Eli Hanneman',
        content: `Eli Hanneman may be small, but he is mighty fine in the sky. At just 15-years-old, Stab High’s token wonderkid has already landed a backflip in the Waco pool, making him a genuine threat against his older, more creaky-limbed competitors. Eli may be a longshot to win but he’ll undoubtedly entertain the masses with his silky rotations.`,
      },
    ]

    const sectionItems = sections.map((i, key) => {
      console.log('section item', i.title)

      const contentClass =
        this.state.activeItem === i.title
          ? 'list-item__content'
          : 'list-item__content closed'
      const arrowClass =
        this.state.activeItem === i.title ? 'arrow-wrap' : 'arrow-wrap hide'

      const headerClass =
        this.state.activeItem === i.title
          ? 'list-item__header list-item__header--active'
          : 'list-item__header'

      return (
        <div key={key} className="list-item">
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              this.setState({ activeItem: i.title })
            }}
            className={headerClass}
          >
            <div className={arrowClass}>
              <Icon type="arrow-right" />
            </div>{' '}
            {i.title}
          </a>
          <div className={contentClass}>
            <div className="list-item__content-container">{i.content}</div>
          </div>
        </div>
      )
    })

    const fixedMenuClass = this.state.showInfo
      ? 'fixed-menu'
      : 'fixed-menu fixed-menu--hidden'

    return (
      <div>
        <div
          onClick={() => {
            this.setState({ showInfo: !this.state.showInfo })
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
              Stab High is surfing’s ultimate competitive platform. By that we
              mean: it’s not fucking boring. Surfing events are mostly boring
              even for core surfers. Fields of too many surfers, in an
              unpredictable ocean that often serves few opportunities in a
              scoring system that is very difficult for even surf enthusiasts to
              follow, let alone the everyman. Even the Founders Cup, the recent
              event in the KS wave pool, took surfing back two decades in a
              format that essentially rewarded safety surfing.{' '}
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>The Premiere Performance Wave</b>
            </h3>
            <p>
              Without the slightest whiff of hyperbole, the BSR wavepool is the
              premiere performance wave in the world. Bar none. Surfers who
              visited in with Stab for a trip in May said they hadn’t had a
              section for an air as good as this pool provided in the past 12
              months. Not one.
            </p>
            <p>
              After creating what he considers the “world’s best” barefoot track
              in Waco, Texas, Stuart Parsons realized he could expand his
              Barefoot Ski Ranch by including facilities for other water sports.
              Parsons then added a wakeboard cable park, a Lazy River, and the
              Royal Flush (a mega-waterslide that launches users up to 30 feet
              in the air) to his 500-acre lot, leaving just one final piece to
              complete his bona fide water kingdom: a wavepool.
            </p>
          </div>

          <div className="mb-50">
            {' '}
            <h3>
              <b>Competition Breakdown</b>
            </h3>
            <p>
              <ul>
                <li>There will be 16 surfers and 3 qualifying rounds</li>
                <li>
                  For each of Rounds 1-3, 48 rights will be surfed by all
                  competitors in groups of four (with surfers alternating
                  waves). After all 48 rights are completed (3 rights per
                  competitor), 48 lefts will be surfed by the same groups.
                </li>
                <li>Group members will alternate after each round. </li>
                <li>Live stream starts with Round 3.</li>
                <li>
                  After Round 3, each surfer counts the top 3 of their 18 total
                  rides to go toward their qualifying score. Surfers MUST use at
                  least one left and one right in their three-wave total.{' '}
                </li>
                <li>
                  The six surfers with the highest three-wave totals will
                  advance to the final round.{' '}
                </li>
                <li>
                  Should two or more surfers tie in the qualifying round, there
                  will be a surf-off between those competitors. In the surf-off,
                  each surfer gets two waves of their directional preference.
                  Top single score wins.{' '}
                </li>
                <li>
                  Potential halftime show with the 10 disqualified surfers (see
                  below for details)
                </li>
                <li>
                  Final: 6 surfers x 11 waves apiece (5 rights + 5 lefts + 1
                  you-choose-it){' '}
                </li>
                <li>
                  {' '}
                  Surfers will ride alternating waves in the order of which they
                  qualified (6th qualifier goes first, 5th goes second, etc.).
                  30 rights, then 30 lefts. Each surfer can choose the direction
                  of their 11th wave.{' '}
                </li>
                <li>
                  Each surfer’s top right and top left count toward their final
                  score.
                </li>
                <li>
                  Whichever surfer has the highest 2-wave total at the end of
                  the final, wins.
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
                  Surfers will be scored from 0-100 on a static, event-wide
                  scale (judges will be able to look back at past-completed airs
                  to keep their scoring consistent throughout the event).
                </li>
                <li>
                  Only airs will be scored, turns/blowtails/club-sandwiches will
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
                </li>
                <li>Height (determined by the lowest part of board or body)</li>
                <li>
                  Speed/Distance covered (has anybody cleared the whole section
                  yet?)
                </li>
                <li>Style (if it looks good, it scores great)</li>
                <li>
                  Progression and creativity (any weird grabs, tweaks, spins,
                  rolls, and flips will be noted!)
                </li>
                <li>Landing (the cleaner the better)</li>
              </ul>

       
            </p>
          </div>
        </div>

        <a href="#" className="btn-primary hide-mobile">
          BUY TICKETS
        </a>

        <div className="hero">
          <h1>SURFING'S ULTIMATE COMPETETIVE PLATFORM</h1>
          <h2>
            BY THAT WE MEAN: IT'S NOT <i>FUCKING BORING.</i>
          </h2>
        </div>

        {/* RANDOM MONSTERS */}
        <div className="random-monster__2">
          <img
            className="rellax"
            data-rellax-speed="7"
            src={require('../layouts/images/2x/outline_one-bk@2x.png')}
          />
        </div>

        <div className="random-monster__3">
          <img
            className="rellax"
            data-rellax-speed="11"
            src={require('../layouts/images/2x/outline_two-bk@2x.png')}
          />
        </div>

         <div className="random-monster__4">
          <img
            className="rellax"
            data-rellax-speed="5"
            src={require('../layouts/images/2x/outline_three-bk@2x.png')}
          />
        </div>

        <div className="list-container">{sectionItems}</div>

        <a href="#" className="buy-tickets-mobile">
            BUY TICKETS
        </a>
      </div>
    )
  }
}

export default IndexPage
