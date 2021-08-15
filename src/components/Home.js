export default function Home({ accessToken }) {
  return (
    <div className="text-center">
      <h1 className="h3">You have successfully logged in!</h1>
      <div>Your JWT access token is</div>
      <div>{accessToken}</div>
    </div>
  );
}
