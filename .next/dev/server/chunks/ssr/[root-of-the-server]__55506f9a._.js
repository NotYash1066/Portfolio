module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/data/projects.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 'college-info-agent',
        title: 'CollegeInfo-Agent: RAG Academic Assistant',
        techStack: [
            'FastAPI',
            'ChromaDB',
            'LangChain',
            'OpenAI/Gemini',
            'React'
        ],
        shortDescription: 'Multi-tenant RAG system for answering student queries from 500+ institutional documents.',
        problemStatement: 'Students and faculty struggle to find specific information buried in hundreds of unstructured PDF documents (syllabus, notices, calendars), leading to administrative bottlenecks.',
        solution: 'Built a Retrieval-Augmented Generation (RAG) pipeline that ingests PDFs, chunks and embeds them into a local vector store (ChromaDB), and retrieves relevant context for an LLM to answer queries accurately with citations.',
        architecture: [
            'Ingestion Service: PDF text extraction -> Chunking -> Embedding',
            'Vector Store: ChromaDB (Local persistence)',
            'Retrieval: Semantic search with metadata filtering (College ID)',
            'Generation: LLM (Gemini/OpenAI) grounded in retrieved context',
            'Frontend: React Admin Dashboard for document management'
        ],
        mermaid: `
      graph TD
        A[Student] -->|Query| B(Frontend/React)
        B -->|API Request| C[FastAPI Gateway]
        C -->|1. Find Documents| D[(ChromaDB)]
        D -->|2. Return Top-K Chunks| C
        C -->|3. Prompt + Context| E[LLM Agent]
        E -->|4. Answer with Citations| C
        C -->|Response| B
        subgraph Ingestion Pipeline
          F[PDFs] -->|Extract Text| G[Chunker]
          G -->|Embedding Model| D
        end
    `,
        technicalDecisions: [
            'Chosen ChromaDB for local, lightweight vector storage without cloud overhead.',
            'Implemented Multi-tenancy via College ID metadata tagging to isolate knowledge bases.',
            'Used Hybrid Search (Keyword + Semantic) to improve retrieval accuracy for specific terms (e.g., course codes).'
        ],
        challenges: [
            'Hallucinations: Solved by strictly enforcing "Answer only from context" prompt rules.',
            'Latency: Optimized embedding generation by using smaller, faster models for initial retrieval.',
            'PDF Parsing: Handled complex table structures in syllabi using specialized extraction logic.'
        ],
        repoLink: 'https://github.com/NotYash1066/College-Info-Assistant'
    },
    {
        id: 'shop-management-system',
        title: 'Shop Management System (REST API)',
        techStack: [
            'Spring Boot',
            'Java 17',
            'PostgreSQL',
            'Hibernate',
            'Spring Security'
        ],
        shortDescription: 'Robust inventory management API handling products, suppliers, and stock levels for 500+ SKUs.',
        problemStatement: 'Retail shops often rely on manual tracking or disconnected spreadsheets, leading to stock discrepancies and employee theft.',
        solution: 'Designed a centralized RESTful API to manage inventory state, track employee actions, and automate stock alerts. Enforces data integrity through a relational schema.',
        architecture: [
            'Controller Layer: REST Endpoints (Products, Suppliers, Employees)',
            'Service Layer: Business Logic & Transaction Management',
            'Data Layer: Spring Data JPA + Hibernate -> PostgreSQL',
            'Security: Role-Based Access Control (RBAC) with Spring Security'
        ],
        mermaid: `
      sequenceDiagram
          participant Client
          participant Controller
          participant Service
          participant DB as PostgreSQL
          
          Client->>Controller: POST /api/inventory/order
          Controller->>Service: processOrder(items)
          Service->>DB: Check Stock Level (Lock Row)
          DB-->>Service: Stock Available
          Service->>DB: Deduct Stock & Create Transaction Log
          DB-->>Service: Commit Success
          Service-->>Controller: Order Confirmed
          Controller-->>Client: 200 OK
    `,
        technicalDecisions: [
            'Used Relational Database (PostgreSQL) strictly for ACID compliance on inventory transactions.',
            'Spring Security implementation for granular role management (Admin vs Employee).',
            'DTO Pattern used to decouple internal entities from API contracts.'
        ],
        challenges: [
            'N+1 Query Problem: Solved using Fetch Joins in JPA repositories.',
            'Concurrency: Implemented optimistic locking to prevent stock count race conditions.',
            'Scalability: Designed schema to support future multi-branch expansion.'
        ],
        repoLink: 'https://github.com/NotYash1066/shop-management-system'
    },
    {
        id: 'skill-swap',
        title: 'Skill-Swap: Real-time P2P Platform',
        techStack: [
            'Node.js',
            'Express',
            'MongoDB',
            'Socket.io',
            'WebRTC'
        ],
        shortDescription: 'Peer-to-peer skill exchange platform with real-time video/chat and collaborative whiteboard.',
        problemStatement: 'Learners lack affordable, real-time interactive platforms to exchange skills directly with peers without intermediaries.',
        solution: 'Created a real-time platform facilitating direct P2P connections via WebRTC video calls and low-latency Socket.io messaging.',
        architecture: [
            'Signaling Server: Socket.io for WebRTC handshake',
            'Media Transport: WebRTC Peer-to-Peer data/media channels',
            'Persistence: MongoDB for user profiles and skill matching',
            'Auth: JWT-based stateless authentication'
        ],
        mermaid: `
      graph LR
        UserA[User A] -- Signaling --> Server[Socket.io Server]
        UserB[User B] -- Signaling --> Server
        UserA <== P2P Media Stream ==> UserB
        UserA <== Data Channel (Whiteboard) ==> UserB
        Server -.-> DB[(MongoDB)]
    `,
        technicalDecisions: [
            'WebRTC chosen for near-zero latency video calls avoiding expensive media server costs.',
            'MongoDB (NoSQL) for flexible user profile schemas and skill tags.',
            'Socket.io rooms used for isolating chat sessions and whiteboard events.'
        ],
        challenges: [
            'NAT Traversal: Configured STUN/TURN servers to allow connections across different networks.',
            'State Synchronization: Managed collaborative whiteboard state using event broadcasting to ensure all peers see the same drawing.'
        ],
        repoLink: 'https://github.com/NotYash1066/Skill-Swap'
    },
    {
        id: 'safe-plate',
        title: 'Safe-Plate: AI Food Ingredient Scanner',
        techStack: [
            'FastAPI',
            'React',
            'Google Gemini',
            'OCR (Tesseract)',
            'Python'
        ],
        shortDescription: 'Analysis pipeline that scans food labels to detect allergens, hidden sugars, and additives.',
        problemStatement: 'Consumers struggle to understand complex chemical names in ingredient lists and identify hidden health risks like sugar aliases.',
        solution: 'A pipeline that OCRs ingredient text from images, classifies additives using a hybrid approach (Static DB + LLM fallback), and generates plain-English health scores.',
        architecture: [
            'OCR Service: Tesseract/OpenCV for text extraction from images',
            'Classification Engine: Local Dictionary Lookup -> Fallback to Gemini Flash',
            'Logic Layer: Sugar Alias Detection & Allergen Filtering',
            'Frontend: React client for image capture and result visualization'
        ],
        mermaid: `
      flowchart TD
        Image[Image Upload] --> OCR[OCR Service / Tesseract]
        OCR --> Text[Extracted Ingredients]
        Text --> Split[Split List]
        Split --> Check{In Local DB?}
        Check -- Yes --> Result[Return Classification]
        Check -- No --> AI[Call Gemini Flash API]
        AI --> Result
        Result --> Score[Calculate Health Score]
        Score --> Frontend
    `,
        technicalDecisions: [
            'Hybrid Classification: Prioritized local DB for speed/cost, used LLM only for unknown ingredients.',
            'FastAPI: Chosen for high-performance async handling of OCR tasks.',
            'Gemini Flash: Selected for low latency structured data extraction.'
        ],
        challenges: [
            'OCR Accuracy: Improved text extraction from curved packaging surfaces using OpenCV preprocessing.',
            'Latency: Parallelized database lookups to return "Safe" ingredients immediately while processing "Unknowns" in background.'
        ],
        repoLink: 'https://github.com/NotYash1066/Portfolio'
    }
];
}),
"[project]/src/components/Mermaid.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Mermaid.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Mermaid.js <module evaluation>", "default");
}),
"[project]/src/components/Mermaid.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Mermaid.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Mermaid.js", "default");
}),
"[project]/src/components/Mermaid.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mermaid$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Mermaid.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mermaid$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Mermaid.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mermaid$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Breadcrumbs.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
;
;
;
function Breadcrumbs({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row",
        style: {
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            alignItems: 'center',
            gap: '0.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: "~"
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumbs.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-row",
                    style: {
                        alignItems: 'center',
                        gap: '0.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumbs.js",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this),
                        item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            style: {
                                color: 'inherit'
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumbs.js",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumbs.js",
                            lineNumber: 14,
                            columnNumber: 25
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/Breadcrumbs.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Breadcrumbs.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/systems/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mermaid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Mermaid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            id: project.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === id);
    if (!project) {
        return {
            title: 'System Not Found',
            description: 'The requested system architecture document could not be found.'
        };
    }
    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            title: `${project.title} | System Architecture`,
            description: project.shortDescription
        }
    };
}
async function ProjectPage({ params }) {
    // In Next.js 15+, params is a Promise, but for 13/14 it's an object. 
    // To be safe in newer versions, we await it if it's a promise, or just use it.
    // Actually, let's just find the project directly.
    // Note: Standard way for generateStaticParams + component.
    const { id } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === id);
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "System not found."
        }, void 0, false, {
            fileName: "[project]/src/app/systems/[id]/page.js",
            lineNumber: 45,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/systems",
                className: "text-sec",
                style: {
                    fontSize: '0.9rem',
                    marginBottom: '2rem',
                    display: 'block'
                },
                children: "< Back to Index"
            }, void 0, false, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    border: 'none',
                    marginBottom: '0.5rem'
                },
                children: project.title
            }, void 0, false, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-row",
                style: {
                    marginBottom: '2rem'
                },
                children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.8rem',
                            color: 'var(--accent-color)'
                        },
                        children: [
                            "[",
                            tech,
                            "]"
                        ]
                    }, tech, true, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-section mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "01_Context & Problem"
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sec",
                        style: {
                            maxWidth: '700px'
                        },
                        children: project.problemStatement
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-section mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "02_Architecture & Design"
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    project.mermaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mermaid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        chart: project.mermaid,
                        id: project.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px dashed var(--border-color)',
                            padding: '1.5rem',
                            margin: '1rem 0',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            whiteSpace: 'pre-wrap',
                            display: 'none' // Hidden in favor of diagram, but kept in code just in case
                        },
                        children: project.architecture.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: `> ${line}`
                            }, i, false, {
                                fileName: "[project]/src/app/systems/[id]/page.js",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sec",
                        children: project.solution
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-section mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "03_Key Technical Decisions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: 'none',
                            padding: 0
                        },
                        children: project.technicalDecisions.map((decision, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    marginBottom: '1rem',
                                    paddingLeft: '1rem',
                                    borderLeft: '2px solid var(--border-color)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: 'var(--text-primary)'
                                        },
                                        children: "Decision:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/systems/[id]/page.js",
                                        lineNumber: 92,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sec",
                                        children: decision
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/systems/[id]/page.js",
                                        lineNumber: 92,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/systems/[id]/page.js",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-section mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "04_Challenges & Resolutions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-box",
                        children: project.challenges.map((challenge, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--warning)'
                                        },
                                        children: "! WARNING:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/systems/[id]/page.js",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sec",
                                        children: challenge
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/systems/[id]/page.js",
                                        lineNumber: 103,
                                        columnNumber: 89
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/systems/[id]/page.js",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/systems/[id]/page.js",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '3rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: project.repoLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                        textDecoration: 'underline'
                    },
                    children: "[View Source Code on GitHub]"
                }, void 0, false, {
                    fileName: "[project]/src/app/systems/[id]/page.js",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/systems/[id]/page.js",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/systems/[id]/page.js",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/systems/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/systems/[id]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__55506f9a._.js.map