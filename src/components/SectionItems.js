import React, { PureComponent } from 'react'


import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

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
            <div className="list-item__content-container">{i.content}</div>
          </div>
        </div>
      )
    })

    return <div>{sectionItems}</div>
  }
}

export default SectionItems
