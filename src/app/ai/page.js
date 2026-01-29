export default function AIPage() {
    return (
        <div className="section-container">
            <h1>[04] AI, Used Practically</h1>

            <p style={{ marginBottom: '3rem' }}>
                AI is a tool, not a magic wand. My approach emphasizes restraint,
                using deterministic code where possible and LLMs only where necessary.
            </p>

            <div className="ai-principles mb-2">
                <h3>Principles</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>01. Determinstic First:</strong> Check rules before calling an LLM.
                        If a regex works, use it.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>02. Grounded Generation:</strong> Never let an LLM hallucinate.
                        Always supply retrieval context (RAG).
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>03. Cost Awareness:</strong> Use smaller models (Flash/3.5-Turbo) for
                        structured tasks; save GPT-4 for reasoning.
                    </li>
                </ul>
            </div>

            <h2>Implementation Examples</h2>

            <div className="border-box">
                <h3>Safe-Plate: Hybrid Classification</h3>
                <p className="text-sec">
                    <strong>Why AI?</strong> Identifying obscure chemical additives that don't match exact strings in a DB.
                </p>
                <p className="text-sec">
                    <strong>Constraint:</strong> Cost & Latency.
                </p>
                <p className="text-sec">
                    <strong>Solution:</strong> We check a local JSON dictionary first (0ms).
                    Only if the ingredient is unknown do we call Gemini Flash API (~400ms).
                </p>
            </div>

            <div className="border-box">
                <h3>CollegeInfo: PDF Extraction</h3>
                <p className="text-sec">
                    <strong>Why AI?</strong> Unstructured tables in syllabus PDFs.
                </p>
                <p className="text-sec">
                    <strong>Restraint:</strong> We don't summarize the <i>whole</i> PDF. We chunk it and retrieve
                    only the relevant section to answer the student's question, reducing token usage by 90%.
                </p>
            </div>
        </div>
    );
}
