(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/_components/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api),
    "setAuthToken": (()=>setAuthToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true
});
// JWT Token? Tambahkan interceptor
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token'); // Or context
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
const setAuthToken = (token)=>{
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/post/[slug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>News)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function News() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "News.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/blog/${slug}`).then({
                "News.useEffect": (res)=>{
                    setData(res.data.data);
                }
            }["News.useEffect"]);
        }
    }["News.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[999] flex max-lg:flex-col max-lg:items-center gap-20 bg-white xl:bg-transparent mx-auto px-5 py-4 xl:py-0 2xl:max-w-[1400px] xl:max-w-[1300px]",
            id: "post",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[60%] max-lg:w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 pt-20 pb-[24px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "w-[90%] font-[600] text-[27px] text-black leading-[150%]",
                                    children: data?.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-circle w-[28px] h-[28px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "data:image/jpeg;base64,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",
                                                    alt: "profile",
                                                    className: "rounded-full w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-[500] text-[16px] text-black",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-[500] text-[16px] text-black",
                                                children: data?.created_at
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/post/[slug]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "rounded-xl",
                                src: "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[slug]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3 pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "bg-primary px-[18px] py-1.5 rounded-[18px] text-white hover:scale-109 transition-all duration-500",
                                children: "MAC"
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[slug]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-8 leading-6 prose",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-[400] text-[18px] text-black",
                                children: data?.body
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[slug]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[40%] max-lg:w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 pt-20 pb-[24px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-[600] text-[27px] text-black leading-[150%]",
                                children: "Berita Terkait"
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "user image",
                                        loading: "lazy",
                                        src: "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
                                        width: "600",
                                        height: "600",
                                        decoding: "async",
                                        "data-nimg": "1",
                                        className: "relative bg-no-repeat bg-center mx-auto mt-[12px] mt-3z-[-1] rounded-2xl w-full hover:scale-103 transition-transform duration-300",
                                        style: {
                                            color: 'transparent'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-between items-center mt-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[50%]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-[600] text-[23px] text-black leading-[150%]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/",
                                                        className: "text-black hover:text-primary transition-colors duration-300",
                                                        children: [
                                                            "wasd",
                                                            ' '
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/",
                                                    className: "bg-primary px-[18px] py-1.5 rounded-[18px] text-white hover:scale-109 transition-all duration-500",
                                                    children: "MAC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-[28px] h-[28px] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "data:image/jpeg;base64,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",
                                                    alt: "profile",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-[500] text-[14px] text-black hover:text-primary transition-colors duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/",
                                                    children: "Iqbal Setengah Matang"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-[500] text-[14px] text-gray-500",
                                        children: "Sep 14, 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "user image",
                                        loading: "lazy",
                                        src: "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
                                        width: "600",
                                        height: "600",
                                        decoding: "async",
                                        "data-nimg": "1",
                                        className: "relative bg-no-repeat bg-center mx-auto mt-[12px] mt-3z-[-1] rounded-2xl w-full hover:scale-103 transition-transform duration-300",
                                        style: {
                                            color: 'transparent'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-between items-center mt-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[50%]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-[600] text-[23px] text-black leading-[150%]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/",
                                                        className: "text-black hover:text-primary transition-colors duration-300",
                                                        children: [
                                                            "Ikan Sepat ikan teri",
                                                            ' '
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/",
                                                    className: "bg-primary px-[18px] py-1.5 rounded-[18px] text-white hover:scale-109 transition-all duration-500",
                                                    children: "MAC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-[28px] h-[28px] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "data:image/jpeg;base64,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",
                                                    alt: "profile",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                className: "font-[500] text-[14px] text-black hover:text-primary transition-colors duration-300",
                                                children: "Akira 500 CC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-[500] text-[14px] text-gray-500",
                                        children: "Sep 26, 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/post/[slug]/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/post/[slug]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/post/[slug]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/post/[slug]/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(News, "rr7f5kbao1aeqGyFoC2sORFHO3E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = News;
var _c;
__turbopack_context__.k.register(_c, "News");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_ba1a085b._.js.map