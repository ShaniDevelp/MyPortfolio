import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/WhatsApp Image 2024-09-18 at 10.23.16 PM.jpeg'

import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['Z','e', 'e', 's', 'h', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]


  const coder = {
    name: 'Muhammad Zeeshan',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Full stack development', 'ReactJs', 'NextJs', 'NodeJs', 'ExpressJs', 'Postgress', 'MongoDB'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
  };

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span
              className='name'
            />
            {/* <div className='name'> </div> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <div className="hero-section-code">
          <div className="code-header">
            <div className="code-dot yellow"></div>
            <div className="code-dot green"></div>
            <div className="code-dot pink"></div>
          </div>
          <div className="code-content">
            <p className="code-line"><span className="code-keyword">const</span> <span className="code-variable">coder</span> = &#123;</p>
            <div className="code-block">
              <p>
                <span className="code-property">name:</span> <span className="code-string">'{coder.name}'</span>,
              </p>
              <p>
                <span className="code-property">skills:</span> [
              </p>
              <span className="code-skills">
                {coder.skills.map((skill, index) => (
                  <span key={index} className="code-skill">
                    {skill}  {index < coder.skills.length - 1 && ', '}
                  </span>
                ))}
              </span>
              <p>],</p>
              <p>
                <span className="code-property">hardWorker:</span> <span className="code-boolean">{coder.hardWorker.toString()}</span>,
              </p>
              <p>
                <span className="code-property">quickLearner:</span> <span className="code-boolean">{coder.quickLearner.toString()}</span>,
              </p>
              <p>
                <span className="code-property">problemSolver:</span> <span className="code-boolean">{coder.problemSolver.toString()}</span>,
              </p>
              <p>
                <span className="code-property">hireable:</span> <span className="code-function">function</span>() &#123;
              </p>
              <div className="code-block">
                <p>return (</p>
                <div className="code-block">
                  <p className="code-return">this.<span>hardWorker</span> &&</p>
                  <p className="code-return">this.<span>problemSolver</span> &&</p>
                  <p className="code-return">this.<span>skills.length</span> &gt;= 5</p>
                </div>
                <p>);</p>
              </div>
              <p>&#125;,</p>
            </div>
            <p>&#125;;</p>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
