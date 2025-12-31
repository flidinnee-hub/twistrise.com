import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            TwistRise LLC
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact" className="cta-button">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
