import './Menu.css'

export default function Menu(){
    return(
<nav className="menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    )
}