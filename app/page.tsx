import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        {/* Note: In Next.js we use the div bg method from CSS for the parallax effect, or we could use Next/Image fill */}
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_background.png')" }}></div>
        <div className="container">
          <div className="hero-content">
            <h1>Strategic Advisory for Modern Businesses</h1>
            <p className="text-white">
              We provide objective analysis, structured operational frameworks, and strategic guidance to help
              small and medium-sized enterprises make informed decisions.
            </p>
            <Link href="/contact" className="cta-button">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title text-white" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'white' }}>Our Core Competencies</h2>
            <p style={{ color: '#CBD5E1' }}>Professional services designed to support business stability and operational efficiency.</p>
          </div>
          <div className="grid">
            <div className="card">
              <img src="/images/service_strategy.png" alt="Business Strategy" className="card-img" />
              <div>
                <h3>Business Strategy</h3>
                <p>Comprehensive evaluation of business models and long-term planning to align operational capabilities with market opportunities.</p>
              </div>
              <span className="card-action">Learn More &rarr;</span>
            </div>
            <div className="card">
              <img src="/images/service_process.png" alt="Process Optimization" className="card-img" />
              <div>
                <h3>Process Optimization</h3>
                <p>Analysis of internal workflows to identify bottlenecks and implement standardized procedures for improved resource allocation.</p>
              </div>
              <span className="card-action">Learn More &rarr;</span>
            </div>
            <div className="card">
              <img src="/images/service_research.png" alt="Market Research" className="card-img" />
              <div>
                <h3>Market Research</h3>
                <p>Data-driven assessments of industry trends and competitive landscapes to support evidence-based strategic planning.</p>
              </div>
              <span className="card-action">Learn More &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="container">
          <div className="hero-content" style={{ textAlign: 'center', maxWidth: '1000px' }}>
            <h2 style={{ color: 'white' }}>Why TwistRise LLC?</h2>
            <p style={{ marginBottom: '2rem', color: '#E2E8F0' }}>
              We adhere to strict professional standards, prioritizing clarity, integrity, and measurable structural improvements over short-term trends.
            </p>
            <Link href="/about" style={{ color: 'var(--accent)', fontWeight: 700, background: 'white', padding: '0.5rem 1rem', borderRadius: '99px' }}>
              Learn more about our approach &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
