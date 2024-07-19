import './Header.css'

export default function Header() 
{
     return ( <header className="header">
         <div className="logo">ShopEase</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
      </div>
         
     </header> );
      }