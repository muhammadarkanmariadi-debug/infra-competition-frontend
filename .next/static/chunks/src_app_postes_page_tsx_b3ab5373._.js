(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/postes/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeritaPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../_components/lib/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BeritaPage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
<<<<<<< HEAD
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeritaPage.useEffect": ()=>{
            const getData = {
                "BeritaPage.useEffect.getData": ()=>{
                    api.get('/blog').then({
                        "BeritaPage.useEffect.getData": (response)=>{
                            setPosts(response.data.data.data);
                        }
                    }["BeritaPage.useEffect.getData"]).catch({
                        "BeritaPage.useEffect.getData": (error)=>{
                            console.error(error);
                        }
                    }["BeritaPage.useEffect.getData"]);
                }
            }["BeritaPage.useEffect.getData"];
            getData();
        }
    }["BeritaPage.useEffect"], []);
    const handleSelect = (slug)=>{
        setSelectedPost(selectedPost === slug ? null : slug);
    };
    const handleRedirect = (slug)=>{
        window.location.href = `/post/${slug}`;
        setSelectedPost(selectedPost === slug ? null : slug);
=======
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [postesTes, setPostesTes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeritaPage.useEffect": ()=>{
            const fetchPosts;
        }
    }["BeritaPage.useEffect"]);
    const handleSelect = (id)=>{
        setSelectedPost(selectedPost === id ? null : id);
>>>>>>> origin/main
    };
    // 🔍 Filter post berdasarkan search
    const filteredPosts = posts.filter((post)=>post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto px-6 md:px-1 py-15 max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-8 font-bold text-black text-3xl",
                children: "Berita Sekolah & Organisasi SMK Telkom Malang"
            }, void 0, false, {
                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                lineNumber: 55,
=======
                lineNumber: 69,
>>>>>>> origin/main
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Cari berita...",
                    className: "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/2",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                    lineNumber: 61,
=======
                    lineNumber: 75,
>>>>>>> origin/main
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                lineNumber: 60,
=======
                lineNumber: 74,
>>>>>>> origin/main
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gap-8 grid grid-cols-1 md:grid-cols-2",
                children: filteredPosts.length > 0 ? filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white hover:shadow-md p-4 border border-gray-200 rounded-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: `${url}${post.thumbnail}`,
                                        alt: post.title,
                                        width: 120,
                                        height: 80,
                                        className: "rounded-lg w-[120px] h-[80px] object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                        lineNumber: 79,
=======
                                        lineNumber: 93,
>>>>>>> origin/main
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-semibold text-black hover:text-red-600 text-lg cursor-pointer",
<<<<<<< HEAD
                                                onClick: ()=>handleSelect(post.slug),
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/postes/page.tsx",
                                                lineNumber: 87,
=======
                                                onClick: ()=>handleSelect(post.id),
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/postes/page.tsx",
                                                lineNumber: 101,
>>>>>>> origin/main
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-gray-500 text-sm",
<<<<<<< HEAD
                                                children: post.short_body
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/postes/page.tsx",
                                                lineNumber: 93,
=======
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/postes/page.tsx",
                                                lineNumber: 107,
>>>>>>> origin/main
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-2 text-gray-400 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: post.author.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                                        lineNumber: 97,
=======
                                                        lineNumber: 109,
>>>>>>> origin/main
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: post.created_at
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                                        lineNumber: 98,
=======
                                                        lineNumber: 110,
>>>>>>> origin/main
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                                lineNumber: 96,
=======
                                                lineNumber: 108,
>>>>>>> origin/main
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                        lineNumber: 86,
=======
                                        lineNumber: 100,
>>>>>>> origin/main
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            selectedPost === post.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
=======
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            selectedPost === post.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
>>>>>>> origin/main
                                className: "mt-4 pt-4 border-t text-gray-700 text-sm leading-relaxed",
                                dangerouslySetInnerHTML: {
                                    __html: post.body
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                                lineNumber: 104,
=======
                                lineNumber: 116,
>>>>>>> origin/main
                                columnNumber: 17
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                        lineNumber: 74,
=======
                        lineNumber: 88,
>>>>>>> origin/main
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Berita tidak ditemukan 😢"
                }, void 0, false, {
                    fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                    lineNumber: 112,
=======
                    lineNumber: 124,
>>>>>>> origin/main
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
                lineNumber: 71,
=======
                lineNumber: 85,
>>>>>>> origin/main
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/postes/page.tsx",
<<<<<<< HEAD
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(BeritaPage, "Fke20GkDC5nF98a/mEABs174qs0=");
=======
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(BeritaPage, "TNBSBI4CEatWzr+s4/P2YtxsXtk=");
>>>>>>> origin/main
_c = BeritaPage;
var _c;
__turbopack_context__.k.register(_c, "BeritaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_postes_page_tsx_b3ab5373._.js.map