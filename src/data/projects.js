export const projects = [
    {
        id: 'college-info-agent',
        title: 'CollegeInfo-Agent: RAG Academic Assistant',
        techStack: ['FastAPI', 'ChromaDB', 'LangChain', 'OpenAI/Gemini', 'React'],
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
        techStack: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Hibernate', 'Spring Security'],
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
        techStack: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC'],
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
        techStack: ['FastAPI', 'React', 'Google Gemini', 'OCR (Tesseract)', 'Python'],
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
