"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/discord-catch";
exports.ids = ["pages/discord-catch"];
exports.modules = {

/***/ "./api/discordApi.ts":
/*!***************************!*\
  !*** ./api/discordApi.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDiscordToken\": () => (/* binding */ getDiscordToken)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// create an axios instance\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://discord.com/api/v10/oauth2\"\n});\n// get discord token with axios\nconst getDiscordToken = async (code)=>{\n    const data = {\n        \"client_id\": process.env.CLIENT_ID,\n        \"client_secret\": process.env.CLIENT_SECRET,\n        \"grant_type\": \"authorization_code\",\n        \"code\": code,\n        redirect_uri: `http://localhost:3000/discord-catch`,\n        scope: \"identify\"\n    };\n    const response = await api.post(\"/token\", data, {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    });\n    return response.data;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZGlzY29yZEFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMxQiwyQkFBMkI7QUFFM0IsTUFBTUMsR0FBRyxHQUFHRCxvREFBWSxDQUFDO0lBQ3ZCRyxPQUFPLEVBQUUsb0NBQW9DO0NBSTlDLENBQUM7QUFFRiwrQkFBK0I7QUFDeEIsTUFBTUMsZUFBZSxHQUFHLE9BQU9DLElBQVksR0FBSztJQUNyRCxNQUFNQyxJQUFJLEdBQUc7UUFDWCxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1FBQ2xDLGVBQWUsRUFBRUYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLGFBQWE7UUFDMUMsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxNQUFNLEVBQUVMLElBQUk7UUFDWk0sWUFBWSxFQUFFLENBQUMsbUNBQW1DLENBQUM7UUFDbkRDLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1aLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDLFFBQVEsRUFBRVIsSUFBSSxFQUFFO1FBQUNTLE9BQU8sRUFBRTtZQUFDLGNBQWMsRUFBRSxtQ0FBbUM7U0FBQztLQUFDLENBQUM7SUFDakgsT0FBT0YsUUFBUSxDQUFDUCxJQUFJLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvcmQtZGVtby1hdXRoLy4vYXBpL2Rpc2NvcmRBcGkudHM/M2RhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBjcmVhdGUgYW4gYXhpb3MgaW5zdGFuY2VcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpL3YxMC9vYXV0aDInLFxuICAvLyBoZWFkZXJzOiB7XG4gIC8vICAgQXV0aG9yaXphdGlvbjogYEJvdCAke3Byb2Nlc3MuZW52LkRJU0NPUkRfQk9UX1RPS0VOfWAsXG4gIC8vIH0sXG59KTtcblxuLy8gZ2V0IGRpc2NvcmQgdG9rZW4gd2l0aCBheGlvc1xuZXhwb3J0IGNvbnN0IGdldERpc2NvcmRUb2tlbiA9IGFzeW5jIChjb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICAnY2xpZW50X2lkJzogcHJvY2Vzcy5lbnYuQ0xJRU5UX0lELFxuICAgICdjbGllbnRfc2VjcmV0JzogcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCxcbiAgICAnZ3JhbnRfdHlwZSc6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICdjb2RlJzogY29kZSxcbiAgICByZWRpcmVjdF91cmk6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGlzY29yZC1jYXRjaGAsXG4gICAgc2NvcGU6ICdpZGVudGlmeScsXG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Rva2VuJywgZGF0YSwge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9fSk7XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJnZXREaXNjb3JkVG9rZW4iLCJjb2RlIiwiZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJDTElFTlRfSUQiLCJDTElFTlRfU0VDUkVUIiwicmVkaXJlY3RfdXJpIiwic2NvcGUiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/discordApi.ts\n");

/***/ }),

/***/ "./api/discordPublicApi.ts":
/*!*********************************!*\
  !*** ./api/discordPublicApi.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDiscordUser\": () => (/* binding */ getDiscordUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// create an axios instance\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://discord.com/api\"\n});\n// get discord user data with axios\nconst getDiscordUser = async (token)=>{\n    const response = await api.get(\"/users/@me\", {\n        headers: {\n            \"Authorization\": `Bearer ${token}`\n        }\n    });\n    return response.data;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZGlzY29yZFB1YmxpY0FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQiwyQkFBMkI7QUFDM0IsTUFBTUMsR0FBRyxHQUFHRCxvREFBWSxDQUFDO0lBQ3ZCRyxPQUFPLEVBQUUseUJBQXlCO0NBQ25DLENBQUM7QUFFRixtQ0FBbUM7QUFDNUIsTUFBTUMsY0FBYyxHQUFHLE9BQU9DLEtBQWEsR0FBSztJQUNyRCxNQUFNQyxRQUFRLEdBQUcsTUFBTUwsR0FBRyxDQUFDTSxHQUFHLENBQUMsWUFBWSxFQUFFO1FBQUNDLE9BQU8sRUFBRTtZQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUgsS0FBSyxDQUFDLENBQUM7U0FBQztLQUFDLENBQUM7SUFDN0YsT0FBT0MsUUFBUSxDQUFDRyxJQUFJLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvcmQtZGVtby1hdXRoLy4vYXBpL2Rpc2NvcmRQdWJsaWNBcGkudHM/NmI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGNyZWF0ZSBhbiBheGlvcyBpbnN0YW5jZVxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpJyxcbn0pO1xuXG4vLyBnZXQgZGlzY29yZCB1c2VyIGRhdGEgd2l0aCBheGlvc1xuZXhwb3J0IGNvbnN0IGdldERpc2NvcmRVc2VyID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMvQG1lJywge2hlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gfX0pO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiZ2V0RGlzY29yZFVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/discordPublicApi.ts\n");

/***/ }),

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"discordApi\": () => (/* reexport module object */ _discordApi__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"discordPublicApi\": () => (/* reexport module object */ _discordPublicApi__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _discordApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discordApi */ \"./api/discordApi.ts\");\n/* harmony import */ var _discordPublicApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordPublicApi */ \"./api/discordPublicApi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_discordApi__WEBPACK_IMPORTED_MODULE_0__, _discordPublicApi__WEBPACK_IMPORTED_MODULE_1__]);\n([_discordApi__WEBPACK_IMPORTED_MODULE_0__, _discordPublicApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY29yZC1kZW1vLWF1dGgvLi9hcGkvaW5kZXgudHM/OWU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBhcyBkaXNjb3JkQXBpIGZyb20gJy4vZGlzY29yZEFwaSc7XG5leHBvcnQgKiBhcyBkaXNjb3JkUHVibGljQXBpIGZyb20gJy4vZGlzY29yZFB1YmxpY0FwaSc7Il0sIm5hbWVzIjpbImRpc2NvcmRBcGkiLCJkaXNjb3JkUHVibGljQXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/index.ts\n");

/***/ }),

/***/ "./pages/discord-catch/index.tsx":
/*!***************************************!*\
  !*** ./pages/discord-catch/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_3__]);\n_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst DiscordCatch = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // get url params\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // validate if is client side\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Discord catch\"\n            }, void 0, false, {\n                fileName: \"/Users/jorgesotomayor/Documents/dev/creatoland/discord-demo-auth/pages/discord-catch/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Code: \",\n                    props.access_token\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorgesotomayor/Documents/dev/creatoland/discord-demo-auth/pages/discord-catch/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorgesotomayor/Documents/dev/creatoland/discord-demo-auth/pages/discord-catch/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscordCatch);\nconst getServerSideProps = async ({ params , query  })=>{\n    let code = query === null || query === void 0 ? void 0 : query.code;\n    // validate if code is array and take first\n    if (Array.isArray(code)) {\n        code = code[0];\n    }\n    const res = await _api__WEBPACK_IMPORTED_MODULE_3__.discordApi.getDiscordToken(code || \"\");\n    return {\n        props: {\n            ...res\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaXNjb3JkLWNhdGNoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUVjO0FBQ0Q7QUFVdkMsTUFBTUcsWUFBWSxHQUFvQixDQUFDQyxLQUFZLEdBQUs7SUFDdEQsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLGlCQUFpQjtJQUNqQkQsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLDZCQUE2QjtRQUM3QixJQUFJLEtBQTZCLEVBQUUsRUFNbEM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ2EsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsZUFBYTs7Ozs7eUJBQUs7MEJBQ3RCLDhEQUFDQyxHQUFDOztvQkFBQyxRQUFNO29CQUFDWCxLQUFLLENBQUNHLFlBQVk7Ozs7Ozt5QkFBSzs7Ozs7O2lCQUM3QixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlSixZQUFZLEVBQUM7QUFFckIsTUFBTWEsa0JBQWtCLEdBQXVCLE9BQU8sRUFBRUMsTUFBTSxHQUFFQyxLQUFLLEdBQUUsR0FBSztJQUNqRixJQUFJQyxJQUFJLEdBQUdELEtBQUssYUFBTEEsS0FBSyxXQUFNLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsS0FBSyxDQUFFQyxJQUFJO0lBQ3RCLDJDQUEyQztJQUMzQyxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLEVBQUU7UUFDdkJBLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNRyxHQUFHLEdBQUcsTUFBTXBCLDREQUEwQixDQUFDaUIsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUV4RCxPQUFPO1FBQ0xmLEtBQUssRUFBRTtZQUFFLEdBQUdrQixHQUFHO1NBQUU7S0FDbEIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjb3JkLWRlbW8tYXV0aC8uL3BhZ2VzL2Rpc2NvcmQtY2F0Y2gvaW5kZXgudHN4P2MxYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZGlzY29yZEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcblxuaW50ZXJmYWNlIFByb3Bze1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgZXhwaXJlc19pbjogbnVtYmVyLFxuICByZWZyZXNoX3Rva2VuOiBzdHJpbmcsXG4gIHNjb3BlOiBzdHJpbmcsXG4gIHRva2VuX3R5cGU6IHN0cmluZ1xufVxuXG5jb25zdCBEaXNjb3JkQ2F0Y2g6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGdldCB1cmwgcGFyYW1zXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdmFsaWRhdGUgaWYgaXMgY2xpZW50IHNpZGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gc2F2ZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGlmIChwcm9wcy5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkaXNjb3JkX3Rva2VuX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkRpc2NvcmQgY2F0Y2g8L2gxPlxuICAgICAgPHA+Q29kZToge3Byb3BzLmFjY2Vzc190b2tlbn08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzY29yZENhdGNoO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMsIHF1ZXJ5IH0pID0+IHtcbiAgbGV0IGNvZGUgPSBxdWVyeT8uY29kZTtcbiAgLy8gdmFsaWRhdGUgaWYgY29kZSBpcyBhcnJheSBhbmQgdGFrZSBmaXJzdFxuICBpZiAoQXJyYXkuaXNBcnJheShjb2RlKSkge1xuICAgIGNvZGUgPSBjb2RlWzBdO1xuICB9XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGRpc2NvcmRBcGkuZ2V0RGlzY29yZFRva2VuKGNvZGUgfHwgJycpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgLi4ucmVzIH0sXG4gIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiZGlzY29yZEFwaSIsIkRpc2NvcmRDYXRjaCIsInByb3BzIiwicm91dGVyIiwidXNlRWZmZWN0IiwiYWNjZXNzX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiZGl2IiwiaDEiLCJwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicXVlcnkiLCJjb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzIiwiZ2V0RGlzY29yZFRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/discord-catch/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/discord-catch/index.tsx"));
module.exports = __webpack_exports__;

})();