import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import MainTitle from '../../components/main-title'
import MainContent from '../../components/main-content'

export default function index() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax horizontal={true} ref={parallax} pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.5 }}>
          <div style={{ width: '100%', height: '100%' }} className='absolute'>
            <img src={'/logos/redux.webp'} style={{ position: 'absolute', width: '17%', bottom: '10px', left: '10px' }} />
            <img src={'/logos/nodejs.webp'} style={{ position: 'absolute', width: '20%', bottom: '20px', right: '20px' }} />
            <img src={'/logos/css.webp'} style={{ position: 'absolute', width: '7%', top: '10px', left: '30px' }} />
            <img src={'/logos/git.webp'} style={{ position: 'absolute', width: '10%', top: '20px', right: '45px' }} />
            <img style={{ position: 'absolute', width: '7%', top: '40%', left: '10%' }} src={'/logos/js.webp'} />

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.4} style={{ opacity: 0.4 }}>
          <div style={{ width: '100%', height: '100%' }} className='absolute'>
            <img src={'/logos/tailwind.webp'} style={{ position: 'absolute', width: '13%', bottom: '10%', left: '46%' }} />
            <img src={'/logos/sassv2.webp'} style={{ position: 'absolute', width: '20%', top: '3%', left: '37%' }} />
            <img src={'/logos/netlify.webp'} style={{ position: 'absolute', width: '7%', bottom: '30%', left: '15%' }} />
            <img src={'/logos/expo.webp'} style={{ position: 'absolute', width: '9%', bottom: '5%', left: '20%' }} />
            <img style={{ position: 'absolute', width: '9%', top: '30%', right: '15%' }} src={'/logos/nginx.webp'} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.8} style={{ opacity: .7 }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }} className='absolute'>
            <img src={'/logos/ts.webp'} style={{ position: 'absolute', width: '13%', top: '10%', left: '12%' }} />
            <img src={'/logos/mongodb.webp'} style={{ position: 'absolute', width: '15%', bottom: '30%', right: '30%' }} />
            <img src={'/logos/next.webp'} style={{ position: 'absolute', width: '10%', bottom: '20%', left: '35%' }} />
            <img src={'/logos/react-2.webp'} style={{ position: 'absolute', width: '9%', top: '20px', right: '30%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.07}
          style={{
            opacity: .6
          }}>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.6} style={{ opacity: .7 }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }} className='absolute'>
            <img className='neon-box' src={'/sites/screenCrypto.png'} style={{ position: 'absolute', display: 'block', width: '27%', top: '10%', right: '5%' }} />
            <img src={'/sites/screen23.webp'} style={{ position: 'absolute', display: 'block', width: '10%', bottom: '10%', left: '5%' }} />
            <img src={'/sites/transit1.webp'} style={{ position: 'absolute', display: 'block', width: '20%', left: '30%', bottom: '10%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} style={{ opacity: .7 }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }} className='absolute'>
            <img src={'/sites/Coca.png'} style={{ position: 'absolute', display: 'block', width: '22%', top: '10%', left: '5%' }} />
            <img src={'/sites/airdrop.png'} style={{ position: 'absolute', display: 'block', width: '18%', bottom: '20%', right: '10%' }} />
            <img src={'/sites/sierra.png'} style={{ position: 'absolute', display: 'block', width: '10%', top: '10%', left: '40%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('/stars.webp')`,
            backgroundSize: 'cover',
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
            backgroundImage: `url('/stars.webp')`,
            backgroundSize: 'cover',
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
            opacity: 0.8,
            backgroundImage: `url('/stars.webp')`,
            backgroundSize: 'cover',
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
            alignItems: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <h1 className='neon-text'>Contacts</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} style={{ opacity: .7, zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', }} className='absolute'>
            <a style={{ position: 'absolute', zIndex: 100, bottom: '10%', left: '20%', width: '12%' }} href="https://www.instagram.com/zhanybekov.2/">
              <img src={'/contacts/instagram.svg'} style={{ cursor: 'pointer', width: '100%', }} />
            </a>
            <a style={{ position: 'absolute', zIndex: 100, top: '20%', left: '30%', width: '10%' }} href="tel:+996559020199">
              <img src={'/contacts/phone.svg'} style={{ cursor: 'pointer', width: '100%', }} />
            </a>
            <a style={{ position: 'absolute', zIndex: 100, width: '12%', top: '10%', right: '10%' }} href="https://github.com/Tynybeko">
              <img src={'/contacts/github.svg'} style={{ cursor: 'pointer', position: 'relative', width: '100%', }} />
            </a>
            <a style={{ position: 'absolute', zIndex: 100, width: '9%', bottom: '30%', right: '20%' }} href="https://twitter.com/TZhanybekov219">
              <img src={'/contacts/twitter.svg'} style={{ cursor: 'pointer', width: '100%', }} />
            </a>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}
