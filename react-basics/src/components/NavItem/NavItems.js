import './NavItems.css'



const NavItems = (propos) => {
  return (
    <li className="nav-item">
        {propos.children}
    </li>
  )
}
const NavItemsDropDown = (propos) => {
  return (
    <li className="nav-item dropdown">
        {propos.children}
    </li>
  )
}

export default NavItems
export {NavItemsDropDown}
