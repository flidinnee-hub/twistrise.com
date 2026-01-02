import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Process Optimization | TwistRise LLC',
    description: 'Detailed mapping of internal business processes to reduce redundancy.',
};

export default function ProcessOptimization() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Process Optimization</h1>
                        <p>Streamlining internal workflows for maximum efficiency.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', cursor: 'default' }}>
                        <img src="/images/service_optimization.png" alt="Process Optimization" className="card-img" style={{ maxHeight: '400px' }} />
                        <h2 style={{ marginBottom: '1.5rem', marginTop: '1.5rem', fontSize: '2rem' }}>Operational Efficiency & Workflow Mapping</h2>
                        <p>
                            Inefficiency is often invisible until it is measured. Our Process Optimization service involves a detailed mapping of your internal business processes. Our goal is to reduce redundancy, eliminate bottlenecks, and improve overall throughput without sacrificing quality.
                        </p>
                        <p>
                            Our methodology delivers:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Current State Analysis:</strong> Documenting "as-is" processes to identify pain points.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Bottleneck Identification:</strong> Pinpointing specific steps that slow down your entire operation.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>SOP Development:</strong> Creating clear, documented Standard Operating Procedures for consistency.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Resource Allocation:</strong> Recommending optimal staffing and tool usage for each process step.</li>
                        </ul>
                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/contact" className="cta-button">Optimize Your Workflow</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
