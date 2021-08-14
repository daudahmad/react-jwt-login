export function Login() {
  return (
    <div className="container py-4 text-center form-signin bg-light border rounded-3">
      <form name="form">
        <h1 className="h3 mb-3 fw-normal">Please Log In</h1>
        <div className="form-floating">
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating">
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
