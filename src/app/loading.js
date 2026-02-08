export default function Loading() {
    return (
        <div className="route-skeleton" aria-live="polite" aria-busy="true">
            <section className="skeleton-block skeleton-hero">
                <div className="skeleton-number">01</div>
                <div className="skeleton-stack">
                    <span className="skeleton-line w-28" />
                    <span className="skeleton-line w-90" />
                    <span className="skeleton-line w-84" />
                    <span className="skeleton-line w-70" />
                    <div className="skeleton-actions">
                        <span className="skeleton-chip w-24" />
                        <span className="skeleton-chip w-20" />
                        <span className="skeleton-chip w-18" />
                    </div>
                </div>
            </section>

            <section className="skeleton-block skeleton-grid">
                <div className="skeleton-number">02</div>
                <div className="skeleton-stack">
                    <span className="skeleton-line w-72" />
                    <span className="skeleton-line w-95" />
                    <span className="skeleton-line w-88" />
                </div>
                <div className="skeleton-card">
                    <span className="skeleton-line w-48" />
                    <span className="skeleton-line w-92" />
                    <span className="skeleton-line w-85" />
                    <span className="skeleton-line w-78" />
                </div>
            </section>

            <section className="skeleton-block skeleton-grid">
                <div className="skeleton-number">03</div>
                <div className="skeleton-card">
                    <span className="skeleton-line w-46" />
                    <span className="skeleton-line w-88" />
                    <span className="skeleton-line w-80" />
                    <span className="skeleton-line w-68" />
                </div>
                <div className="skeleton-stack">
                    <span className="skeleton-line w-66" />
                    <span className="skeleton-line w-90" />
                    <span className="skeleton-line w-78" />
                </div>
            </section>
        </div>
    );
}
