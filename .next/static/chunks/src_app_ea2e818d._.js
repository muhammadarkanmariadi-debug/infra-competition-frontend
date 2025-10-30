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
    baseURL: 'http://localhost:8001/api',
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
"[project]/src/app/admin/posts/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostListPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PostListPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
<<<<<<< HEAD
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
=======
>>>>>>> origin/main
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostListPage.useEffect": ()=>{
            const fetchPosts = {
                "PostListPage.useEffect.fetchPosts": async ()=>{
                    try {
                        setLoading(true);
<<<<<<< HEAD
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/blogs');
                        setPosts(response.data?.data?.data || []);
=======
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/blog');
                        setPosts(response.data.data.data);
>>>>>>> origin/main
                        setError(null);
                    } catch (err) {
                        console.error('Error fetching posts:', err);
                        setError('Gagal memuat data posts');
                    } finally{
                        setLoading(false);
                    }
                }
            }["PostListPage.useEffect.fetchPosts"];
            fetchPosts();
        }
    }["PostListPage.useEffect"], []);
    const handleCreatePost = ()=>{
<<<<<<< HEAD
        router.push('/admin/posts/new');
=======
        router.push('/admin/posts/post');
>>>>>>> origin/main
    };
    const handleEditPost = (postId)=>{
        router.push(`/admin/posts/${postId}`);
    };
    const handleDeletePost = async (postId)=>{
        if (confirm('Apakah Anda yakin ingin menghapus post ini?')) {
            try {
<<<<<<< HEAD
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/blogs/${postId}`);
=======
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/blog/${postId}`);
>>>>>>> origin/main
                const updatedPosts = posts.filter((post)=>post.id !== postId);
                setPosts(updatedPosts);
            } catch (err) {
                console.error('Error deleting post:', err);
                alert('Gagal menghapus post');
            }
        }
    };
<<<<<<< HEAD
    // Filter posts
    const filteredPosts = posts.filter((post)=>{
        if (filterCategory !== 'all' && post.category !== filterCategory) return false;
        if (filterStatus !== 'all' && post.status !== filterStatus) return false;
        return true;
    });
    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);
    // Get unique categories and statuses
    const categories = [
        'all',
        ...Array.from(new Set(posts.map((p)=>p.category)))
    ];
    const statuses = [
        'all',
        'draft',
        'published'
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
=======
    // Pagination
    const totalPages = Math.ceil(posts.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center bg-gray-50 min-h-screen",
>>>>>>> origin/main
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                lineNumber: 89,
=======
                lineNumber: 79,
>>>>>>> origin/main
=======
                lineNumber: 80,
>>>>>>> origin/iqbal
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
            lineNumber: 88,
=======
            lineNumber: 78,
>>>>>>> origin/main
=======
            lineNumber: 79,
>>>>>>> origin/iqbal
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
<<<<<<< HEAD
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-6",
=======
        className: "bg-gray-50 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto px-6 py-8 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-6",
>>>>>>> origin/main
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
<<<<<<< HEAD
                                    className: "text-3xl font-bold text-gray-900 mb-2",
                                    children: "Posts"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                    lineNumber: 101,
=======
                                    className: "mb-2 font-bold text-gray-900 text-3xl",
                                    children: "Posts"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                    lineNumber: 91,
>>>>>>> origin/main
=======
                                    lineNumber: 92,
>>>>>>> origin/iqbal
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Kelola semua posts sekolah"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                    lineNumber: 102,
=======
                                    lineNumber: 92,
>>>>>>> origin/main
=======
                                    lineNumber: 93,
>>>>>>> origin/iqbal
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                            lineNumber: 100,
=======
                            lineNumber: 90,
>>>>>>> origin/main
=======
                            lineNumber: 91,
>>>>>>> origin/iqbal
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreatePost,
<<<<<<< HEAD
                            className: "bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2",
=======
                            className: "flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-medium text-white transition-colors",
>>>>>>> origin/main
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                    lineNumber: 108,
=======
                                    lineNumber: 98,
>>>>>>> origin/main
=======
                                    lineNumber: 99,
>>>>>>> origin/iqbal
                                    columnNumber: 13
                                }, this),
                                "Add Post"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                            lineNumber: 104,
=======
                            lineNumber: 94,
>>>>>>> origin/main
=======
                            lineNumber: 95,
>>>>>>> origin/iqbal
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/posts/page.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm p-6 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: filterCategory,
                                        onChange: (e)=>{
                                            setFilterCategory(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "Semua Kategori"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            categories.filter((c)=>c !== 'all').map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: category,
                                                    children: category
                                                }, category, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: filterStatus,
                                        onChange: (e)=>{
                                            setFilterStatus(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "Semua Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            statuses.filter((s)=>s !== 'all').map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: status,
                                                    children: status.charAt(0).toUpperCase() + status.slice(1)
                                                }, status, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/posts/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/posts/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm overflow-hidden",
=======
                    lineNumber: 89,
=======
                    lineNumber: 90,
>>>>>>> origin/iqbal
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 mb-6 px-4 py-3 border border-red-200 rounded-lg text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/posts/page.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-sm rounded-lg overflow-hidden",
>>>>>>> origin/main
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
<<<<<<< HEAD
                                        className: "bg-gray-50 border-b border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Thumbnail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Author"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 188,
=======
                                        className: "bg-gray-50 border-gray-200 border-b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Thumbnail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Author"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold text-gray-700 text-xs text-left uppercase tracking-wider",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                    lineNumber: 131,
>>>>>>> origin/main
=======
                                                    lineNumber: 132,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                            lineNumber: 169,
=======
                                            lineNumber: 115,
>>>>>>> origin/main
=======
                                            lineNumber: 116,
>>>>>>> origin/iqbal
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                        lineNumber: 168,
=======
                                        lineNumber: 114,
>>>>>>> origin/main
=======
                                        lineNumber: 115,
>>>>>>> origin/iqbal
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-200",
                                        children: currentPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 7,
<<<<<<< HEAD
                                                className: "px-6 py-12 text-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        className: "w-12 h-12 mx-auto mb-3 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg mb-2",
                                                        children: "Belum ada posts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                                        lineNumber: 198,
=======
                                                className: "px-6 py-12 text-gray-500 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        className: "mx-auto mb-3 w-12 h-12 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 text-lg",
                                                        children: "Belum ada posts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                        lineNumber: 141,
>>>>>>> origin/main
=======
                                                        lineNumber: 142,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: 'Klik tombol "Add Post" untuk membuat post baru'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 199,
=======
                                                        lineNumber: 142,
>>>>>>> origin/main
=======
                                                        lineNumber: 143,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                lineNumber: 196,
=======
                                                lineNumber: 139,
>>>>>>> origin/main
=======
                                                lineNumber: 140,
>>>>>>> origin/iqbal
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                            lineNumber: 195,
=======
                                            lineNumber: 138,
>>>>>>> origin/main
=======
                                            lineNumber: 139,
>>>>>>> origin/iqbal
                                            columnNumber: 19
                                        }, this) : currentPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
<<<<<<< HEAD
                                                            className: "w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden",
=======
                                                            className: "flex justify-center items-center bg-gray-200 rounded-lg w-16 h-16 overflow-hidden",
>>>>>>> origin/main
                                                            children: post.thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: post.thumbnail,
                                                                alt: post.title,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                lineNumber: 208,
=======
                                                                lineNumber: 151,
>>>>>>> origin/main
=======
                                                                lineNumber: 152,
>>>>>>> origin/iqbal
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                className: "w-6 h-6 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                lineNumber: 210,
=======
                                                                lineNumber: 153,
>>>>>>> origin/main
=======
                                                                lineNumber: 154,
>>>>>>> origin/iqbal
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                            lineNumber: 206,
=======
                                                            lineNumber: 149,
>>>>>>> origin/main
=======
                                                            lineNumber: 150,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 205,
=======
                                                        lineNumber: 148,
>>>>>>> origin/main
=======
                                                        lineNumber: 149,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
<<<<<<< HEAD
                                                            className: "text-sm text-gray-900 font-medium line-clamp-2",
                                                            children: post.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                                            lineNumber: 215,
=======
                                                            className: "font-medium text-gray-900 text-sm line-clamp-2",
                                                            children: post.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                            lineNumber: 158,
>>>>>>> origin/main
=======
                                                            lineNumber: 159,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 214,
=======
                                                        lineNumber: 157,
>>>>>>> origin/main
=======
                                                        lineNumber: 158,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
<<<<<<< HEAD
                                                            className: "text-sm text-gray-600",
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                                            lineNumber: 218,
=======
                                                            className: "text-gray-600 text-sm",
                                                            children: post.tags
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                            lineNumber: 161,
>>>>>>> origin/main
=======
                                                            lineNumber: 162,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 217,
=======
                                                        lineNumber: 160,
>>>>>>> origin/main
=======
                                                        lineNumber: 161,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
<<<<<<< HEAD
                                                            className: "text-sm text-gray-600",
                                                            children: post.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                                            lineNumber: 221,
=======
                                                            className: "text-gray-600 text-sm",
                                                            children: post.author.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                            lineNumber: 164,
>>>>>>> origin/main
=======
                                                            lineNumber: 165,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 220,
=======
                                                        lineNumber: 163,
>>>>>>> origin/main
=======
                                                        lineNumber: 164,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
<<<<<<< HEAD
                                                            className: `text-xs font-semibold px-3 py-1 rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                            children: post.status.charAt(0).toUpperCase() + post.status.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: new Date(post.updatedAt).toLocaleDateString('id-ID')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                                            lineNumber: 233,
=======
                                                            className: "text-gray-600 text-sm",
                                                            children: new Date(post.updated_at).toLocaleDateString('id-ID', {
                                                                day: '2-digit',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                            lineNumber: 167,
>>>>>>> origin/main
=======
                                                            lineNumber: 168,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 232,
=======
                                                        lineNumber: 166,
>>>>>>> origin/main
=======
                                                        lineNumber: 167,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
<<<<<<< HEAD
                                                                    onClick: ()=>handleEditPost(post.id),
<<<<<<< HEAD
                                                                    className: "p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors",
=======
=======
                                                                    onClick: ()=>handleEditPost(post.slug),
>>>>>>> origin/iqbal
                                                                    className: "hover:bg-blue-50 p-2 rounded text-blue-600 transition-colors",
>>>>>>> origin/main
                                                                    title: "Edit",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                        lineNumber: 244,
=======
                                                                        lineNumber: 178,
>>>>>>> origin/main
=======
                                                                        lineNumber: 183,
>>>>>>> origin/iqbal
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                    lineNumber: 239,
=======
                                                                    lineNumber: 173,
>>>>>>> origin/main
=======
                                                                    lineNumber: 178,
>>>>>>> origin/iqbal
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeletePost(post.id),
<<<<<<< HEAD
                                                                    className: "p-2 text-red-600 hover:bg-red-50 rounded transition-colors",
=======
                                                                    className: "hover:bg-red-50 p-2 rounded text-red-600 transition-colors",
>>>>>>> origin/main
                                                                    title: "Delete",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                        lineNumber: 251,
=======
                                                                        lineNumber: 185,
>>>>>>> origin/main
=======
                                                                        lineNumber: 190,
>>>>>>> origin/iqbal
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                                    lineNumber: 246,
=======
                                                                    lineNumber: 180,
>>>>>>> origin/main
=======
                                                                    lineNumber: 185,
>>>>>>> origin/iqbal
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                            lineNumber: 238,
=======
                                                            lineNumber: 172,
>>>>>>> origin/main
=======
                                                            lineNumber: 177,
>>>>>>> origin/iqbal
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                        lineNumber: 237,
=======
                                                        lineNumber: 171,
>>>>>>> origin/main
=======
                                                        lineNumber: 176,
>>>>>>> origin/iqbal
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, post.id, true, {
                                                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                lineNumber: 204,
=======
                                                lineNumber: 147,
>>>>>>> origin/main
=======
                                                lineNumber: 148,
>>>>>>> origin/iqbal
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                        lineNumber: 193,
=======
                                        lineNumber: 136,
>>>>>>> origin/main
=======
                                        lineNumber: 137,
>>>>>>> origin/iqbal
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                lineNumber: 167,
=======
                                lineNumber: 113,
>>>>>>> origin/main
=======
                                lineNumber: 114,
>>>>>>> origin/iqbal
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        filteredPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-t border-gray-200 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-600",
=======
                            lineNumber: 112,
=======
                            lineNumber: 113,
>>>>>>> origin/iqbal
                            columnNumber: 11
                        }, this),
                        posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-6 py-4 border-gray-200 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-gray-600 text-sm",
>>>>>>> origin/main
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Rows per page:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                            lineNumber: 266,
=======
                                            lineNumber: 200,
>>>>>>> origin/main
=======
                                            lineNumber: 205,
>>>>>>> origin/iqbal
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: rowsPerPage,
                                            onChange: (e)=>{
                                                setRowsPerPage(Number(e.target.value));
                                                setCurrentPage(1);
                                            },
<<<<<<< HEAD
                                            className: "border border-gray-300 rounded px-2 py-1 text-sm",
=======
                                            className: "px-2 py-1 border border-gray-300 rounded text-sm",
>>>>>>> origin/main
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 10,
                                                    children: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                    lineNumber: 275,
=======
                                                    lineNumber: 209,
>>>>>>> origin/main
=======
                                                    lineNumber: 214,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 25,
                                                    children: "25"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                    lineNumber: 276,
=======
                                                    lineNumber: 210,
>>>>>>> origin/main
=======
                                                    lineNumber: 215,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 50,
                                                    children: "50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                                    lineNumber: 277,
=======
                                                    lineNumber: 211,
>>>>>>> origin/main
=======
                                                    lineNumber: 216,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                            lineNumber: 267,
=======
                                            lineNumber: 201,
>>>>>>> origin/main
=======
                                            lineNumber: 206,
>>>>>>> origin/iqbal
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                    lineNumber: 265,
=======
                                    lineNumber: 199,
>>>>>>> origin/main
=======
                                    lineNumber: 204,
>>>>>>> origin/iqbal
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
<<<<<<< HEAD
                                            className: "text-sm text-gray-600",
                                            children: [
                                                startIndex + 1,
                                                "-",
                                                Math.min(endIndex, filteredPosts.length),
                                                " of ",
                                                filteredPosts.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
                                            lineNumber: 281,
=======
                                            className: "text-gray-600 text-sm",
                                            children: [
                                                startIndex + 1,
                                                "-",
                                                Math.min(endIndex, posts.length),
                                                " of ",
                                                posts.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                            lineNumber: 215,
>>>>>>> origin/main
=======
                                            lineNumber: 220,
>>>>>>> origin/iqbal
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                                    disabled: currentPage === 1,
<<<<<<< HEAD
                                                    className: "px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                                                    children: "Previous"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 285,
=======
                                                    className: "hover:bg-gray-50 disabled:opacity-50 px-3 py-1 border border-gray-300 rounded text-sm disabled:cursor-not-allowed",
                                                    children: "Previous"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                    lineNumber: 219,
>>>>>>> origin/main
=======
                                                    lineNumber: 224,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                                    disabled: currentPage === totalPages,
<<<<<<< HEAD
                                                    className: "px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
                                                    lineNumber: 292,
=======
                                                    className: "hover:bg-gray-50 disabled:opacity-50 px-3 py-1 border border-gray-300 rounded text-sm disabled:cursor-not-allowed",
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
                                                    lineNumber: 226,
>>>>>>> origin/main
=======
                                                    lineNumber: 231,
>>>>>>> origin/iqbal
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                            lineNumber: 284,
=======
                                            lineNumber: 218,
>>>>>>> origin/main
=======
                                            lineNumber: 223,
>>>>>>> origin/iqbal
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                                    lineNumber: 280,
=======
                                    lineNumber: 214,
>>>>>>> origin/main
=======
                                    lineNumber: 219,
>>>>>>> origin/iqbal
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                            lineNumber: 264,
=======
                            lineNumber: 198,
>>>>>>> origin/main
=======
                            lineNumber: 203,
>>>>>>> origin/iqbal
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
                    lineNumber: 165,
=======
                    lineNumber: 111,
>>>>>>> origin/main
=======
                    lineNumber: 112,
>>>>>>> origin/iqbal
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
            lineNumber: 97,
=======
            lineNumber: 87,
>>>>>>> origin/main
=======
            lineNumber: 88,
>>>>>>> origin/iqbal
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/posts/page.tsx",
<<<<<<< HEAD
<<<<<<< HEAD
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(PostListPage, "k3QcSbufNYgffloriiegq9UCBG0=", false, function() {
=======
        lineNumber: 85,
=======
        lineNumber: 86,
>>>>>>> origin/iqbal
        columnNumber: 5
    }, this);
}
_s(PostListPage, "jDT6/NpywlOYwyEiuPWhA4fQykQ=", false, function() {
>>>>>>> origin/main
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PostListPage;
var _c;
__turbopack_context__.k.register(_c, "PostListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_ea2e818d._.js.map