import './Footer.css'

export default function Footer() 
{ 
    return ( <footer className="footer">
        <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>

      <div className="copyright">
        &copy; 2024 ShopEase. All rights reserved.
      </div> 
    </footer> ); }