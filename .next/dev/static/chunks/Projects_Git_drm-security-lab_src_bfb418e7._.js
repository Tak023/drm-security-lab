(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveIndicator",
    ()=>PerspectiveIndicator,
    "PerspectiveToggle",
    ()=>PerspectiveToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/providers/PerspectiveProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function PerspectiveToggle({ size = 'default', showLabel = true, className = '' }) {
    _s();
    const { perspective, setPerspective } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"])();
    const perspectives = [
        {
            value: 'red-team',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"],
            label: 'Red Team',
            color: 'text-red-team hover:bg-red-team/10 data-[active=true]:bg-red-team/20 data-[active=true]:text-red-team'
        },
        {
            value: 'neutral',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
            label: 'Neutral',
            color: 'text-muted-foreground hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-foreground'
        },
        {
            value: 'blue-team',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            label: 'Blue Team',
            color: 'text-blue-team hover:bg-blue-team/10 data-[active=true]:bg-blue-team/20 data-[active=true]:text-blue-team'
        }
    ];
    const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
    const buttonSize = size === 'sm' ? 'h-8 px-2' : size === 'lg' ? 'h-11 px-4' : 'h-9 px-3';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 rounded-lg border border-border bg-card p-1 ${className}`,
        children: perspectives.map(({ value, icon: Icon, label, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                "data-active": perspective === value,
                className: `${buttonSize} ${color} transition-all`,
                onClick: ()=>setPerspective(value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: iconSize
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1.5 text-xs font-medium",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
                        lineNumber: 57,
                        columnNumber: 25
                    }, this)
                ]
            }, value, true, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(PerspectiveToggle, "x57IGe8J9iOYfj/D2UG77L6UbcU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"]
    ];
});
_c = PerspectiveToggle;
function PerspectiveIndicator({ className = '' }) {
    _s1();
    const { perspective, perspectiveLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"])();
    const colorClasses = perspective === 'red-team' ? 'bg-red-team/10 text-red-team border-red-team/30' : perspective === 'blue-team' ? 'bg-blue-team/10 text-blue-team border-blue-team/30' : 'bg-muted text-muted-foreground border-border';
    const Icon = perspective === 'red-team' ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"] : perspective === 'blue-team' ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"] : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${colorClasses} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-3 w-3"
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            perspectiveLabel
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(PerspectiveIndicator, "Nr54RLOMHQhl7Uo1rkERtgLCGuY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"]
    ];
});
_c1 = PerspectiveIndicator;
var _c, _c1;
__turbopack_context__.k.register(_c, "PerspectiveToggle");
__turbopack_context__.k.register(_c1, "PerspectiveIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/stores/progressStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgressStore",
    ()=>useProgressStore
]);
/**
 * Progress Store - Zustand store for user learning progress
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const initialProgress = {
    articlesRead: [],
    labsCompleted: [],
    challengesCompleted: [],
    totalPoints: 0,
    currentPerspective: 'neutral',
    lastActivityAt: new Date().toISOString(),
    streakDays: 0,
    achievements: []
};
const useProgressStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        ...initialProgress,
        markArticleRead: (articleId)=>set((state)=>({
                    articlesRead: state.articlesRead.includes(articleId) ? state.articlesRead : [
                        ...state.articlesRead,
                        articleId
                    ],
                    lastActivityAt: new Date().toISOString()
                })),
        isArticleRead: (articleId)=>get().articlesRead.includes(articleId),
        markLabCompleted: (labId)=>set((state)=>({
                    labsCompleted: state.labsCompleted.includes(labId) ? state.labsCompleted : [
                        ...state.labsCompleted,
                        labId
                    ],
                    lastActivityAt: new Date().toISOString()
                })),
        isLabCompleted: (labId)=>get().labsCompleted.includes(labId),
        markChallengeCompleted: (challengeId, points)=>set((state)=>({
                    challengesCompleted: state.challengesCompleted.includes(challengeId) ? state.challengesCompleted : [
                        ...state.challengesCompleted,
                        challengeId
                    ],
                    totalPoints: state.challengesCompleted.includes(challengeId) ? state.totalPoints : state.totalPoints + points,
                    lastActivityAt: new Date().toISOString()
                })),
        isChallengeCompleted: (challengeId)=>get().challengesCompleted.includes(challengeId),
        addPoints: (points)=>set((state)=>({
                    totalPoints: state.totalPoints + points
                })),
        unlockAchievement: (achievement)=>set((state)=>({
                    achievements: state.achievements.some((a)=>a.id === achievement.id) ? state.achievements : [
                        ...state.achievements,
                        {
                            ...achievement,
                            unlockedAt: new Date().toISOString()
                        }
                    ]
                })),
        hasAchievement: (achievementId)=>get().achievements.some((a)=>a.id === achievementId),
        resetProgress: ()=>set(initialProgress)
    }), {
    name: 'drm-lab-progress'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$PerspectiveToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$stores$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/stores/progressStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const navItems = [
    {
        label: 'Knowledge Base',
        href: '/knowledge-base',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        label: 'Labs',
        href: '/labs',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
    },
    {
        label: 'Challenges',
        href: '/challenges',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { totalPoints, challengesCompleted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$stores$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-foreground",
                                        children: "DRM Security"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-muted-foreground",
                                        children: "Lab"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-1 md:flex",
                        children: navItems.map((item)=>{
                            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: isActive ? 'secondary' : 'ghost',
                                    size: "sm",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        item.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-3 text-sm sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                className: "h-4 w-4 text-warning"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-foreground",
                                                children: totalPoints
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "pts"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-px bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-foreground",
                                                children: challengesCompleted.length
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "solved"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$PerspectiveToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveToggle"], {
                                showLabel: false,
                                size: "sm",
                                className: "hidden lg:flex"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "md:hidden",
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border bg-background md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-1 p-4",
                    children: [
                        navItems.map((item)=>{
                            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setMobileMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: isActive ? 'secondary' : 'ghost',
                                    className: "w-full justify-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this),
                                        item.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 119,
                                    columnNumber: 19
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-2 border-t border-border"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs font-medium text-muted-foreground",
                                    children: "Perspective"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$PerspectiveToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveToggle"], {
                                    showLabel: true,
                                    size: "sm"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Header, "SpYwHJU57XTYOd/ly3NFh30f4nI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$stores$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$PerspectiveToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/layout/PerspectiveToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const knowledgeBaseItems = [
    {
        id: 'overview',
        label: 'DRM Overview',
        href: '/knowledge-base/overview',
        icon: 'BookOpen'
    },
    {
        id: 'widevine',
        label: 'Widevine',
        href: '/knowledge-base/widevine',
        icon: 'Shield'
    },
    {
        id: 'fairplay',
        label: 'FairPlay',
        href: '/knowledge-base/fairplay',
        icon: 'Shield'
    },
    {
        id: 'playready',
        label: 'PlayReady',
        href: '/knowledge-base/playready',
        icon: 'Shield'
    },
    {
        id: 'encryption',
        label: 'Encryption Basics',
        href: '/knowledge-base/encryption',
        icon: 'Lock'
    },
    {
        id: 'protocols',
        label: 'License Protocols',
        href: '/knowledge-base/protocols',
        icon: 'Network'
    }
];
const labItems = [
    {
        id: 'license-server',
        label: 'License Server',
        href: '/labs/license-server',
        icon: 'Network'
    },
    {
        id: 'key-exchange',
        label: 'Key Exchange',
        href: '/labs/key-exchange',
        icon: 'Key'
    },
    {
        id: 'encryption',
        label: 'Encryption Lab',
        href: '/labs/encryption',
        icon: 'Lock'
    },
    {
        id: 'cdm-simulator',
        label: 'CDM Simulator',
        href: '/labs/cdm-simulator',
        icon: 'Shield'
    }
];
const attackItems = [
    {
        id: 'cdm-extraction',
        label: 'CDM Extraction',
        href: '/labs/attacks/cdm-extraction',
        icon: 'Sword'
    },
    {
        id: 'key-sharing',
        label: 'Key Sharing',
        href: '/labs/attacks/key-sharing',
        icon: 'Key'
    },
    {
        id: 'mitm',
        label: 'MITM Attack',
        href: '/labs/attacks/mitm',
        icon: 'Network'
    },
    {
        id: 'hdcp-bypass',
        label: 'HDCP Bypass',
        href: '/labs/attacks/hdcp-bypass',
        icon: 'Eye'
    }
];
const defenseItems = [
    {
        id: 'attestation',
        label: 'Device Attestation',
        href: '/labs/defense/attestation',
        icon: 'Fingerprint'
    },
    {
        id: 'watermarking',
        label: 'Watermarking',
        href: '/labs/defense/watermarking',
        icon: 'FileText'
    },
    {
        id: 'anomaly',
        label: 'Anomaly Detection',
        href: '/labs/defense/anomaly',
        icon: 'AlertTriangle'
    }
];
const iconMap = {
    BookOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    Shield: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
    Lock: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    Network: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
    Key: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"],
    Sword: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"],
    Eye: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    Fingerprint: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"],
    AlertTriangle: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
    GitBranch: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
    FlaskConical: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
    Trophy: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
};
function NavSection({ title, items, badge, badgeVariant = 'secondary' }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center justify-between px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    badge !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: badgeVariant,
                        className: "text-xs",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5",
                children: items.map((item)=>{
                    const Icon = iconMap[item.icon || 'BookOpen'] || __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"];
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: isActive ? 'secondary' : 'ghost',
                            size: "sm",
                            className: "w-full justify-start gap-2 px-3 font-normal",
                            disabled: item.disabled,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 truncate text-left",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "ml-auto text-xs",
                                    children: item.badge
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-3 w-3 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(NavSection, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavSection;
function Sidebar({ className = '' }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Determine which section we're in
    const isKnowledgeBase = pathname.startsWith('/knowledge-base');
    const isLabs = pathname.startsWith('/labs');
    const isChallenges = pathname.startsWith('/challenges');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `flex w-64 flex-col border-r border-border bg-sidebar ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$PerspectiveToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveIndicator"], {
                    className: "w-full justify-center"
                }, void 0, false, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                            title: "Learn",
                            items: [
                                {
                                    id: 'kb',
                                    label: 'Knowledge Base',
                                    href: '/knowledge-base',
                                    icon: 'BookOpen'
                                },
                                {
                                    id: 'diagrams',
                                    label: 'Diagrams',
                                    href: '/diagrams',
                                    icon: 'GitBranch'
                                },
                                {
                                    id: 'labs',
                                    label: 'Labs',
                                    href: '/labs',
                                    icon: 'FlaskConical'
                                },
                                {
                                    id: 'challenges',
                                    label: 'Challenges',
                                    href: '/challenges',
                                    icon: 'Trophy'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                            className: "my-2"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        isKnowledgeBase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                            title: "Topics",
                            items: knowledgeBaseItems
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        isLabs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                                    title: "Simulations",
                                    items: labItems
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                    className: "my-2"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                                    title: "Attack Scenarios",
                                    items: attackItems,
                                    badge: "Red",
                                    badgeVariant: "destructive"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                    className: "my-2"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                                    title: "Defense Lab",
                                    items: defenseItems,
                                    badge: "Blue"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        isChallenges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSection, {
                            title: "Categories",
                            items: [
                                {
                                    id: 'all',
                                    label: 'All Challenges',
                                    href: '/challenges',
                                    icon: 'Trophy'
                                },
                                {
                                    id: 'encryption',
                                    label: 'Encryption',
                                    href: '/challenges?category=encryption',
                                    icon: 'Lock'
                                },
                                {
                                    id: 'protocols',
                                    label: 'Protocols',
                                    href: '/challenges?category=protocols',
                                    icon: 'Network'
                                },
                                {
                                    id: 'forensics',
                                    label: 'Forensics',
                                    href: '/challenges?category=forensics',
                                    icon: 'Eye'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-border bg-card p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Quick Start"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-muted-foreground",
                            children: "New here? Start with the DRM Overview to understand the basics."
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/knowledge-base/overview",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "secondary",
                                className: "mt-2 w-full",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s1(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavSection");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
'use client';
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                lineNumber: 15,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 14,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-foreground",
                                            children: "DRM Security Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-muted-foreground",
                                    children: "An educational platform for understanding Digital Rights Management security concepts, attack vectors, and defense mechanisms."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-foreground",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/knowledge-base",
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: "Knowledge Base"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/labs",
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: "Interactive Labs"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/challenges",
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: "CTF Challenges"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/knowledge-base/overview",
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: "Getting Started"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-foreground",
                                    children: "Legal & Ethics"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Educational use only"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Not for circumvention"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-muted-foreground",
                                    children: "This platform does not provide tools or instructions for circumventing actual DRM systems. All demonstrations use mock systems created for educational purposes."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " DRM Security Lab. For educational purposes only."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://github.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowDiagram",
    ()=>FlowDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function DRMNode({ data, selected }) {
    const typeStyles = {
        client: 'bg-blue-500/20 border-blue-500 text-blue-400',
        server: 'bg-purple-500/20 border-purple-500 text-purple-400',
        cdn: 'bg-green-500/20 border-green-500 text-green-400',
        attacker: 'bg-red-500/20 border-red-500 text-red-400',
        defense: 'bg-cyan-500/20 border-cyan-500 text-cyan-400',
        key: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
        content: 'bg-orange-500/20 border-orange-500 text-orange-400'
    };
    const style = typeStyles[data.type || 'client'] || typeStyles.client;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-4 py-3 rounded-lg border-2 min-w-[120px] text-center transition-all', style, selected && 'ring-2 ring-primary ring-offset-2 ring-offset-background'),
        children: [
            data.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex justify-center",
                children: data.icon
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                lineNumber: 50,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-sm",
                children: data.label
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            data.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs opacity-70 mt-1",
                children: data.description
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = DRMNode;
// Custom edge label component
function EdgeLabel({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 py-1 bg-background/90 border border-border rounded text-xs text-muted-foreground",
        children: label
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c1 = EdgeLabel;
const nodeTypes = {
    drm: DRMNode
};
function FlowDiagram({ nodes: initialNodes, edges: initialEdges, title, description, className, interactive = true, showMiniMap = false, showControls = true, fitView = true, animatedEdges = true, onNodeClick }) {
    _s();
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"])(initialNodes);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"])(animatedEdges ? initialEdges.map({
        "FlowDiagram.useEdgesState": (edge)=>({
                ...edge,
                animated: true
            })
    }["FlowDiagram.useEdgesState"]) : initialEdges);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlowDiagram.useCallback[handleNodeClick]": (_, node)=>{
            setSelectedNode(node);
            onNodeClick?.(node);
        }
    }["FlowDiagram.useCallback[handleNodeClick]"], [
        onNodeClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full h-[500px] rounded-lg border border-border bg-zinc-950', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
            nodes: nodes,
            edges: edges,
            onNodesChange: interactive ? onNodesChange : undefined,
            onEdgesChange: interactive ? onEdgesChange : undefined,
            onNodeClick: handleNodeClick,
            nodeTypes: nodeTypes,
            fitView: fitView,
            proOptions: {
                hideAttribution: true
            },
            className: "bg-zinc-950",
            defaultEdgeOptions: {
                type: 'smoothstep',
                markerEnd: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                    width: 20,
                    height: 20
                },
                style: {
                    strokeWidth: 2,
                    stroke: 'hsl(var(--muted-foreground))'
                }
            },
            children: [
                showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                    className: "bg-background border-border"
                }, void 0, false, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                    lineNumber: 140,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Dots,
                    gap: 16,
                    size: 1,
                    color: "hsl(var(--muted-foreground) / 0.2)"
                }, void 0, false, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                showMiniMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                    nodeColor: (node)=>{
                        const data = node.data;
                        const type = data?.type || 'client';
                        const colors = {
                            client: '#3b82f6',
                            server: '#a855f7',
                            cdn: '#22c55e',
                            attacker: '#ef4444',
                            defense: '#06b6d4',
                            key: '#eab308',
                            content: '#f97316'
                        };
                        return colors[type] || '#3b82f6';
                    },
                    className: "bg-background/80"
                }, void 0, false, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this),
                (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Panel"], {
                    position: "top-left",
                    className: "bg-background/80 p-3 rounded-lg border border-border",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-foreground",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                            lineNumber: 163,
                            columnNumber: 23
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                            lineNumber: 164,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this),
                selectedNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Panel"], {
                    position: "bottom-left",
                    className: "bg-background/90 p-3 rounded-lg border border-border max-w-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-foreground",
                            children: selectedNode.data.label
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        selectedNode.data.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: selectedNode.data.description
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(FlowDiagram, "BR1x1X0Edw0N4iEAfK8fa5Lniiw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"]
    ];
});
_c2 = FlowDiagram;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DRMNode");
__turbopack_context__.k.register(_c1, "EdgeLabel");
__turbopack_context__.k.register(_c2, "FlowDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LicenseFlowDiagram",
    ()=>LicenseFlowDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const baseNodes = [
    {
        id: 'client',
        type: 'drm',
        position: {
            x: 50,
            y: 200
        },
        data: {
            label: 'Client App',
            description: 'Video player with CDM',
            type: 'client'
        }
    },
    {
        id: 'cdm',
        type: 'drm',
        position: {
            x: 250,
            y: 200
        },
        data: {
            label: 'CDM',
            description: 'Content Decryption Module',
            type: 'key'
        }
    },
    {
        id: 'proxy',
        type: 'drm',
        position: {
            x: 450,
            y: 200
        },
        data: {
            label: 'Proxy Server',
            description: 'Your backend',
            type: 'server'
        }
    },
    {
        id: 'license',
        type: 'drm',
        position: {
            x: 650,
            y: 200
        },
        data: {
            label: 'License Server',
            description: 'DRM vendor (Google/Apple/MS)',
            type: 'server'
        }
    },
    {
        id: 'cdn',
        type: 'drm',
        position: {
            x: 250,
            y: 350
        },
        data: {
            label: 'CDN',
            description: 'Encrypted content delivery',
            type: 'cdn'
        }
    },
    {
        id: 'content',
        type: 'drm',
        position: {
            x: 50,
            y: 350
        },
        data: {
            label: 'Decrypted Video',
            description: 'Protected in TEE/Secure memory',
            type: 'content'
        }
    }
];
const flowSteps = [
    {
        id: 0,
        title: 'Initial State',
        description: 'User wants to play protected content. The client app initiates the playback process.',
        activeEdges: [],
        highlightNodes: [
            'client'
        ]
    },
    {
        id: 1,
        title: 'Parse PSSH',
        description: 'Client parses the manifest (DASH/HLS) and extracts PSSH box containing Key IDs.',
        activeEdges: [],
        highlightNodes: [
            'client',
            'cdm'
        ]
    },
    {
        id: 2,
        title: 'Generate Challenge',
        description: 'CDM generates an encrypted license request (challenge) containing device info and key IDs.',
        activeEdges: [
            'client-cdm'
        ],
        highlightNodes: [
            'cdm'
        ]
    },
    {
        id: 3,
        title: 'Forward to Proxy',
        description: 'Challenge is sent to your proxy server for authentication and entitlement checks.',
        activeEdges: [
            'cdm-proxy'
        ],
        highlightNodes: [
            'proxy'
        ]
    },
    {
        id: 4,
        title: 'License Request',
        description: 'Proxy forwards the challenge to the DRM license server with authentication tokens.',
        activeEdges: [
            'proxy-license'
        ],
        highlightNodes: [
            'license'
        ]
    },
    {
        id: 5,
        title: 'License Response',
        description: 'License server validates device, checks entitlements, returns encrypted content keys.',
        activeEdges: [
            'license-proxy'
        ],
        highlightNodes: [
            'license',
            'proxy'
        ]
    },
    {
        id: 6,
        title: 'Deliver License',
        description: 'Proxy forwards the license response back to the client CDM.',
        activeEdges: [
            'proxy-cdm'
        ],
        highlightNodes: [
            'cdm'
        ]
    },
    {
        id: 7,
        title: 'Decrypt Keys',
        description: 'CDM decrypts the license using its private key, storing content keys securely.',
        activeEdges: [],
        highlightNodes: [
            'cdm'
        ]
    },
    {
        id: 8,
        title: 'Fetch Content',
        description: 'Client requests encrypted video segments from the CDN.',
        activeEdges: [
            'client-cdn'
        ],
        highlightNodes: [
            'cdn'
        ]
    },
    {
        id: 9,
        title: 'Decrypt & Play',
        description: 'CDM decrypts segments in protected memory. Video is rendered to screen with output protection.',
        activeEdges: [
            'cdn-content',
            'content-client'
        ],
        highlightNodes: [
            'content',
            'client'
        ]
    }
];
const allEdges = [
    {
        id: 'client-cdm',
        source: 'client',
        target: 'cdm',
        label: '1. Request license',
        animated: false,
        style: {
            stroke: '#3b82f6',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#3b82f6'
        }
    },
    {
        id: 'cdm-proxy',
        source: 'cdm',
        target: 'proxy',
        label: '2. Challenge',
        animated: false,
        style: {
            stroke: '#a855f7',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#a855f7'
        }
    },
    {
        id: 'proxy-license',
        source: 'proxy',
        target: 'license',
        label: '3. Forward + Auth',
        animated: false,
        style: {
            stroke: '#a855f7',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#a855f7'
        }
    },
    {
        id: 'license-proxy',
        source: 'license',
        target: 'proxy',
        label: '4. License',
        animated: false,
        style: {
            stroke: '#22c55e',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#22c55e'
        },
        sourceHandle: 'bottom',
        targetHandle: 'bottom'
    },
    {
        id: 'proxy-cdm',
        source: 'proxy',
        target: 'cdm',
        label: '5. License',
        animated: false,
        style: {
            stroke: '#22c55e',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#22c55e'
        }
    },
    {
        id: 'client-cdn',
        source: 'client',
        target: 'cdn',
        label: '6. Request segments',
        animated: false,
        style: {
            stroke: '#f97316',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#f97316'
        }
    },
    {
        id: 'cdn-content',
        source: 'cdn',
        target: 'content',
        label: '7. Encrypted data',
        animated: false,
        style: {
            stroke: '#f97316',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#f97316'
        }
    },
    {
        id: 'content-client',
        source: 'content',
        target: 'client',
        label: '8. Decrypted video',
        animated: false,
        style: {
            stroke: '#06b6d4',
            strokeWidth: 2
        },
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: '#06b6d4'
        }
    }
];
function LicenseFlowDiagram() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const step = flowSteps[currentStep];
    // Update nodes based on current step
    const nodes = baseNodes.map((node)=>({
            ...node,
            style: step.highlightNodes.includes(node.id) ? {
                opacity: 1,
                filter: 'drop-shadow(0 0 8px hsl(var(--primary)))'
            } : {
                opacity: 0.5
            }
        }));
    // Update edges based on current step
    const edges = allEdges.map((edge)=>({
            ...edge,
            animated: step.activeEdges.includes(edge.id),
            style: {
                ...edge.style,
                opacity: step.activeEdges.includes(edge.id) ? 1 : 0.3
            }
        }));
    const nextStep = ()=>{
        setCurrentStep((prev)=>prev < flowSteps.length - 1 ? prev + 1 : prev);
    };
    const prevStep = ()=>{
        setCurrentStep((prev)=>prev > 0 ? prev - 1 : prev);
    };
    const reset = ()=>{
        setCurrentStep(0);
        setIsPlaying(false);
    };
    // Auto-play functionality
    const togglePlay = ()=>{
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            const interval = setInterval(()=>{
                setCurrentStep((prev)=>{
                    if (prev >= flowSteps.length - 1) {
                        setIsPlaying(false);
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-lg",
                                children: "DRM License Acquisition Flow"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                children: [
                                    "Step ",
                                    currentStep + 1,
                                    " of ",
                                    flowSteps.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-4 bg-muted/50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-foreground",
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-1",
                                    children: step.description
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowDiagram"], {
                            nodes: nodes,
                            edges: edges,
                            interactive: false,
                            showControls: false,
                            showMiniMap: false,
                            animatedEdges: false,
                            className: "h-[400px]"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: reset,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                "Reset"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: togglePlay,
                                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Pause"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Auto Play"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: prevStep,
                                            disabled: currentStep === 0,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: nextStep,
                                            disabled: currentStep === flowSteps.length - 1,
                                            children: [
                                                "Next",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-1 mt-4",
                            children: flowSteps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentStep(index),
                                    className: `w-2 h-2 rounded-full transition-all ${index === currentStep ? 'bg-primary w-4' : index < currentStep ? 'bg-primary/50' : 'bg-muted'}`
                                }, index, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_s(LicenseFlowDiagram, "dmJk/CCYQcmTjoYe8grFLyYDrRk=");
_c = LicenseFlowDiagram;
var _c;
__turbopack_context__.k.register(_c, "LicenseFlowDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecurityLevelsDiagram",
    ()=>SecurityLevelsDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldX$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield-x.js [app-client] (ecmascript) <export default as ShieldX>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const securityLevels = [
    {
        id: 'l1',
        label: 'L1 - Hardware TEE',
        description: 'Highest security with hardware-based trusted execution environment',
        color: 'green',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "h-5 w-5 text-green-500"
        }, void 0, false, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            'Hardware-isolated secure enclave',
            'Encrypted key storage in silicon',
            'Secure video path to display',
            'Hardware attestation',
            '4K/HDR content allowed'
        ],
        vulnerabilities: [
            'Physical hardware attacks (costly)',
            'Side-channel attacks (rare)',
            'Zero-day in TEE firmware'
        ],
        nodes: [
            {
                id: 'app',
                type: 'drm',
                position: {
                    x: 50,
                    y: 150
                },
                data: {
                    label: 'Application',
                    description: 'Untrusted user space',
                    type: 'client'
                }
            },
            {
                id: 'os',
                type: 'drm',
                position: {
                    x: 250,
                    y: 150
                },
                data: {
                    label: 'OS Kernel',
                    description: 'Normal world',
                    type: 'client'
                }
            },
            {
                id: 'tee',
                type: 'drm',
                position: {
                    x: 450,
                    y: 150
                },
                data: {
                    label: 'TEE',
                    description: 'TrustZone / SGX',
                    type: 'defense'
                }
            },
            {
                id: 'cdm',
                type: 'drm',
                position: {
                    x: 450,
                    y: 280
                },
                data: {
                    label: 'CDM',
                    description: 'Runs inside TEE',
                    type: 'key'
                }
            },
            {
                id: 'keys',
                type: 'drm',
                position: {
                    x: 650,
                    y: 280
                },
                data: {
                    label: 'Key Store',
                    description: 'Hardware-protected',
                    type: 'key'
                }
            },
            {
                id: 'decoder',
                type: 'drm',
                position: {
                    x: 250,
                    y: 280
                },
                data: {
                    label: 'Secure Decoder',
                    description: 'Protected video path',
                    type: 'defense'
                }
            },
            {
                id: 'display',
                type: 'drm',
                position: {
                    x: 50,
                    y: 280
                },
                data: {
                    label: 'Display',
                    description: 'HDCP protected',
                    type: 'content'
                }
            }
        ],
        edges: [
            {
                id: 'app-os',
                source: 'app',
                target: 'os',
                label: 'System call'
            },
            {
                id: 'os-tee',
                source: 'os',
                target: 'tee',
                label: 'Secure monitor'
            },
            {
                id: 'tee-cdm',
                source: 'tee',
                target: 'cdm',
                label: 'Isolated execution'
            },
            {
                id: 'cdm-keys',
                source: 'cdm',
                target: 'keys',
                label: 'Hardware access'
            },
            {
                id: 'cdm-decoder',
                source: 'cdm',
                target: 'decoder',
                label: 'Encrypted stream'
            },
            {
                id: 'decoder-display',
                source: 'decoder',
                target: 'display',
                label: 'Protected path'
            }
        ]
    },
    {
        id: 'l2',
        label: 'L2 - Software TEE',
        description: 'Software-based secure execution with hardware key storage',
        color: 'yellow',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
            className: "h-5 w-5 text-yellow-500"
        }, void 0, false, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            'Software-based secure environment',
            'Hardware key storage only',
            'Decryption in software',
            'Limited to 720p/1080p typically'
        ],
        vulnerabilities: [
            'Memory dumping attacks',
            'Debugger-based extraction',
            'Software CDM reverse engineering',
            'Rooted/jailbroken devices'
        ],
        nodes: [
            {
                id: 'app',
                type: 'drm',
                position: {
                    x: 50,
                    y: 150
                },
                data: {
                    label: 'Application',
                    description: 'User space',
                    type: 'client'
                }
            },
            {
                id: 'cdm',
                type: 'drm',
                position: {
                    x: 250,
                    y: 150
                },
                data: {
                    label: 'CDM',
                    description: 'Software (obfuscated)',
                    type: 'key'
                }
            },
            {
                id: 'keybox',
                type: 'drm',
                position: {
                    x: 450,
                    y: 150
                },
                data: {
                    label: 'Hardware Keybox',
                    description: 'Device keys in HW',
                    type: 'defense'
                }
            },
            {
                id: 'memory',
                type: 'drm',
                position: {
                    x: 250,
                    y: 280
                },
                data: {
                    label: 'RAM',
                    description: 'Decrypted content (vulnerable)',
                    type: 'content'
                }
            },
            {
                id: 'attacker',
                type: 'drm',
                position: {
                    x: 450,
                    y: 280
                },
                data: {
                    label: 'Attack Surface',
                    description: 'Memory dump possible',
                    type: 'attacker'
                }
            },
            {
                id: 'display',
                type: 'drm',
                position: {
                    x: 50,
                    y: 280
                },
                data: {
                    label: 'Display',
                    description: 'HDCP (if available)',
                    type: 'content'
                }
            }
        ],
        edges: [
            {
                id: 'app-cdm',
                source: 'app',
                target: 'cdm',
                label: 'API call'
            },
            {
                id: 'cdm-keybox',
                source: 'cdm',
                target: 'keybox',
                label: 'Key retrieval'
            },
            {
                id: 'cdm-memory',
                source: 'cdm',
                target: 'memory',
                label: 'Decrypt to RAM',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'memory-attacker',
                source: 'memory',
                target: 'attacker',
                label: 'Vulnerable!',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'memory-display',
                source: 'memory',
                target: 'display',
                label: 'Unprotected'
            }
        ]
    },
    {
        id: 'l3',
        label: 'L3 - Software Only',
        description: 'Fully software-based with no hardware protection',
        color: 'red',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldX$3e$__["ShieldX"], {
            className: "h-5 w-5 text-red-500"
        }, void 0, false, {
            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            'Runs entirely in software',
            'Keys stored in software',
            'Easy to deploy/update',
            'Limited to SD content'
        ],
        vulnerabilities: [
            'Full CDM reverse engineering',
            'Key extraction trivial',
            'No hardware binding',
            'Emulator/VM attacks',
            'Tools like pywidevine exploit this'
        ],
        nodes: [
            {
                id: 'app',
                type: 'drm',
                position: {
                    x: 50,
                    y: 150
                },
                data: {
                    label: 'Application',
                    description: 'Browser/App',
                    type: 'client'
                }
            },
            {
                id: 'cdm',
                type: 'drm',
                position: {
                    x: 250,
                    y: 150
                },
                data: {
                    label: 'Software CDM',
                    description: 'No protection',
                    type: 'attacker'
                }
            },
            {
                id: 'keys',
                type: 'drm',
                position: {
                    x: 450,
                    y: 150
                },
                data: {
                    label: 'Software Keys',
                    description: 'Extractable',
                    type: 'attacker'
                }
            },
            {
                id: 'pywidevine',
                type: 'drm',
                position: {
                    x: 450,
                    y: 280
                },
                data: {
                    label: 'pywidevine',
                    description: 'Extraction tool',
                    type: 'attacker'
                }
            },
            {
                id: 'content',
                type: 'drm',
                position: {
                    x: 250,
                    y: 280
                },
                data: {
                    label: 'Decrypted Content',
                    description: 'Fully exposed',
                    type: 'attacker'
                }
            },
            {
                id: 'redistribution',
                type: 'drm',
                position: {
                    x: 50,
                    y: 280
                },
                data: {
                    label: 'Piracy',
                    description: 'Content leaked',
                    type: 'attacker'
                }
            }
        ],
        edges: [
            {
                id: 'app-cdm',
                source: 'app',
                target: 'cdm',
                label: 'No isolation'
            },
            {
                id: 'cdm-keys',
                source: 'cdm',
                target: 'keys',
                label: 'SW storage',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'keys-pywidevine',
                source: 'keys',
                target: 'pywidevine',
                label: 'Extract',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'pywidevine-content',
                source: 'pywidevine',
                target: 'content',
                label: 'Decrypt',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'content-redistribution',
                source: 'content',
                target: 'redistribution',
                label: 'Share',
                style: {
                    stroke: '#ef4444'
                }
            }
        ]
    }
];
function SecurityLevelsDiagram() {
    _s();
    const [activeLevel, setActiveLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('l1');
    const level = securityLevels.find((l)=>l.id === activeLevel);
    const colorClasses = {
        green: 'border-green-500/50 bg-green-500/5',
        yellow: 'border-yellow-500/50 bg-yellow-500/5',
        red: 'border-red-500/50 bg-red-500/5'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex items-center gap-2",
                    children: [
                        "Widevine Security Levels",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "ml-auto",
                            children: "Interactive"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    value: activeLevel,
                    onValueChange: setActiveLevel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "grid w-full grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "l1",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "h-4 w-4 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        "L1"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "l2",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            className: "h-4 w-4 text-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        "L2"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "l3",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldX$3e$__["ShieldX"], {
                                            className: "h-4 w-4 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        "L3"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        securityLevels.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: config.id,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg border ${colorClasses[config.color]}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: [
                                                    config.icon,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold",
                                                        children: config.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: config.description
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowDiagram"], {
                                        nodes: config.nodes,
                                        edges: config.edges,
                                        interactive: false,
                                        showControls: false,
                                        className: "h-[350px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-lg border border-green-500/30 bg-green-500/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-green-500 mb-2",
                                                        children: "Security Features"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm space-y-1",
                                                        children: config.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-500",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: feature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-lg border border-red-500/30 bg-red-500/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-red-500 mb-2",
                                                        children: "Vulnerabilities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm space-y-1",
                                                        children: config.vulnerabilities.map((vuln, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "!"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: vuln
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, config.id, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_s(SecurityLevelsDiagram, "k07Z2rVHIyQlHLNtPvPTiwU+uKk=");
_c = SecurityLevelsDiagram;
var _c;
__turbopack_context__.k.register(_c, "SecurityLevelsDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttackVectorsDiagram",
    ()=>AttackVectorsDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/FlowDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/providers/PerspectiveProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const attackVectors = [
    {
        id: 'memory-dump',
        name: 'Memory Dump Attack',
        difficulty: 'medium',
        redTeamDescription: 'Dump process memory during playback to extract decrypted content keys from L2/L3 CDM.',
        blueTeamDescription: 'Detect memory access patterns, implement anti-debugging, use hardware TEE for L1.',
        nodes: [
            {
                id: 'player',
                type: 'drm',
                position: {
                    x: 100,
                    y: 100
                },
                data: {
                    label: 'Video Player',
                    type: 'client'
                }
            },
            {
                id: 'cdm',
                type: 'drm',
                position: {
                    x: 300,
                    y: 100
                },
                data: {
                    label: 'CDM (L2/L3)',
                    type: 'key'
                }
            },
            {
                id: 'memory',
                type: 'drm',
                position: {
                    x: 300,
                    y: 250
                },
                data: {
                    label: 'RAM',
                    description: 'Keys in memory',
                    type: 'content'
                }
            },
            {
                id: 'debugger',
                type: 'drm',
                position: {
                    x: 500,
                    y: 250
                },
                data: {
                    label: 'Debugger',
                    description: 'GDB/LLDB/x64dbg',
                    type: 'attacker'
                }
            },
            {
                id: 'keys',
                type: 'drm',
                position: {
                    x: 500,
                    y: 100
                },
                data: {
                    label: 'Extracted Keys',
                    type: 'attacker'
                }
            }
        ],
        edges: [
            {
                id: 'player-cdm',
                source: 'player',
                target: 'cdm',
                label: 'Decrypt request'
            },
            {
                id: 'cdm-memory',
                source: 'cdm',
                target: 'memory',
                label: 'Keys loaded',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'memory-debugger',
                source: 'memory',
                target: 'debugger',
                label: 'Memory read',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'debugger-keys',
                source: 'debugger',
                target: 'keys',
                label: 'Extract',
                style: {
                    stroke: '#ef4444'
                }
            }
        ]
    },
    {
        id: 'mitm',
        name: 'MITM License Interception',
        difficulty: 'easy',
        redTeamDescription: 'Intercept license requests/responses using proxy. Extract content keys from unencrypted or weakly protected responses.',
        blueTeamDescription: 'Implement TLS pinning, encrypt license payloads end-to-end, validate certificate chains.',
        nodes: [
            {
                id: 'client',
                type: 'drm',
                position: {
                    x: 50,
                    y: 150
                },
                data: {
                    label: 'Client',
                    type: 'client'
                }
            },
            {
                id: 'proxy',
                type: 'drm',
                position: {
                    x: 250,
                    y: 150
                },
                data: {
                    label: 'Attacker Proxy',
                    description: 'mitmproxy/Burp',
                    type: 'attacker'
                }
            },
            {
                id: 'server',
                type: 'drm',
                position: {
                    x: 450,
                    y: 150
                },
                data: {
                    label: 'License Server',
                    type: 'server'
                }
            },
            {
                id: 'capture',
                type: 'drm',
                position: {
                    x: 250,
                    y: 280
                },
                data: {
                    label: 'Captured License',
                    description: 'Contains keys',
                    type: 'attacker'
                }
            }
        ],
        edges: [
            {
                id: 'client-proxy',
                source: 'client',
                target: 'proxy',
                label: 'TLS intercepted',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'proxy-server',
                source: 'proxy',
                target: 'server',
                label: 'Forwarded'
            },
            {
                id: 'proxy-capture',
                source: 'proxy',
                target: 'capture',
                label: 'Copy response',
                style: {
                    stroke: '#ef4444'
                }
            }
        ]
    },
    {
        id: 'cdm-emulation',
        name: 'CDM Emulation',
        difficulty: 'hard',
        redTeamDescription: 'Reverse engineer CDM protocol and create software emulator that impersonates legitimate device.',
        blueTeamDescription: 'Hardware attestation, device binding, frequent protocol updates, behavioral analysis.',
        nodes: [
            {
                id: 'real-cdm',
                type: 'drm',
                position: {
                    x: 50,
                    y: 100
                },
                data: {
                    label: 'Real CDM',
                    description: 'Reference',
                    type: 'client'
                }
            },
            {
                id: 'reversing',
                type: 'drm',
                position: {
                    x: 250,
                    y: 100
                },
                data: {
                    label: 'Reverse Engineering',
                    description: 'IDA Pro/Ghidra',
                    type: 'attacker'
                }
            },
            {
                id: 'fake-cdm',
                type: 'drm',
                position: {
                    x: 450,
                    y: 100
                },
                data: {
                    label: 'Fake CDM',
                    description: 'pywidevine',
                    type: 'attacker'
                }
            },
            {
                id: 'license',
                type: 'drm',
                position: {
                    x: 450,
                    y: 250
                },
                data: {
                    label: 'License Server',
                    type: 'server'
                }
            },
            {
                id: 'keys',
                type: 'drm',
                position: {
                    x: 250,
                    y: 250
                },
                data: {
                    label: 'Decrypted Keys',
                    type: 'attacker'
                }
            }
        ],
        edges: [
            {
                id: 'real-reversing',
                source: 'real-cdm',
                target: 'reversing',
                label: 'Analyze',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'reversing-fake',
                source: 'reversing',
                target: 'fake-cdm',
                label: 'Build clone',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'fake-license',
                source: 'fake-cdm',
                target: 'license',
                label: 'Request license'
            },
            {
                id: 'license-keys',
                source: 'license',
                target: 'keys',
                label: 'Valid response',
                style: {
                    stroke: '#ef4444'
                }
            }
        ]
    },
    {
        id: 'hdcp-strip',
        name: 'HDCP Stripping',
        difficulty: 'easy',
        redTeamDescription: 'Use HDMI splitter/capture card that strips HDCP, allowing recording of decrypted video output.',
        blueTeamDescription: 'Require HDCP 2.2, implement watermarking, detect capture devices via timing analysis.',
        nodes: [
            {
                id: 'player',
                type: 'drm',
                position: {
                    x: 50,
                    y: 150
                },
                data: {
                    label: 'Player Device',
                    description: 'Roku/FireTV',
                    type: 'client'
                }
            },
            {
                id: 'splitter',
                type: 'drm',
                position: {
                    x: 250,
                    y: 150
                },
                data: {
                    label: 'HDMI Splitter',
                    description: 'Strips HDCP',
                    type: 'attacker'
                }
            },
            {
                id: 'capture',
                type: 'drm',
                position: {
                    x: 450,
                    y: 150
                },
                data: {
                    label: 'Capture Card',
                    description: 'Elgato/BlackMagic',
                    type: 'attacker'
                }
            },
            {
                id: 'recording',
                type: 'drm',
                position: {
                    x: 450,
                    y: 280
                },
                data: {
                    label: 'Recording',
                    description: 'Unprotected file',
                    type: 'attacker'
                }
            },
            {
                id: 'tv',
                type: 'drm',
                position: {
                    x: 250,
                    y: 280
                },
                data: {
                    label: 'TV',
                    description: 'Normal viewing',
                    type: 'content'
                }
            }
        ],
        edges: [
            {
                id: 'player-splitter',
                source: 'player',
                target: 'splitter',
                label: 'HDCP signal'
            },
            {
                id: 'splitter-capture',
                source: 'splitter',
                target: 'capture',
                label: 'HDCP stripped',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'capture-recording',
                source: 'capture',
                target: 'recording',
                label: 'Record',
                style: {
                    stroke: '#ef4444'
                }
            },
            {
                id: 'splitter-tv',
                source: 'splitter',
                target: 'tv',
                label: 'Passthrough'
            }
        ]
    }
];
const difficultyColors = {
    easy: 'bg-green-500/10 text-green-500 border-green-500/30',
    medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
    hard: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
    expert: 'bg-red-500/10 text-red-500 border-red-500/30'
};
function AttackVectorsDiagram() {
    _s();
    const [selectedAttack, setSelectedAttack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(attackVectors[0]);
    const { perspective, isRedTeam, isBlueTeam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"])();
    const getDescription = (attack)=>{
        if (isRedTeam) return attack.redTeamDescription;
        if (isBlueTeam) return attack.blueTeamDescription;
        return `${attack.redTeamDescription}\n\nDefense: ${attack.blueTeamDescription}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                isRedTeam ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"], {
                                    className: "h-5 w-5 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this) : isBlueTeam ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-5 w-5 text-cyan-500"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                "Attack Vectors"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            children: perspective === 'red-team' ? 'Attacker View' : perspective === 'blue-team' ? 'Defender View' : 'Observer View'
                        }, void 0, false, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: attackVectors.map((attack)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedAttack.id === attack.id ? 'default' : 'outline',
                                size: "sm",
                                onClick: ()=>setSelectedAttack(attack),
                                className: "gap-2",
                                children: [
                                    attack.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: difficultyColors[attack.difficulty],
                                        children: attack.difficulty
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, attack.id, true, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-lg border ${isRedTeam ? 'border-red-500/30 bg-red-500/5' : isBlueTeam ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-border bg-muted/50'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold mb-2",
                                children: selectedAttack.name
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground whitespace-pre-line",
                                children: getDescription(selectedAttack)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$FlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowDiagram"], {
                        nodes: selectedAttack.nodes,
                        edges: selectedAttack.edges,
                        interactive: false,
                        showControls: false,
                        className: "h-[350px]"
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(AttackVectorsDiagram, "9xLNGZqBimkVjeZX6N6uknrs3vc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$providers$2f$PerspectiveProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePerspective"]
    ];
});
_c = AttackVectorsDiagram;
var _c;
__turbopack_context__.k.register(_c, "AttackVectorsDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiagramsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$LicenseFlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/LicenseFlowDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$SecurityLevelsDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/SecurityLevelsDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$AttackVectorsDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/diagrams/AttackVectorsDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/Projects/Git/drm-security-lab/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
'use client';
;
;
;
;
;
;
;
;
;
;
function DiagramsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                        className: "hidden lg:flex"
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6 lg:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-6xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: "Interactive Diagrams"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "bg-primary/10 text-primary border-primary/30",
                                                    children: "Interactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: "Explore DRM systems through interactive visualizations. Click nodes, step through flows, and switch perspectives to understand both attack and defense scenarios."
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                    defaultValue: "license-flow",
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                            className: "grid w-full grid-cols-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                    value: "license-flow",
                                                    className: "gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 19
                                                        }, this),
                                                        "License Flow"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                    value: "security-levels",
                                                    className: "gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Security Levels"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                    value: "attack-vectors",
                                                    className: "gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Attack Vectors"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "license-flow",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground mb-4",
                                                    children: "Step through the complete DRM license acquisition flow. See how content keys travel from license servers to your device securely."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$LicenseFlowDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LicenseFlowDiagram"], {}, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "security-levels",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground mb-4",
                                                    children: "Compare Widevine L1, L2, and L3 security levels. Understand the trade-offs between security and compatibility."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$SecurityLevelsDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecurityLevelsDiagram"], {}, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "attack-vectors",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground mb-4",
                                                    children: "Explore common attack vectors against DRM systems. Toggle your perspective to see attacker techniques or defender countermeasures."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$diagrams$2f$AttackVectorsDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttackVectorsDiagram"], {}, void 0, false, {
                                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Git$2f$drm$2d$security$2d$lab$2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Git/drm-security-lab/src/app/diagrams/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = DiagramsPage;
var _c;
__turbopack_context__.k.register(_c, "DiagramsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_Git_drm-security-lab_src_bfb418e7._.js.map