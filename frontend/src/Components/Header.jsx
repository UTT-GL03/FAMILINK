export default function Header() {
  
    return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-name">FAMILINK</h1>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <i className="fas fa-bell">Login</i>
        </button>
        <button className="icon-button">
          <i className="fas fa-user-circle">Sign in</i>
        </button>
      </div>
    </header>
  );
};
