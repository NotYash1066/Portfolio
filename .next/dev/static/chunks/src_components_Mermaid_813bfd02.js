(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Mermaid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mermaid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mermaid/dist/mermaid.core.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Mermaid({ chart, id }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Mermaid.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].initialize({
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
            const renderChart = {
                "Mermaid.useEffect.renderChart": async ()=>{
                    if (ref.current) {
                        try {
                            ref.current.innerHTML = ''; // Clear previous
                            const { svg } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].render(`mermaid-${id}-${Date.now()}`, chart);
                            ref.current.innerHTML = svg;
                        } catch (err) {
                            console.error('Mermaid Render Error:', err);
                            ref.current.innerHTML = '<div style="color:red; border:1px solid red; padding:1rem;">Failed to render diagram</div>';
                        }
                    }
                }
            }["Mermaid.useEffect.renderChart"];
            // Small timeout to ensure DOM is ready during client transitions
            const timer = setTimeout({
                "Mermaid.useEffect.timer": ()=>{
                    renderChart();
                }
            }["Mermaid.useEffect.timer"], 100);
            return ({
                "Mermaid.useEffect": ()=>clearTimeout(timer)
            })["Mermaid.useEffect"];
        }
    }["Mermaid.useEffect"], [
        chart,
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mermaid-container",
        style: {
            textAlign: 'center',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            marginBottom: '1rem',
            overflowX: 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref
        }, void 0, false, {
            fileName: "[project]/src/components/Mermaid.js",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, id, false, {
        fileName: "[project]/src/components/Mermaid.js",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(Mermaid, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Mermaid;
var _c;
__turbopack_context__.k.register(_c, "Mermaid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_Mermaid_813bfd02.js.map