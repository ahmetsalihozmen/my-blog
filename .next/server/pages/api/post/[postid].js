"use strict";
(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 4197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7645);

const posts = (0,_src_blog_posts__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    res.json({
        post: posts.find((post)=>post.slug === req.query.postid)
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [645], () => (__webpack_exec__(4197)));
module.exports = __webpack_exports__;

})();