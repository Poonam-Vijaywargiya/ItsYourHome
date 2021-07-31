import '../App.css';
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="links">
          <a href="/home" className="links">Home</a>
          <a href="/chat" className="links">Chat</a>
          <a href="/documents" className="links">Documents</a>
          <a href="/support" className="links">Support</a>
          <a href="/virtualtour" className="links">Virtual visits</a>
          <a href="/login" className="links">Login/SignUp</a>
          <a href="/addons" className="links">AddOns</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;