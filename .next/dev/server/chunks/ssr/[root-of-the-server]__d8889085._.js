module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/design-notes/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignNotesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function DesignNotesPage() {
    const notes = [
        {
            id: 1,
            date: '2026-05-12',
            title: 'Designing RAG for Hundreds of Documents',
            summary: 'Strategies for efficient chunking and retrieval when dealing with diverse institutional data formats.',
            content: 'When building CollegeInfo-Agent, naïve chunking failed for tables. We moved to a semantic-aware splitter...'
        },
        {
            id: 2,
            date: '2026-04-03',
            title: 'JWT Authentication: Key Mistakes',
            summary: 'Why storing tokens in localStorage is dangerous and how httpOnly cookies solve XSS vulnerabilities.',
            content: 'In Skill-Swap, I initially stored JWTs in localStorage. After researching XSS vectors, I migrated to httpOnly cookies...'
        },
        {
            id: 3,
            date: '2026-02-15',
            title: 'SQL vs NoSQL: A Decision Framework',
            summary: 'Why I chose PostgreSQL for the Shop System but MongoDB for Skill-Swap.',
            content: 'The Shop System required strict ACID guarantees for inventory. Skill-Swap needed flexible schemas for user profiles...'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "[03] Design Notes"
            }, void 0, false, {
                fileName: "[project]/src/app/design-notes/page.js",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginBottom: '3rem'
                },
                children: "Engineering logs, decision records, and technical essays. No fluff."
            }, void 0, false, {
                fileName: "[project]/src/app/design-notes/page.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notes-list",
                children: notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '3rem',
                            borderLeft: '2px solid var(--border-color)',
                            paddingLeft: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.8rem',
                                    fontFamily: 'monospace'
                                },
                                children: note.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/design-notes/page.js",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginTop: '0.5rem',
                                    marginBottom: '0.5rem',
                                    border: 'none',
                                    fontSize: '1.3rem'
                                },
                                children: note.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/design-notes/page.js",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                },
                                children: note.summary
                            }, void 0, false, {
                                fileName: "[project]/src/app/design-notes/page.js",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.9rem'
                                },
                                children: [
                                    note.content,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            textDecoration: 'underline',
                                            cursor: 'pointer'
                                        },
                                        children: "[Read More...]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/design-notes/page.js",
                                        lineNumber: 39,
                                        columnNumber: 95
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/design-notes/page.js",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, note.id, true, {
                        fileName: "[project]/src/app/design-notes/page.js",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/design-notes/page.js",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/design-notes/page.js",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/design-notes/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/design-notes/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8889085._.js.map