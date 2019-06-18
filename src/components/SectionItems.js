import React, { PureComponent } from 'react'

import 'antd/dist/antd.css'
import { Icon, Drawer } from 'antd'

const sections = [
  {
    title: 'Noa Deane',
    meta: '25, Coolangatta, Queensland',
    other: 'Stance: regular | Specialties: loft, style, technicality',
    content: `Noa Deane won the inaugural Stab High event on the back of two decisive varial spins. He did so while roughly six beers deep, which is a testament to Noa’s uncommon skill and intestinal fortitude. But with a talented field nipping at his recently-unbroken ankle, will the reigning champ be able to defend his title? `,
  },
  {
    title: 'Harry Bryant',
    meta: '23, Sunshine Beach, Queensland',
    other:
      'Stance: goofy | Specialities: loft, sure-footedness, imperviousness to pressure',
    content: `Headlock Harry is back! After an unpleasant encounter with Waco’s robust security squad in 2018, Haz has been granted approval to re-enter the great state of Texas, but only if he keeps the neck hugging to a minimum at our Stab High afterparty. `,
  },
  {
    title: 'Chippa Wilson',
    meta: '31, Grafton, New South Wales',
    other: 'Stance: goofy | Specialties: technicality, incredible balance',
    content: `Chip finished second at last year’s Stab High—the result of a not-entirely-completed frontside varial in the final. Had he stomped this maneuver as cleanly as he did in the prelims, Chippa would have been the clear champion. As it were, the world’s most technical aerialist has room to improve at the 2019 event, and if he pulls out the “hand-assisted 360 shuv-it” in the final, it might be night night for his competitors. `,
  },
  {
    title: 'Mason Ho',
    meta: '30, Sunset Beach, Oahu',
    other:
      'Stance: regular | Specialties: quirkiness, eccentricity, Bruce Lee-ism ',
    content: `Mason Ho earned the single highest score at last year’s Stab High for a lofty, extended rodeo. It was the only wave to score in the 80-point range, putting Mase in a position to walk away with $25k if he could just land a simple frontside punt. Instead, Mason attempted Christ airs and finger-flips, bringing the crowd to their feet but ultimately leaving him scoreless. This year he promises to stick one. `,
  },
  {
    title: 'Eithan Osborne',
    meta: '19, Ventura, California',
    other: 'Stance: regular | Specialties: getting high.',
    content: `Eithan Osborne won the Big Air event at last year’s Stab High, netting himself a cool $20k for one sky-scraping straighty. He’s looking to bring increased altitude to the show in 2019, which is certainly possible, as Eithan’s recent acceptance of his Jewish heritage has added additional chutzpah to his approach. `,
  },
  {
    title: 'Eli Hanneman',
    meta: '16, Lahaina, Maui',
    other:
      'Stance: regular | Specialties: technique, flips, lightness of being.',
    content: `A lot of people thought Eli Hanneman should have won Stab High last year. Maui’s prodigal son had the frontside flip on lock, and his backside rotations grew bigger and cleaner as the day wore on. While the judges appreciated Eli’s consistency and style, it was the redundancy of maneuvers that held him back from victory. If Eli wants to win this year, he’ll have to bring some variety to the pool (his new hairdo is a good start).`,
  },
  {
    title: 'Matt Meola',
    meta: '30, Haiku, Maui',
    other:
      'Stance: goofy | Specialties: double spins, flips, country music covers',
    content: ` After narrowly missing last year’s top 6, the world’s spinningest surfer will be looking for redemption at Stab High 2.0. And if his Waco-inspired parody of “Old Town Road” is anything to go by, we’d be more likely to peer through the circular hole in the bathroom stall before betting against Matt Meola. Seriously, you need to check that thing out: https://bit.ly/2WRfV5g `,
  },
  {
    title: 'Nathan Florence',
    meta: '25, Sunset Beach, Oahu',
    other: 'Stance: regular',
    content: `Did somebody say Air Camp?! Despite only learning to punt in the past five months, Nate has already shown vast improvement in the air, having landed multiple backside full rotations in his eponymous vlog series. Will Nate win Stab High 2.0? Probably not, but we can guarantee he’ll have all the fun.`,
  },
  {
    title: 'Eric Geiselman',
    meta: '31, New Smyrna Beach, FL',
    other: 'Stance: regular | Specialties: creativity and style ',
    content: `Ever-difficult to coax from his Floridian honey-hole, EG made an exception when he received a Stab High invite, agreeing to meet us in Waco so long as he could go fishing in the nearby pond after the competition had concluded. We obliged, if only to see his massive front-shuv and corkscrew flip in action. `,
  },
  {
    title: 'Jett Schilling',
    meta: '16, San Clemente, California',
    other: 'Stance: goofy | Specialties: technique and style',
    content: `Despite valiant efforts both frontside and back, little Jett Schilling couldn’t bring down an air at last year’s Stab High. Talking to him after the event, it seems our 15-year-old competitor made the rookie mistake of forgetting to wax his nose, meaning that every time he did the front-foot shimmy on a punt, Jett would slip right off the tip. “I’m never making that mistake again,” he promised in a post-heat confessional. Let’s hope not. `,
  },
  {
    title: 'Tanner Gudauskas',
    meta: '30, San Clemente, CA',
    other: 'Stance: goofy | Specialties: judo kicks and a contagious smile',
    content: `As the third member of surfing’s G(regarious)-Unit, Tanner brings unbridled stoke to Stab High along with a mean backside judo. While not a cruel man, Tanner has no qualms about taking competitors’ scalps (see: Gabriel Medina, 2016), so watch your fucking head when it’s this guy’s turn to fly. `,
  },
  {
    title: 'Kael Walsh',
    meta: '19, Yallingup, West Aus',
    other: 'Stance: regular | Specialties: rotations, loft, absence of fear',
    content: `Last year at Stab High, Kael Walsh launched a gravity-averse alleyoop, landing cleanly in the soup for a high single score. Unfortunately for the West Aussie, his air-wind upbringing hadn’t prepared him for the sideshore left, which resulted in the distinct lack of a backup score and failure to make the final. Rumor has it Kael’s been practicing in down-wind conditions throughout the offseason, so we can expect two makes and a potential finals berth at Stab High 2.0. `,
  },
  {
    title: 'Kevin Schulz',
    meta: '23, San Clemente, CA',
    other: `Stance: goofy | Specialties: spin rate, wingspan and technique`,
    content: `Clean-cut and amicable as they come, Mr. Schulz has some of the quickest, most efficient spins in surfing. The only question is whether Kevin can bring enough variety to please our highly critical judges. That semi-secret flip in his arsenal might do the trick. `,
  },
  {
    title: 'Ian Crane',
    meta: '26, San Clemente, CA',
    other: `Stance: goofy | Specialties: variation and style`,
    content: `Crane-o has two tricks up his sleeve that nobody in the field can touch. The first is a tail-high, stalefish backside air reverse, and the other is a backside alleyoop with a frontside grab (but to be honest, we’re not entirely sure what to call it). Regardless, if Ian sticks either of these moves to their capacity, he’s looking at huge scores from the panel. And if he figures out how to land a damn frontside punt in the final, the kid could be a sneaky winner. `,
  },
  {
    title: 'Balaram Stack',
    meta: '27, New York, New York',
    other: `Stance: goofy | Specialties: surfing in a gold chain and diamond studs`,
    content: `When he’s not packing Pipe bombs, “Ball Sack” (as he was lovingly referred to in his youth) is jumping off ledges that would make a mother say, “Oh no, sweetie, I don’t think that’s a very good idea at all!” Our favorite thing about Bal is how deeply he’s embraced his New York residency, as the kid can often be found wearing a Yankees hat, gold chain, diamond earrings, and did we see a grill at some point?`,
  },
  {
    title: 'Parker Coffin',
    meta: '23, Santa Barbara, CA',
    other: `Stance: goofy | Specialties: height (off the lip, not in the doctor's office), style`,
    content: `Porker might be a founder of the Fat Boy Surf Camp, but that won’t stop him from trying to fly! Gravity might, though, so he should probably lay off the brisket until the post-event festivities.`,
  },
  {
    title: 'Noah Wegrich',
    meta: '25, Santa Cruz, CA',
    other:
      'Stance: goofy | Specialties: massive straighties, pulls all the ladies',
    content: `Waggy is Stab High’s quintessential Californian. He’s tall, skinny, blonde, goofy-footed, probably vegan and has a frontside hanger like nobody’s business. Our only concern is that Waggy will be molested by rowdy Baylor gals before he can surf his heat. With any luck they’ll wait for the afterparty.`,
  },
  {
    title: 'Leon Glatzer',
    meta: '22, Pavones, Costa Rica',
    other: 'Stance: goofy | Specialties: amplitude and rotations',
    content: `Who is Leon Glatzer? Nah, who are you? 
    Just kidding... we don’t expect you to know the Costa Rican’s name just yet, but we doubt you’ll forget Leon Glatzer by the time Stab High’s come and gone. For reference: he’s the tall, lanky son-of-a-bitch that stomps full rotors like a bushel of ripe cranberries. 
    `,
  },
  {
    title: 'Shane Borland',
    meta: '20, Malibu, CA',
    other: `Stance: regular | Specialties: skate-inspired punts`,
    content: ` Another skater in Stab High? Yeah, there’s something to that. The consistency of a skate ramp lends itself to a repetition of maneuvers and, as a result, rapid skill growth. Surfing lacked this unique benefit until places like Waco popped up, providing an on-demand, cookie-cutter air section. We’ll see if Shane’s skate background helps him in the pool. `,
  },
  {
    title: 'Curren Caples',
    meta: '23, Durban, Ventura, CA',
    other: 'Stance: regular | Specialties: low arms and tucked knees ',
    content: `Growing up a Ventura skate rat, all of Curren’s friends used to taunt him for choosing the beach over the bowl. “Why are you going surfing?” they would mock. “It’s so lame!” But Curren didn’t listen, and now, in the midst of a highly successful skate career, the 23-year-old is entering his first professional surfing event at Stab High. Don’t be surprised if he sinks a few aerial icons in the process`,
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
              <div>
                <b>{i.other}</b>
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
