import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useState } from "react"
import IMenuItem from "./IMenuItem"
import IMenuProps from "./IMenuProps"

export default function Menu(props: IMenuProps): JSX.Element {
  const { items } = props
  const [showMenu, setShowMenu] = useState(false)
  const menuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    setShowMenu(!showMenu)
  }
  return (
    <nav>
      <a
        className={showMenu ? "close-menu-button" : "burger-menu-button"}
        onClick={menuClick}
      >
        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
      </a>
      <ul className={showMenu ? "mobile-menu" : "menu"}>
        {items.map((menuItem: IMenuItem, index: number) => {
          const { dropdown, text, url } = menuItem
          return (
            <React.Fragment key={"menu" + index}>
              <li>
                <Link to={url}>{text}</Link>
              </li>
              {dropdown}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}
