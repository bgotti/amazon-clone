import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useTransition, animated } from 'react-spring';
import Burger from './Burger';
import './Hamburger.css';


function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })

  return (

    <nav className="navigation">


      <MenuIcon className="menu"
        onClick={() => setShowMenu(!showMenu)}
      />


      {
        maskTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="animation"
            onClick={() => setShowMenu(false)}
          >
          </animated.div>
        )
      }

      {
        menuTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="animation"
          >
            <Burger
              closeMenu={() => setShowMenu(false)}
            />
          </animated.div>
        )
      }
    </nav>
  )
}

export default Navigation;
