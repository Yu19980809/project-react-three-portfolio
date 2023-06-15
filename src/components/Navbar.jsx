import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { codedreamer, menu, close } from '../assets'

const Navbar = () => {
  const [ active, setActive ] = useState('');
  const [ toggle, setToggle ] = useState(false);

  return (
    <nav
      className={ `${ styles.paddingX } fixed top-0 w-full flex items-center py-5 bg-primary z-20` }
    >
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={ () => {
            setActive( '' );
            window.scrollTo( 0, 0 );
          } }
        >
          <img src={ codedreamer } alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">CodeDreamer</p>
        </Link>

        {/* links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          { navLinks.map( link => (
            <li
              key={ link.id }
              className={ `${ active === link.title ? "text-white" : "text-secondary" } hover:text-white font-medium text-[18px] cursor-pointer` }
              onClick={ () => setActive( link.title ) }
            >
              <a href={ `#${ link.id }` }>{ link.title }</a>
            </li>
          ) ) }
        </ul>

        {/* menu on mobile screen */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={ toggle ? close : menu }
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={ () => setToggle( !toggle ) }
            />

            <div className={ `${ !toggle ? "hidden" : "flex" } absolute top-20 right-0 min-w-[140px] mx-4 my-2 p-6 rounded-xl black-gradient z-10` }>
              <ul className="list-none flex flex-col justify-end items-start gap-4">
                { navLinks.map( link => (
                  <li
                    key={ link.id }
                    className={ `${ active === link.title ? "text-white" : "text-secondary" } font-poppins font-medium text-[16px] cursor-pointer` }
                    onClick={ () => {
                      setToggle( !toggle );
                      setActive( link.title );
                    } }
                  >
                    <a href={ `#${ link.id }` }>{ link.title }</a>
                  </li>
                ) ) }
              </ul>
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar