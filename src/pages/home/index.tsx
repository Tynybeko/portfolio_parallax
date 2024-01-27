import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import MainTitle from '../../components/main-title'
import MainContent from '../../components/main-content'

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function index() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: `transparent` }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'transparent' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'transparent' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.1} speed={-0} style={{ pointerEvents: 'none', opacity: 0.6 }}>
          <img style={{ width: '9%', marginLeft: '80%' }} src={'/logos/react-2.svg'} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={.4} style={{ pointerEvents: 'none', opacity: 0.3 }}>
          <img style={{ width: '7%', marginLeft: '10%' }} src={'/logos/js.svg'} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={.3} style={{ pointerEvents: 'none', opacity: 0.3 }}>
          <img style={{ width: '9%', marginLeft: '50%' }} src={'/logos/expo.svg'} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={-0} style={{ pointerEvents: 'none', opacity: 0.2 }}>
          <img style={{ width: '9%', marginLeft: '90%' }} src={'/logos/nginx.svg'} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.3 }}>
          <img src={'/logos/css.svg'} style={{ display: 'block', width: '7%', marginLeft: '65%', marginTop: '10%' }} />
          <img src={'/logos/git.svg'} style={{ display: 'block', width: '10%', marginLeft: '15%', marginTop: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.4 }}>
          <img src={'/logos/next.svg'} style={{ display: 'block', width: '14%', marginLeft: '30%' }} />
          <img src={'/logos/sassv2.svg'} style={{ display: 'block', width: '20%', marginLeft: '50%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={'/logos/redux.svg'} style={{ display: 'block', width: '17%', marginLeft: '10%', marginTop: '0%' }} />
          <img src={'/logos/nodejs.svg'} style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={'/logos/netlify.svg'} style={{ display: 'block', width: '10%', marginLeft: '80%', marginTop: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.95} speed={0.4} style={{ opacity: 0.4 }}>
          <img src={'/logos/tailwind.svg'} style={{ display: 'block', width: '13%', marginLeft: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.1} style={{ opacity: 0.3 }}>
          <img src={'/logos/mongodb.svg'} style={{ display: 'block', width: '20%', marginLeft: '25%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.1} style={{ opacity: 0.3 }}>
          <img src={'/logos/ts.svg'} style={{ display: 'block', width: '7%', marginLeft: '55%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.07}
          style={{
            opacity: .6
          }}>
          <img className='neon-box' src={'/sites/screenCrypto.png'} style={{ display: 'block', width: '27%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={0.15} style={{ opacity: 0.5 }}>
          <img src={'/sites/screen23.webp'} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={0.1} style={{ opacity: 0.8 }}>
          <img src={'/sites/transit1.webp'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.2} style={{ opacity: 0.6 }}>
          <img src={'/sites/Coca.png'} style={{ display: 'block', width: '22%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.3} style={{ opacity: 0.8 }}>
          <img src={'/sites/airdrop.png'} style={{ display: 'block', width: '18%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={0.3} style={{ opacity: 0.6 }}>
          <img src={'/sites/sierra.png'} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MainTitle />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='sel-no'>
            <h1 className='neon-text'>my stacks</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}

          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          <MainContent />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            opacity: 0.8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <h1 className='neon-text'>Contacts</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3.7} speed={0.7} style={{ opacity: 0.9, zIndex: 15, }}>
          <a href="https://github.com/Tynybeko">
            <img className='pointer' src={'/contacts/github.svg'} style={{ position: 'relative', width: '10%', marginLeft: '40%', zIndex: 100 }} />
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={1.5} style={{ opacity: 0.6, zIndex: 10 }}>
          <a href="https://www.instagram.com/zhanybekov.2/">
            <img className='pointer' src={'/contacts/instagram.svg'} style={{ width: '9%', marginLeft: '30%', zIndex: 100 }} />
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={1} style={{ opacity: 0.9, zIndex: 12 }}>
          <a href="https://twitter.com/TZhanybekov219">
            <img className='pointer' src={'/contacts/twitter.svg'} style={{ width: '9%', marginLeft: '80%', zIndex: 100 }} />
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1} style={{ opacity: 0.5, zIndex: 10 }}>
          <a href="tel:+996559020199">
            <img className='pointer' src={'/contacts/phone.svg'} style={{ width: '9%', marginLeft: '10%', zIndex: 100 }} />
          </a>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}
