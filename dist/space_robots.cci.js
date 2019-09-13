var SpaceRobots =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enums/action.ts":
/*!*****************************!*\
  !*** ./src/enums/action.ts ***!
  \*****************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action["L"] = "L";
    Action["R"] = "R";
    Action["M"] = "M";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_robot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/robot.service */ "./src/services/robot.service.ts");
/* harmony import */ var _models_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/map */ "./src/models/map.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");



var SpaceRobots = /** @class */ (function () {
    function SpaceRobots(width, height) {
        var map = new _models_map__WEBPACK_IMPORTED_MODULE_1__["default"](width, height);
        this.robotService = new _services_robot_service__WEBPACK_IMPORTED_MODULE_0__["default"](map);
    }
    SpaceRobots.prototype.deploy = function (x, y) {
        this.robotService.add(x, y);
    };
    SpaceRobots.prototype.applyActions = function (actions) {
        _utils_index__WEBPACK_IMPORTED_MODULE_2__["default"]
            .SplitActions(actions)
            .forEach(this.robotService.applyAction);
    };
    SpaceRobots.prototype.showState = function () {
        return this.robotService.data;
    };
    return SpaceRobots;
}());
/* harmony default export */ __webpack_exports__["default"] = (SpaceRobots);


/***/ }),

/***/ "./src/models/directions.ts":
/*!**********************************!*\
  !*** ./src/models/directions.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Directions = [
    { label: 'N', values: [1, 0] },
    { label: 'E', values: [0, 1] },
    { label: 'S', values: [-1, 0] },
    { label: 'W', values: [0, -1] },
];
/* harmony default export */ __webpack_exports__["default"] = (Directions);


/***/ }),

/***/ "./src/models/map.ts":
/*!***************************!*\
  !*** ./src/models/map.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Map = /** @class */ (function () {
    function Map(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Map.prototype, "dimensions", {
        get: function () {
            return [this.width, this.height];
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.isInBoundary = function (x, y) {
        return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
    };
    return Map;
}());
/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./src/models/orientation.ts":
/*!***********************************!*\
  !*** ./src/models/orientation.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directions */ "./src/models/directions.ts");

var LEN = _directions__WEBPACK_IMPORTED_MODULE_0__["default"].length;
var Orientation = /** @class */ (function () {
    function Orientation() {
        this._direction = _directions__WEBPACK_IMPORTED_MODULE_0__["default"][0];
        this.sentinel = 0;
    }
    Object.defineProperty(Orientation.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        enumerable: true,
        configurable: true
    });
    Orientation.prototype.rotateLeft = function () {
        this.rotate(-1);
    };
    Orientation.prototype.rotateRight = function () {
        this.rotate(1);
    };
    Orientation.prototype.rotate = function (value) {
        this.sentinel = (value + LEN + this.sentinel) % LEN;
        this._direction = _directions__WEBPACK_IMPORTED_MODULE_0__["default"][this.sentinel];
    };
    return Orientation;
}());
/* harmony default export */ __webpack_exports__["default"] = (Orientation);


/***/ }),

/***/ "./src/models/robot.ts":
/*!*****************************!*\
  !*** ./src/models/robot.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orientation */ "./src/models/orientation.ts");

var Robot = /** @class */ (function () {
    function Robot(x, y) {
        this.x = x;
        this.y = y;
        this.orientation = new _orientation__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Object.defineProperty(Robot.prototype, "position", {
        get: function () {
            return [this.x, this.y];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Robot.prototype, "direction", {
        get: function () {
            return this.orientation.direction;
        },
        enumerable: true,
        configurable: true
    });
    Robot.prototype.rotateLeft = function () {
        this.orientation.rotateLeft();
    };
    Robot.prototype.rotateRight = function () {
        this.orientation.rotateRight();
    };
    Robot.prototype.advance = function () {
        var _a = this.orientation.direction.values, x = _a[0], y = _a[1];
        this.x += x;
        this.y += y;
    };
    Object.defineProperty(Robot.prototype, "previsionalPosition", {
        get: function () {
            var _a = this.orientation.direction.values, x = _a[0], y = _a[1];
            return [
                this.x + x,
                this.y + y
            ];
        },
        enumerable: true,
        configurable: true
    });
    return Robot;
}());
/* harmony default export */ __webpack_exports__["default"] = (Robot);


/***/ }),

/***/ "./src/services/robot.service.ts":
/*!***************************************!*\
  !*** ./src/services/robot.service.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/robot */ "./src/models/robot.ts");
/* harmony import */ var _enums_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/action */ "./src/enums/action.ts");


var RobotService = /** @class */ (function () {
    function RobotService(map) {
        this.map = map;
        this.robots = [];
    }
    RobotService.prototype.add = function (x, y) {
        if (this.hasRobotAt(x, y) || !this.map.isInBoundary(x, y)) {
            throw new Error("Cannot deploy robot");
        }
        this.robots.push(new _models_robot__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
    };
    RobotService.prototype.hasRobotAt = function (x, y) {
        return this
            .robots
            .findIndex(function (robot) {
            var _a = robot.position, xr = _a[0], yr = _a[1];
            return xr === x && yr === y;
        }) > -1;
    };
    RobotService.prototype.applyAction = function (action) {
        var robot = this.currentRobot;
        if (!robot) {
            throw new Error("No available robot");
        }
        switch (action) {
            case _enums_action__WEBPACK_IMPORTED_MODULE_1__["Action"].L:
                robot.rotateLeft();
                break;
            case _enums_action__WEBPACK_IMPORTED_MODULE_1__["Action"].R:
                robot.rotateRight();
                break;
            case _enums_action__WEBPACK_IMPORTED_MODULE_1__["Action"].M:
                var _a = robot.previsionalPosition, x = _a[0], y = _a[1];
                if (this.hasRobotAt(x, y)) {
                    throw new Error("Robot cannot advance, another robot is already there !");
                }
                robot.advance();
                break;
            default:
                throw new Error("Unexpected action");
        }
    };
    Object.defineProperty(RobotService.prototype, "data", {
        get: function () {
            return this.robots.map(function (robot) {
                var _a = robot.position, x = _a[0], y = _a[1];
                var label = robot.direction.label;
                return { x: x, y: y, label: label };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RobotService.prototype, "currentRobot", {
        get: function () {
            return this.robots[this.robots.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    return RobotService;
}());
/* harmony default export */ __webpack_exports__["default"] = (RobotService);


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action */ "./src/enums/action.ts");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.SplitActions = function (actions) {
        return actions
            .toUpperCase()
            .split("")
            .map(function (action) {
            switch (action) {
                case _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].L: return _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].L;
                case _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].R: return _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].R;
                case _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].M: return _enums_action__WEBPACK_IMPORTED_MODULE_0__["Action"].M;
                default:
                    throw new Error("Unexpected action");
            }
        });
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TcGFjZVJvYm90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TcGFjZVJvYm90cy8uL3NyYy9lbnVtcy9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vU3BhY2VSb2JvdHMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU3BhY2VSb2JvdHMvLi9zcmMvbW9kZWxzL2RpcmVjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vU3BhY2VSb2JvdHMvLi9zcmMvbW9kZWxzL21hcC50cyIsIndlYnBhY2s6Ly9TcGFjZVJvYm90cy8uL3NyYy9tb2RlbHMvb3JpZW50YXRpb24udHMiLCJ3ZWJwYWNrOi8vU3BhY2VSb2JvdHMvLi9zcmMvbW9kZWxzL3JvYm90LnRzIiwid2VicGFjazovL1NwYWNlUm9ib3RzLy4vc3JjL3NlcnZpY2VzL3JvYm90LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vU3BhY2VSb2JvdHMvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNkLGlCQUFPO0lBQ1AsaUJBQU87SUFDUCxpQkFBTztBQUNYLENBQUMsRUFKVyxNQUFNLEtBQU4sTUFBTSxRQUlqQjs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ3JCO0FBQ0c7QUFFbEM7SUFHSSxxQkFDSSxLQUFhLEVBQ2IsTUFBYztRQUVkLElBQU0sR0FBRyxHQUFHLElBQUksbURBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtEQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE9BQWU7UUFDL0Isb0RBQUs7YUFDQSxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQSxJQUFNLFVBQVUsR0FBZ0I7SUFDNUIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQztJQUMzQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO0lBQzNCLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQztJQUM1QixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7Q0FDL0I7QUFFYyx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVjFCO0FBQUE7SUFDSSxhQUNZLEtBQWEsRUFDYixNQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDeEIsQ0FBQztJQUVILHNCQUFJLDJCQUFVO2FBQWQ7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsMEJBQVksR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1FBRTdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25FLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQW1EO0FBQ2xELElBQU0sR0FBRyxHQUFHLG1EQUFVLENBQUMsTUFBTSxDQUFDO0FBRS9CO0lBR0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLG1EQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLGtDQUFTO2FBQWI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU8sNEJBQU0sR0FBZCxVQUFlLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLG1EQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQUE7QUFBd0M7QUFHeEM7SUFHSSxlQUNZLENBQVMsRUFDVCxDQUFTO1FBRFQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFFakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG9EQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0JBQUksMkJBQVE7YUFBWjtZQUVJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFTO2FBQWI7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMEJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBQ3NCLDBDQUFZLEVBQUosU0FBQyxFQUFDLFNBQUUsQ0FBc0I7UUFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUksc0NBQW1CO2FBQXZCO1lBRXNCLDBDQUFZLEVBQUosU0FBQyxFQUFDLFNBQUUsQ0FBc0I7WUFDcEQsT0FBTztnQkFDSCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ2I7UUFDTCxDQUFDOzs7T0FBQTtJQUNMLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdDRDtBQUFBO0FBQUE7QUFBb0M7QUFFSztBQUV6QztJQUVJLHNCQUNZLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBRWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksQ0FBUyxFQUFFLENBQVM7UUFDcEIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQztZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHFEQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUztRQUUzQixPQUFPLElBQUk7YUFDTixNQUFNO2FBQ04sU0FBUyxDQUFDLGVBQUs7WUFDTix1QkFBeUIsRUFBeEIsVUFBRSxFQUFFLFVBQW9CLENBQUM7WUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBRyxDQUFDLEtBQUssRUFBQztZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN6QztRQUNELFFBQU8sTUFBTSxFQUFDO1lBQ1YsS0FBSyxvREFBTSxDQUFDLENBQUM7Z0JBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU07WUFDekMsS0FBSyxvREFBTSxDQUFDLENBQUM7Z0JBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU07WUFDMUMsS0FBSyxvREFBTSxDQUFDLENBQUM7Z0JBQ0gsa0NBQWlDLEVBQWhDLFNBQUMsRUFBQyxTQUE4QixDQUFDO2dCQUN4QyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO29CQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDO2lCQUM1RTtnQkFDRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07WUFDVjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDhCQUFJO2FBQVI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQUs7Z0JBQ2xCLHVCQUFzQixFQUFyQixTQUFDLEVBQUMsU0FBbUIsQ0FBQztnQkFDdEIsaUNBQUssQ0FBb0I7Z0JBQ2hDLE9BQU8sRUFBQyxDQUFDLEtBQUMsQ0FBQyxLQUFDLEtBQUssU0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQVk7YUFBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFDTCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDOUREO0FBQUE7QUFBeUM7QUFFekM7SUFBQTtJQWdCQSxDQUFDO0lBZlUsa0JBQVksR0FBbkIsVUFBb0IsT0FBZTtRQUUvQixPQUFPLE9BQU87YUFDVCxXQUFXLEVBQUU7YUFDYixLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ1QsR0FBRyxDQUFDLGdCQUFNO1lBQ1AsUUFBTyxNQUFNLEVBQUM7Z0JBQ1YsS0FBSyxvREFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sb0RBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssb0RBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLG9EQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLG9EQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxvREFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0I7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUMzQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InNwYWNlX3JvYm90cy5jY2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlxuZXhwb3J0IGVudW0gQWN0aW9uIHtcbiAgICBMID0gJ0wnLFxuICAgIFIgPSAnUicsXG4gICAgTSA9ICdNJ1xufSIsImltcG9ydCBSb2JvdFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvcm9ib3Quc2VydmljZVwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi9tb2RlbHMvbWFwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2VSb2JvdHMge1xuXG4gICAgcHJpdmF0ZSByb2JvdFNlcnZpY2U6IFJvYm90U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgd2lkdGg6IG51bWJlcixcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgKXtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yb2JvdFNlcnZpY2UgPSBuZXcgUm9ib3RTZXJ2aWNlKG1hcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlcGxveSh4OiBudW1iZXIsIHk6IG51bWJlcil7XG4gICAgICAgIHRoaXMucm9ib3RTZXJ2aWNlLmFkZCh4LHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseUFjdGlvbnMoYWN0aW9uczogc3RyaW5nKXtcbiAgICAgICAgVXRpbHNcbiAgICAgICAgICAgIC5TcGxpdEFjdGlvbnMoYWN0aW9ucylcbiAgICAgICAgICAgIC5mb3JFYWNoKHRoaXMucm9ib3RTZXJ2aWNlLmFwcGx5QWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1N0YXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJvYm90U2VydmljZS5kYXRhO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uIHtsYWJlbDogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxuXG5jb25zdCBEaXJlY3Rpb25zOiBEaXJlY3Rpb25bXSA9IFtcbiAgICB7bGFiZWw6ICdOJywgdmFsdWVzOiBbMSwwXX0sXG4gICAge2xhYmVsOiAnRScsIHZhbHVlczogWzAsMV19LFxuICAgIHtsYWJlbDogJ1MnLCB2YWx1ZXM6IFstMSwwXX0sXG4gICAge2xhYmVsOiAnVycsIHZhbHVlczogWzAsLTFdfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uczsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcbiAgICApe31cblxuICAgIGdldCBkaW1lbnNpb25zKCl7XG4gICAgICAgIHJldHVybiBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdXG4gICAgfVxuXG4gICAgaXNJbkJvdW5kYXJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IHRoaXMud2lkdGggJiYgeSA+PSAwICYmIHkgPD0gdGhpcy5oZWlnaHQ7XG4gICAgfVxufSIsImltcG9ydCBEaXJlY3Rpb25zLCB7RGlyZWN0aW9ufSBmcm9tIFwiLi9kaXJlY3Rpb25zXCI7XG4gY29uc3QgTEVOID0gRGlyZWN0aW9ucy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yaWVudGF0aW9uIHtcbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjsgXG4gICAgcHJpdmF0ZSBzZW50aW5lbDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IERpcmVjdGlvbnNbMF07XG4gICAgICAgIHRoaXMuc2VudGluZWwgPSAwO1xuICAgIH1cblxuICAgIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHJvdGF0ZUxlZnQoKXtcbiAgICAgICAgdGhpcy5yb3RhdGUoLTEpO1xuICAgIH1cblxuICAgIHJvdGF0ZVJpZ2h0KCl7XG4gICAgICAgIHRoaXMucm90YXRlKDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm90YXRlKHZhbHVlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLnNlbnRpbmVsID0gKHZhbHVlICsgTEVOICsgdGhpcy5zZW50aW5lbCkgJSBMRU47XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IERpcmVjdGlvbnNbdGhpcy5zZW50aW5lbF07XG4gICAgfVxuXG59IiwiaW1wb3J0IE9yaWVudGF0aW9uIGZyb20gXCIuL29yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tIFwiLi9kaXJlY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvYm90IHtcblxuICAgIHByaXZhdGUgb3JpZW50YXRpb246IE9yaWVudGF0aW9uO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHg6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSB5OiBudW1iZXJcbiAgICApe1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gbmV3IE9yaWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCk6IG51bWJlcltdXG4gICAge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9XG5cbiAgICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24uZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHJvdGF0ZUxlZnQoKXtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbi5yb3RhdGVMZWZ0KCk7XG4gICAgfVxuXG4gICAgcm90YXRlUmlnaHQoKXtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbi5yb3RhdGVSaWdodCgpO1xuICAgIH1cblxuICAgIGFkdmFuY2UoKXtcbiAgICAgICAgY29uc3Qge2RpcmVjdGlvbjp7dmFsdWVzOlt4LHldfX0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnggKz0geDtcbiAgICAgICAgdGhpcy55ICs9IHk7XG4gICAgfVxuXG4gICAgZ2V0IHByZXZpc2lvbmFsUG9zaXRpb24oKTogbnVtYmVyW11cbiAgICB7XG4gICAgICAgIGNvbnN0IHtkaXJlY3Rpb246e3ZhbHVlczpbeCx5XX19ID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMueCArIHgsXG4gICAgICAgICAgICB0aGlzLnkgKyB5XG4gICAgICAgIF1cbiAgICB9XG59IiwiaW1wb3J0IFJvYm90IGZyb20gXCIuLi9tb2RlbHMvcm9ib3RcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4uL21vZGVscy9tYXBcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCIuLi9lbnVtcy9hY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9ib3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJvYm90czogUm9ib3RbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtYXA6IE1hcFxuICAgICl7XG4gICAgICAgIHRoaXMucm9ib3RzID0gW107XG4gICAgfVxuXG4gICAgYWRkKHg6IG51bWJlciwgeTogbnVtYmVyKXtcbiAgICAgICAgaWYodGhpcy5oYXNSb2JvdEF0KHgseSkgfHwgIXRoaXMubWFwLmlzSW5Cb3VuZGFyeSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBkZXBsb3kgcm9ib3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb2JvdHMucHVzaChuZXcgUm9ib3QoeCx5KSk7XG4gICAgfVxuXG4gICAgaGFzUm9ib3RBdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAucm9ib3RzXG4gICAgICAgICAgICAuZmluZEluZGV4KHJvYm90PT57XG4gICAgICAgICAgICAgICAgY29uc3QgW3hyLCB5cl0gPSByb2JvdC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4geHIgPT09IHggJiYgeXIgPT09IHk7XG4gICAgICAgICAgICB9KSA+IC0xO1xuICAgIH1cblxuICAgIGFwcGx5QWN0aW9uKGFjdGlvbjogQWN0aW9uKXtcbiAgICAgICAgY29uc3Qgcm9ib3QgPSB0aGlzLmN1cnJlbnRSb2JvdDtcbiAgICAgICAgaWYoIXJvYm90KXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGF2YWlsYWJsZSByb2JvdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goYWN0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLkw6IHJvYm90LnJvdGF0ZUxlZnQoKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvbi5SOiByb2JvdC5yb3RhdGVSaWdodCgpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLk06XG4gICAgICAgICAgICAgICAgY29uc3QgW3gseV0gPSByb2JvdC5wcmV2aXNpb25hbFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaGFzUm9ib3RBdCh4LHkpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUm9ib3QgY2Fubm90IGFkdmFuY2UsIGFub3RoZXIgcm9ib3QgaXMgYWxyZWFkeSB0aGVyZSAhXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvYm90LmFkdmFuY2UoKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgYWN0aW9uXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGF0YSgpOiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIGxhYmVsOiBzdHJpbmd9W11cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvYm90cy5tYXAocm9ib3Q9PntcbiAgICAgICAgICAgIGNvbnN0IFt4LHldID0gcm9ib3QucG9zaXRpb247XG4gICAgICAgICAgICBjb25zdCB7bGFiZWx9ID0gcm9ib3QuZGlyZWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHt4LHksbGFiZWx9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50Um9ib3QoKTogUm9ib3QgXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yb2JvdHNbdGhpcy5yb2JvdHMubGVuZ3RoLTFdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiLi4vZW51bXMvYWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgU3BsaXRBY3Rpb25zKGFjdGlvbnM6IHN0cmluZyk6IEFjdGlvbltdXG4gICAge1xuICAgICAgICByZXR1cm4gYWN0aW9uc1xuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLm1hcChhY3Rpb249PntcbiAgICAgICAgICAgICAgICBzd2l0Y2goYWN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBY3Rpb24uTDogcmV0dXJuIEFjdGlvbi5MO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEFjdGlvbi5SOiByZXR1cm4gQWN0aW9uLlI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQWN0aW9uLk06IHJldHVybiBBY3Rpb24uTTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=