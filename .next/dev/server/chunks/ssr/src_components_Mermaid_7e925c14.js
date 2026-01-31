module.exports = [
"[project]/src/components/Mermaid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mermaid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Mermaid({ chart, id }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isCancelled = false;
        setLoading(true);
        const renderChart = async ()=>{
            if (ref.current) {
                try {
                    const mermaid = (await __turbopack_context__.A("[project]/node_modules/mermaid/dist/mermaid.core.mjs [app-ssr] (ecmascript, async loader)")).default;
                    if (isCancelled) return;
                    mermaid.initialize({
                        startOnLoad: true,
                        theme: 'base',
                        themeVariables: {
                            darkMode: true,
                            background: '#111',
                            primaryColor: '#222',
                            primaryTextColor: '#fff',
                            primaryBorderColor: '#fff',
                            lineColor: '#aaa',
                            secondaryColor: '#333',
                            tertiaryColor: '#111'
                        },
                        securityLevel: 'loose'
                    });
                    ref.current.innerHTML = ''; // Clear previous
                    const { svg } = await mermaid.render(`mermaid-${id}-${Date.now()}`, chart);
                    if (!isCancelled && ref.current) {
                        ref.current.innerHTML = svg;
                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Mermaid Render Error:', err);
                    if (!isCancelled && ref.current) {
                        ref.current.innerHTML = '<div style="color:var(--error); border:1px dashed var(--error); padding:1rem;">Failed to render diagram</div>';
                        setLoading(false);
                    }
                }
            }
        };
        // Small timeout to ensure DOM is ready during client transitions
        const timer = setTimeout(()=>{
            renderChart();
        }, 100);
        return ()=>{
            isCancelled = true;
            clearTimeout(timer);
        };
    }, [
        chart,
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mermaid-container",
        style: {
            textAlign: 'center',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            marginBottom: '1rem',
            overflowX: 'auto',
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                },
                children: "[ Initializing Diagram... ]"
            }, void 0, false, {
                fileName: "[project]/src/components/Mermaid.js",
                lineNumber: 77,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                style: {
                    display: loading ? 'none' : 'block'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Mermaid.js",
                lineNumber: 78,
                columnNumber: 13
            }, this)
        ]
    }, id, true, {
        fileName: "[project]/src/components/Mermaid.js",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_components_Mermaid_7e925c14.js.map