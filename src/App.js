import { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaBars,
} from "react-icons/fa6"

export default function App() {
  const [screen, setScreen] = useState(1);
  const [isHover, setIsHover] = useState(0);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="outer-container">
      <div className="noise"></div>
      <div className="inner-container">
        <div className="outer-wrapper">
          <div className="header-nav">
            <a href="https://www.linkedin.com/in/esther-lee-2393972b2/"><FaLinkedinIn className="nav-item"/></a>
            <a href="https://github.com/jeongral"><FaGithub className="nav-item"/></a>
          </div>
        {screen === 1 &&
        <div className="inner-wrapper">
            <div className="paragraph-group1">
              <div className="box"></div>
              <div className="description">
                <h2>Hello, I am</h2>
                <h1>Esther Jeongran Lee</h1>
                <h2>Web developer & QA engineer</h2>
              </div>
            </div>
        </div>
          
        }
        {screen === 2 &&
          <div className="inner-wrapper">
            <div className="paragraph-group1">
              <div className="box"></div>
              <div className="description">
                  <h3>About Me</h3>
                  <p>I'm Esther, a passionate web developer, based on CA, United States.</p>
                  <p>I mainly develop web application and my core skill is based on
                    Java, JavaScript, React, and MySQL.
                  </p>
                  <p>I have graduated with a bachlor's degree in Computer Science
                    from University of California, Irvine in 2020.
                  </p>
                  <p>Although I have been worked as a QA engineer since graduation,
                    I would love to work as a web developer!
                  </p>
              </div>
            </div>
            <div className="inner-wrapper" style={{flexDirection: "row"}}>
              <div className="paragraph-group2">
                <div className="box"></div>
                <div className="description">
                  <h3>Work Experience</h3>
                  <p>QA Engineer</p>
                  <p>@ Farmers Insurance via TCS</p>
                  <p>2021-2023</p>
                </div>
              </div>
              <div className="paragraph-group2">
                <div className="box"></div>
                <div className="description">
                  <h3>School</h3>
                  <p>Bachelor of Computer Science</p>
                  <p>@ University of California, Irvine</p>
                  <p>2020</p>
                </div>
              </div>
            </div>
            <div className="inner-wrapper" style={{flexDirection: "row"}}>
              <div className="paragraph-group2">
                <div className="box"></div>
                <div className="description">
                  <h3>Main Skills</h3>
                  <p>Java, Python, JavaScript, MySQL</p>
                  <p>HTML, CSS, React</p>
                  <p>English, Korean, Japanese</p>
                </div>
              </div>
              <div className="paragraph-group2">
                <div className="box"></div>
                <div className="description">
                  <h3>Busy with</h3>
                  <p>Playing games (mostly MMORPG & MOBA!)</p>
                  <p>Drawing cartoons</p>
                  <p>Watching anime</p>
                </div>
              </div>
            </div>
          </div>
        }
        {screen === 3 &&
          <div className="cuts">
            <div className="cut1" onMouseEnter={() => setIsHover(1)} onMouseLeave={() => setIsHover(0)}>
                {isHover !== 1 ? (
                  <div className="cut-title">
                    <h3>TwiNote</h3>
                  </div>
                ) : (
                  <div style={{color: "var(--white)"}}>
                    <p>A Twitter-like CRUD note app that allows users to play
                        the role of existing characters or original characters
                    </p>
                  </div>
                )}
            </div>
            <div className="cut2"></div>
            <div className="cut3" onMouseEnter={() => setIsHover(3)} onMouseLeave={() => setIsHover(0)}>
                {isHover !== 3 ? (
                  <h1 style={{fontSize: "44px"}}>Portfolio</h1>
                ) : (
                  <div>
                  </div>
                )}
            </div>
            <div className="cut4"><h1 style={{fontSize: "44px"}}>Foodie-Hoodie</h1></div>
            <div className="cut5"></div>
          </div>
        }
        {screen === 4 &&
          <h1>Under construction!</h1>
        }
        {window.innerWidth >= 1000 ? (
          <div className="footer-nav">
            <div className="nav-item" onClick={() => setScreen(1)}>Home</div>
            <div className="nav-item" onClick={() => setScreen(2)}>About Me</div>
            <div className="nav-item" onClick={() => setScreen(3)}>Projects</div>
            <div className="nav-item" onClick={() => setScreen(4)}>Arts</div>
            <div className="nav-item"><a href="mailto:leejesther96@gmail.com">Contact</a></div>
          </div>
        ) : (
          <div>
          {!showNav ? (
            <div className="footer-nav">
              <div className="nav-item" onClick={() => setShowNav(true)}><FaBars /></div>
            </div>
          ) : (
            <div className="footer-nav-screen">
              <div className="nav-item" onClick={() => setShowNav(false)}>X</div>
              <div className="nav-item" onClick={() => {setShowNav(false); setScreen(1)}}>Home</div>
              <div className="nav-item" onClick={() => {setShowNav(false); setScreen(2)}}>About Me</div>
              <div className="nav-item" onClick={() => {setShowNav(false); setScreen(3)}}>Projects</div>
              <div className="nav-item" onClick={() => {setShowNav(false); setScreen(4)}}>Arts</div>
              <div className="nav-item"><a href="mailto:leejesther96@gmail.com"
                                  style={{color: "var(--white)"}}>Contact</a></div>
            </div>
          )}
          </div>)
}
          <div className="page-number">{screen}</div>
        </div>
      </div>
    </div>
  );
}