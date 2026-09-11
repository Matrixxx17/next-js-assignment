import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            HDFC Life Advisor Portal
          </Link>

          <div>
            <Link href="/">Home</Link>
            <Link href="/policies">Policies</Link>
            <Link href="/claims">Claims</Link>
            <Link href="/claims/new">File Claim</Link>
            <Link href="/desk">Advisor Desk</Link>
          </div>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}