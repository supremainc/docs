"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3542"], {
48706: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


}),
15713: (function (__unused_webpack_module, exports, __webpack_require__) {

var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ScalarDocusaurus = void 0;
const react_1 = __importStar(__webpack_require__(96540));
const Layout_1 = __importDefault(__webpack_require__(10584));
__webpack_require__(48706);
const ScalarDocusaurus = ({ route })=>{
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(()=>{
        if (!window.Scalar || !ref.current) {
            return;
        }
        // Create a new Scalar API Reference
        window.Scalar.createApiReference(ref.current, {
            ...route.configuration,
            hideDarkModeToggle: true
        });
    }, [
        ref
    ]);
    return react_1.default.createElement(Layout_1.default, null, react_1.default.createElement("div", {
        ref: ref
    }));
};
exports.ScalarDocusaurus = ScalarDocusaurus;
exports["default"] = exports.ScalarDocusaurus;


}),

}]);