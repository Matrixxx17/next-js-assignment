
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/desk");
  }

  return (
    <div className="signin-page">
      <section className="signin-intro">
        <span className="page-kicker">HDFC LIFE / ADVISOR ACCESS</span>

        <h1>
          Welcome
          <span>back.</span>
        </h1>

        <p>
          Sign in to access your advisor workspace,
          policy portfolio, and claims operations.
        </p>

        <div className="signin-note">
          <span>01</span>
          <div>
            <strong>PRIVATE WORKSPACE</strong>
            <p>
              Your advisor tools are available after
              authentication.
            </p>
          </div>
        </div>
      </section>

      <section className="signin-card">
        <div className="signin-card-top">
          <div>
            <span className="panel-label">ADVISOR PORTAL</span>
            <h2>Sign in</h2>
          </div>

          <span className="signin-number">/01</span>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <label>
            <span>Email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="advisor@hdfclife.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </label>

          {error && (
            <div className="signin-error">
              <span>!</span>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="signin-submit"
            disabled={loading}
          >
            <span>{loading ? "Signing in..." : "Sign in"}</span>
            <span>↗</span>
          </button>
        </form>

        <div className="signin-divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="google-button"
          onClick={() => signIn("google")}
        >
          <span className="google-mark">G</span>
          <span>Sign in with Google</span>
          <span>↗</span>
        </button>

        <div className="signin-footer">
          <span>SECURE ADVISOR ACCESS</span>
          <span>HDFC LIFE</span>
        </div>
      </section>
    </div>
  );
}
