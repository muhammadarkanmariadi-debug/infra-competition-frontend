module.exports = {

"[project]/src/utils/database/atomics.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "arrayMove": (()=>arrayMove),
    "convertToDateTimeLocalString": (()=>convertToDateTimeLocalString),
    "countElements": (()=>countElements),
    "fileSizeToMb": (()=>fileSizeToMb),
    "formToJSON": (()=>formToJSON),
    "generateRandomString": (()=>generateRandomString),
    "getDateDaysAgoMore": (()=>getDateDaysAgoMore),
    "getDateMonths": (()=>getDateMonths),
    "getMonthName": (()=>getMonthName),
    "isInteger": (()=>isInteger),
    "slugify": (()=>slugify),
    "stringifyCompleteDate": (()=>stringifyCompleteDate),
    "stringifyDate": (()=>stringifyDate),
    "stripMarkdown": (()=>stripMarkdown),
    "transformToArrayCheckbox": (()=>transformToArrayCheckbox),
    "trimName": (()=>trimName),
    "validatePage": (()=>validatePage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function getMonthName(month) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    return months[month];
}
function stringifyDate(date) {
    const year = date.getFullYear(), month = getMonthName(date.getMonth()), day = date.getDate();
    return `${month} ${day}, ${year}`;
}
function stringifyCompleteDate(date) {
    const year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2), hour = ("0" + date.getHours()).slice(-2), minute = ("0" + date.getMinutes()).slice(-2);
    return `${year}/${month}/${day} at ${hour}:${minute}`;
}
function isInteger(value) {
    return /^\d+$/.test(value);
}
function validatePage(page) {
    return isInteger(page) && parseInt(page) > 0;
}
function generateRandomString(length) {
    const buffer = Buffer.alloc(length);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomFillSync"])(buffer);
    return buffer.toString("base64").slice(0, length);
}
const formToJSON = (elements)=>[].reduce.call(elements, (data, element)=>{
        data[element.name] = element.type == "checkbox" ? data[element.name] ? element.checked ? [
            ...data[element.name],
            element.value
        ] : data[element.name].filter((value)=>value !== element.value) : element.checked ? [
            element.value
        ] : [] : element.type == "radio" ? element.checked ? element.value : data[element.name] : element.value;
        return data;
    }, {});
const convertToDateTimeLocalString = (date)=>{
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};
const countElements = (arr)=>{
    const uniqueElements = Array.from(new Set(arr));
    const counts = uniqueElements.map((element)=>({
            value: element,
            count: arr.filter((item)=>item === element).length
        }));
    return counts;
};
const transformToArrayCheckbox = (inputArray)=>{
    return inputArray.reduce((acc, { field_id, value })=>{
        const group = acc.find((group)=>group.field_id === field_id);
        if (group) {
            group.value = Array.isArray(group.value) ? group.value.concat(value) : [
                group.value,
                value
            ];
        } else {
            acc.push({
                field_id,
                value
            });
        }
        return acc;
    }, []);
};
function arrayMove(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
        let k = newIndex - arr.length + 1;
        while(k--){
            arr.push(undefined);
        }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr; // for testing
}
function slugify(str, separator = "-") {
    str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str.replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, separator) // replace spaces with hyphens
    .replace(/-+/g, separator); // remove consecutive hyphens
    return str;
}
function fileSizeToMb(fileSize) {
    return parseFloat((fileSize / (1024 * 1024)).toFixed(2));
}
function trimName(name) {
    const splitName = name.split(" ");
    const trimmedName = splitName[0] + " " + splitName[1];
    return trimmedName;
}
function getDateMonths(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
}
function getDateDaysAgoMore(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
const stripMarkdown = (markdown)=>{
    return markdown.replace(/!\[.*?\]\(.*?\)/g, "").replace(/\[([^\]]+)\]\(.*?\)/g, "$1").replace(/`{3}.*\n?/g, "").replace(/`(.+?)`/g, "$1").replace(/[*_~`#>-]/g, "").replace(/\n+/g, " ").trim();
};
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "minpath": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}}),
"[externals]/node:process [external] (node:process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "minproc": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}}),
"[externals]/node:url [external] (node:url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "urlToPath": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}}),
"[project]/src/app/admin/components/MdEditor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Editor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$database$2f$atomics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/database/atomics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/bold.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/italic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$strikeThrough$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/strikeThrough.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$title$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/title.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/quote.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$hr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/hr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$comment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/comment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Editor({ value, onChange, label }) {
    const insertImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const insertImage = {
        name: "Insert image",
        keyCommand: "Insert upload",
        buttonProps: {
            "aria-label": "Insert an image"
        },
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFileImage"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/components/MdEditor.tsx",
            lineNumber: 45,
            columnNumber: 11
        }, this),
        execute: async (_, api)=>{
            const file = await getImage();
            if (!file) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Gagal memilih gambar");
            const imageSizeInMb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$database$2f$atomics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fileSizeToMb"])(file.size);
            if (imageSizeInMb >= 4.3) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Ukuran file terlalu besar! Maksimal 4.3 MB");
            try {
                const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Mengunggah gambar ke Cloudinary...");
                // 🔧 Ganti dengan milik kamu
                const CLOUD_NAME = ("TURBOPACK compile-time value", "dvpb6z2oj");
                const UPLOAD_PRESET = ("TURBOPACK compile-time value", "asda");
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", UPLOAD_PRESET);
                const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                    method: "POST",
                    body: formData
                });
                const data = await res.json();
                if (!res.ok || !data.secure_url) {
                    throw new Error(data.error?.message || "Upload gagal");
                }
                const imageUrl = data.secure_url;
                const markdownImage = `![uploaded image](${imageUrl})\n`;
                api.replaceSelection(markdownImage);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Gambar berhasil diunggah!", {
                    id: toastId
                });
            } catch (error) {
                console.error(error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Gagal mengunggah gambar");
            } finally{
                if (insertImageRef.current) insertImageRef.current.value = "";
            }
        }
    };
    function getImage() {
        return new Promise((resolve, reject)=>{
            if (!insertImageRef.current) return resolve(null);
            insertImageRef.current.onchange = ()=>{
                try {
                    if (!confirm("Upload gambar ini?")) {
                        insertImageRef.current.value = "";
                        return;
                    }
                    resolve(insertImageRef.current.files?.[0] || null);
                } catch (e) {
                    reject(e);
                }
            };
            insertImageRef.current.click();
        });
    }
    const toolbarCommands = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bold"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["italic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$strikeThrough$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strikethrough"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$hr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hr"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$title$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["title"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["link"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quote"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeBlock"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$comment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["comment"],
        insertImage,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["table"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unorderedListCommand"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderedListCommand"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkedListCommand"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-color-mode": "light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "textEditor",
                children: label ?? "Text Editor"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/MdEditor.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                hidden: true,
                name: "insertImage",
                ref: insertImageRef,
                accept: "image/gif,image/jpeg,image/jpg,image/png,image/webp,image/svg"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/MdEditor.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                value: value,
                onChange: onChange,
                className: "[&>div.w-md-editor-content>div.w-md-editor-preview]:prose",
                height: 600,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontFamily: "inherit",
                    padding: 0
                },
                id: "textEditor",
                commands: toolbarCommands
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/MdEditor.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/MdEditor.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/admin/posts/post/Form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreatePostForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js [app-ssr] (ecmascript) <export default as PhotoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$MdEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/MdEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CreatePostForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        short_body: "",
        slug: "",
        tags: [],
        body: "",
        thumbnail: null,
        status: "draft"
    });
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const availableTags = [
        "OSIS",
        "MPK",
        "Akademik",
        "Non-Akademik",
        "Lomba",
        "Workshop",
        "Seminar",
        "Ekstrakurikuler"
    ];
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (name === "title") {
            const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            setFormData((prev)=>({
                    ...prev,
                    slug
                }));
        }
    };
    const handleFileChange = (event)=>{
        const files = event.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        // optional: basic client-side size check (2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert("File terlalu besar. Maks 2MB.");
            return;
        }
        setFormData((prev)=>({
                ...prev,
                thumbnail: file
            }));
        const reader = new FileReader();
        reader.onloadend = ()=>setPreviewImage(reader.result);
        reader.readAsDataURL(file);
    };
    async function uploadToCloudinary(file) {
        const cloudName = ("TURBOPACK compile-time value", "dvpb6z2oj");
        const uploadPreset = ("TURBOPACK compile-time value", "asda");
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", uploadPreset);
        const res = await fetch(url, {
            method: "POST",
            body: fd
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Cloudinary upload failed: ${text}`);
        }
        const data = await res.json();
        return data.secure_url;
    }
    const handleTagToggle = (tag)=>{
        setFormData((prev)=>({
                ...prev,
                tags: prev.tags.includes(tag) ? prev.tags.filter((t)=>t !== tag) : [
                    ...prev.tags,
                    tag
                ]
            }));
    };
    const handleSubmit = async (e, publishStatus = "draft")=>{
        if (e) e.preventDefault();
        setLoading(true);
        try {
            let thumbnailUrl = null;
            if (formData.thumbnail) {
                thumbnailUrl = await uploadToCloudinary(formData.thumbnail);
            }
            const payload = {
                title: formData.title,
                // author_id: backend should infer author from auth; omit if so
                body: formData.body,
                short_body: formData.short_body,
                thumbnail: thumbnailUrl,
                tags: formData.tags.join(","),
                slug: formData.slug,
                is_published: publishStatus === "publish",
                approval_status: "pending"
            };
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/blog", JSON.stringify(payload));
            if (!res.status.toString().startsWith("2")) {
                const text = await res.data();
                throw new Error(`Create failed: ${text.message}`);
            }
            router.push("/admin/posts");
        } catch (err) {
            console.error(err);
            alert("Gagal membuat post. Cek console untuk detail.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "flex items-center space-x-2 mb-4 text-gray-600 hover:text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Kembali"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>handleSubmit(e, "publish"),
                    className: "space-y-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 bg-white shadow p-6 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: [
                                            "Judul Post",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 156,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "title",
                                        value: formData.title,
                                        onChange: handleInputChange,
                                        placeholder: "Masukkan judul post...",
                                        className: "px-4 py-2 border border-gray-300 rounded-lg w-full",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: [
                                            "Deskripsi",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 170,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "short_body",
                                        value: formData.short_body,
                                        onChange: handleInputChange,
                                        placeholder: "Deskripsi singkat tentang post...",
                                        rows: 3,
                                        className: "px-4 py-2 border border-gray-300 rounded-lg w-full",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: "Custom Slug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "slug",
                                        value: formData.slug,
                                        onChange: handleInputChange,
                                        placeholder: "custom-url-slug",
                                        className: "px-4 py-2 border border-gray-300 rounded-lg w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: "Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: availableTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleTagToggle(tag),
                                                className: `px-3 py-1 rounded-full text-sm font-medium ${formData.tags.includes(tag) ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: "Thumbnail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center items-center bg-gray-100 rounded-lg w-48 h-48 overflow-hidden",
                                                children: previewImage ? // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: previewImage,
                                                    alt: "Preview",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__["PhotoIcon"], {
                                                    className: "w-16 h-16 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "thumbnail-upload",
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleFileChange,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "thumbnail-upload",
                                                        className: "inline-flex items-center bg-white hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 text-sm cursor-pointer",
                                                        children: "Choose File"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    formData.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-gray-500 text-sm",
                                                        children: formData.thumbnail.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 42
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-gray-500 text-xs",
                                                        children: "Recommended size: 1200x630px. Max file size: 2MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 font-medium text-gray-700 text-sm",
                                        children: [
                                            "Text Editor",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                                lineNumber: 237,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$MdEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: formData.body,
                                        onChange: (value)=>setFormData((prev)=>({
                                                    ...prev,
                                                    body: value ?? ""
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-4 pt-6 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>router.back(),
                                        className: "hover:bg-gray-50 px-6 py-2 border border-gray-300 rounded-lg text-gray-700",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSubmit(null, "draft"),
                                        className: "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg text-white",
                                        children: "Save as Draft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white",
                                        children: loading ? "Menyimpan..." : "Simpan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/posts/post/Form.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/posts/post/Form.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/posts/post/Form.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e1711936._.js.map