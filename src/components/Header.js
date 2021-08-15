export default function Header({ isAuthenticated, handleLogout }) {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">React with JWT</span>
        </a>
        {isAuthenticated && (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button className="btn btn-sm btn-primary" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}
