(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/demo/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function DemoPage() {
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'ONLINE',
        uptime: '99.98%',
        latency: '45ms',
        requests: 1240
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoPage.useEffect": ()=>{
            // Simulate log generation
            const interval = setInterval({
                "DemoPage.useEffect.interval": ()=>{
                    const timestamp = new Date().toISOString();
                    const endpoints = [
                        '/api/v1/auth',
                        '/api/v1/users',
                        '/api/v1/inventory',
                        '/api/v1/search'
                    ];
                    const methods = [
                        'GET',
                        'POST',
                        'PUT'
                    ];
                    const statusCodes = [
                        200,
                        200,
                        200,
                        201,
                        401,
                        500
                    ];
                    const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
                    const method = methods[Math.floor(Math.random() * methods.length)];
                    const status = statusCodes[Math.floor(Math.random() * statusCodes.length)];
                    const newLine = `[${timestamp}] ${method} ${endpoint} - ${status}`;
                    setLogs({
                        "DemoPage.useEffect.interval": (prev)=>[
                                newLine,
                                ...prev
                            ].slice(0, 10)
                    }["DemoPage.useEffect.interval"]);
                    setMetrics({
                        "DemoPage.useEffect.interval": (prev)=>({
                                ...prev,
                                requests: prev.requests + 1,
                                latency: Math.floor(Math.random() * 50 + 20) + 'ms'
                            })
                    }["DemoPage.useEffect.interval"]);
                }
            }["DemoPage.useEffect.interval"], 2000);
            return ({
                "DemoPage.useEffect": ()=>clearInterval(interval)
            })["DemoPage.useEffect"];
        }
    }["DemoPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "[05] Live System Status"
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginBottom: '2rem'
                },
                children: "Real-time monitoring dashboard for backend services. (Simulated for demonstration purposes)."
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.js",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "status-grid",
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-box",
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.8rem'
                                },
                                children: "SYSTEM STATUS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: 'var(--success)',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                },
                                children: metrics.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/demo/page.js",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-box",
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.8rem'
                                },
                                children: "UPTIME"
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                },
                                children: metrics.uptime
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/demo/page.js",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-box",
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.8rem'
                                },
                                children: "AVG LATENCY"
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                },
                                children: metrics.latency
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/demo/page.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-box",
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sec",
                                style: {
                                    fontSize: '0.8rem'
                                },
                                children: "TOTAL REQ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                },
                                children: metrics.requests
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.js",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/demo/page.js",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/demo/page.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Live Request Logs"
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.js",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#111',
                    border: '1px solid var(--border-color)',
                    padding: '1rem',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    height: '200px',
                    overflowY: 'hidden',
                    color: '#ccc'
                },
                children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '0.2rem',
                            color: log.includes('500') ? 'var(--error)' : log.includes('401') ? 'var(--warning)' : 'inherit'
                        },
                        children: log
                    }, i, false, {
                        fileName: "[project]/src/app/demo/page.js",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.js",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/demo/page.js",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(DemoPage, "jJEyD/HsqkHJjjZmsqsPxEQCOKw=");
_c = DemoPage;
var _c;
__turbopack_context__.k.register(_c, "DemoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_demo_page_29ff3b4f.js.map