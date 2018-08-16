import React, { PureComponent } from 'react'

import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

const sections = [
  {
    title: 'ALBEE LAYER',
    meta: '27, Haiku, Maui',
    content: `A bona fide aerial pioneer, Albee Layer is the first surfer ever to land both a double-alleyoop and a double-backside-air-reverse. At Stab High, he intends to add a few more novel tricks to that list (hint: watch for the judo alleyoop!)`,
  },
  {
    title: 'Matt Meola',
    meta: '29, Haiku, Maui',
    content: `Like Albee, Matt Meola hails from Maui and is the owner of his very own surfing maneuver, the Spindle Flip – a corked, 540-degree double-grab rotation. Matt is considered one of the most nimble aerialists in the world, and is an easy favorite coming into Stab High. `,
  },
  {
    title: 'Dion Agius',
    meta: '33, Beaumaris, Tasmania',
    content: `A former air show competitor from the early 2000s, Dion Agius has built a career around his ability to take flight. The Tasmanian's small stature and compact stance will be an advantage at Waco, where high flights and soft landings are the recipe for big scores. After the skyscraper ‘oop he landed in Epokhe’s "Listen Now, Misty Dawn", Dion has to be a favorite for our $20k Big Air prize.`,
  },
  {
    title: 'Seth Moniz',
    meta: '20, Honolulu, Oahu',
    content: `On his first trip to Waco this past May, Seth Moniz stomped what was, and still is, the best air ever landed in a wave pool. His unfathomably clean backflip sent the surfing world topsy turvy when it ruptured Instagram, and since then many pros have tried to replicate the move. While there have since been flips landed by Barron Mamiya, Eli Hanneman, and Noah Beschen, none have eclipsed Seth’s original gainer.`,
  },
  {
    title: 'Jett Schilling',
    meta: '15, San Clemente, California',
    content: `This human Q-tip has taken up full-time residence on the Lower Trestles left, giving Jett all the practice he needs for forehand punts. However the question remains whether Jett’s backhand will be primed for the excessive pop of the Waco ramp, which is likely to launch his scrawny frame into the mesosphere.`,
  },
  {
    title: 'Ian Crane',
    meta: '25, San Clemente, California',
    content: `It’s been said that Ian Crane’s knock-kneed approach is a trait of function and not fashion. According to the lore, Ian’s knees act as a catcher’s mitt for his oversized hog, ultimately blocking it from slapping across the water while he surfs. Despite that physical impediment, Ian proved his aerial worth when visiting Waco with Stab this May, nailing a wider variety of punts than any surfer in our crew. `,
  },
  {
    title: 'Jay Davies',
    meta: '31, Yallingup, Western Australia',
    content: `Physically speaking, Jay Davies is one of the biggest aerialists in the world. Despite being 6’1” and carved out of West Australian timber, Jay is incredibly flexible and can finesse a spin with the best. He can also consume more Texas BBQ than Dion, Craig, and Meola combined.`,
  },
  {
    title: 'Chippa Wilson',
    meta: '30, Grafton, New South Wales',
    content: `Christopher ‘Chippa’ Wilson is the most technically gifted aerialist in the world. The lynx-like Australian has both a deeper bag of tricks and a higher completion rate than just about anybody in the world, which is what makes Chippa the odds-on favorite to win Stab High.`,
  },
  {
    title: 'Noa Deane',
    meta: '24, Coolangatta, Queensland',
    content: `The son of surfing royalty, Noa Deane has built a niche for himself in the world of non-compete aerial mastery. He’s landed a few of the biggest airs in the history of the sport, which can be attributed to his powerful thighs and general absence of fear. `,
  },
  {
    title: 'Ethan Osborne',
    meta: '18, Ventura, California',
    content: `If he isn’t able to win on talent alone, Eithan Osborne will use his primordial power stance to shock competitors into submission. We wonder if this underground punter might whet a few palettes with his Reynolds-inspired flair.`,
  },
  {
    title: 'Harry Bryant',
    meta: '22, Sunshine Beach, Queensland',
    content: `After bursting onto the scene a few years back, Harry Bryant has contributed many terrific oddities to the world of surf, but none greater than his patented bowl cut. With a clean line of vision made possible by his pin-straight bangs, Harry will attack the ramp with vigour and aplomb.`,
  },
  {
    title: 'Brendon Gibbens',
    meta: '26, Durban, South Africa',
    content: `This rubber-legged lad can absorb impact like a Korean gymnast, often crumbling into a pile of limbs before resurrecting from the whitewash entirely intact. As the only South African surfer in the draw, Brendon Gibbens will have the accent advantage when it comes to Stab High's bustling afterparty.`,
  },
  {
    title: 'Eli Hanneman',
    meta: '15, Lahaina, Maui',
    content: `Eli Hanneman may be small, but that just makes his airs look bigger. At just 15 years old, Stab High’s token wunderkind has already landed a backflip in the Waco pool, making him a genuine threat against his older, more creaky-limbed competitors. Eli may be a longshot to win in Waco, but he’ll entertain with his silky rotations and youthful enthusiasm.`,
  },
  {
    title: 'Hector Santamaria',
    meta: '25, Aguadilla, Puerto Rico',
    content: `Using the power of chi to fuel his quirky rotations, Hector Santamaria is the most eccentric aerialist we’ve ever seen. The Puerto Rican can pull flips on waves that hardly hit his shins and is more stoked on surfing than... well, anyone.`,
  },
]

class SectionItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: '',
    }
  }

  render() {
    const sectionItems = sections.map((i, key) => {
      console.log('section item', key)

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
            <div className="list-item__content-container">
              <div>
                <b>{i.meta}</b>
              </div>
              {i.content}
            </div>
          </div>
        </div>
      )
    })

    return <div>{sectionItems}</div>
  }
}

export default SectionItems
