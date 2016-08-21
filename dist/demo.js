/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SET_SELECTED_COMMON_NAME = exports.SET_SELECTED_COMMON_NAME = 'SET_SELECTED_COMMON_NAME';
	var setSelectedCommonName = exports.setSelectedCommonName = function setSelectedCommonName(name) {
	    return {
	        type: SET_SELECTED_COMMON_NAME,
	        name: name
	    };
	};

	var CHANGE_LENGTH = exports.CHANGE_LENGTH = 'CHANGE_LENGTH';
	var changeLength = exports.changeLength = function changeLength(amount) {
	    return {
	        type: CHANGE_LENGTH,
	        amount: amount
	    };
	};

	var SET_OUTPUT_TYPE = exports.SET_OUTPUT_TYPE = 'SET_OUTPUT_TYPE';
	var setOutputType = exports.setOutputType = function setOutputType(outputType) {
	    return {
	        type: SET_OUTPUT_TYPE,
	        outputType: outputType
	    };
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TYPES = undefined;

	var _register, _register2, _register3, _register4, _register5, _register6, _register7, _register8, _register9;

	exports.get = get;
	exports.getAll = getAll;
	exports.register = register;

	var _shrugapillar = __webpack_require__(10);

	var _shrugapillar2 = _interopRequireDefault(_shrugapillar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var SHRUGAPILLAR_DEFINITIONS = [];

	var TYPES = exports.TYPES = _shrugapillar2.default.TYPES;

	/**
	 * Renders a Shrugapillar based on the provided name.
	 *
	 * @param {string} options.name= Either the commonName or the species of the
	 *      shrugapillar to get.
	 *
	 * @return {Shrugapillar}
	 */
	function get(name) {
	    name = name.toLowerCase();

	    var def = SHRUGAPILLAR_DEFINITIONS.find(function (def) {
	        return def.commonName.toLowerCase() === name || def.species.toLowerCase() === name;
	    });

	    return def ? new _shrugapillar2.default(def) : null;
	}

	/**
	 * Returns all registered Shrugapillars.
	 *
	 * @return {Array.<Shrugapillar>} Array of Shrugapillars.
	 */
	function getAll() {
	    return SHRUGAPILLAR_DEFINITIONS.map(function (def) {
	        return new _shrugapillar2.default(def);
	    });
	}

	/**
	 * Register the provided shrugapillars.
	 *
	 * @param {...Object} args Shrugapillar objects.
	 */
	function register() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    args.forEach(function (shrugapillar) {
	        // TODO(ndrwhr): validate incoming shrugapillar.
	        SHRUGAPILLAR_DEFINITIONS.push(Object.assign({}, {
	            regnum: 'Mememalia',
	            phylum: 'Arthropoda',
	            classis: 'Insecta',
	            ordo: 'Lepidoptera',
	            familia: 'Nymphalidae',
	            genus: 'Depulso'
	        }, shrugapillar));
	    });
	}

	register((_register = {
	    species: 'marcinekae',
	    commonName: 'Shrugapillar',
	    description: 'Your garden variety shrugapillar. Its discovery in 2016 by Kait Marcinekae prompted a flurry of discoveries of other organisms in the Mememalia kingdom.'
	}, _defineProperty(_register, TYPES.PLAIN, {
	    antennae: '    ᕙ  ᕗ',
	    head: '¯\\_(ツ)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(__)_/¯'
	}), _defineProperty(_register, TYPES.TWITTER, {
	    antennae: '  ᕙ  ᕗ',
	    head: '¯\\_(ツ)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(__)_/¯'
	}), _defineProperty(_register, TYPES.MONO, {
	    antennae: '   ᕙ ᕗ',
	    head: '¯\\_(ツ)_/¯',
	    body: '¯\\_(  )_/¯',
	    booty: '¯\\_(__)_/¯'
	}), _defineProperty(_register, TYPES.SLACK, {
	    antennae: '   ᕙ  ᕗ',
	    head: '¯\\_(ツ)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(__)_/¯'
	}), _register), (_register2 = {
	    species: 'inflatus',
	    commonName: 'Smugapillar'
	}, _defineProperty(_register2, TYPES.PLAIN, {
	    antennae: '    ᕙ     ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register2, TYPES.TWITTER, {
	    antennae: '   ᕙ       ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register2, TYPES.MONO, {
	    antennae: '   ᕙ  ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(   )_/¯',
	    booty: '¯\\_(___)_/¯'
	}), _defineProperty(_register2, TYPES.SLACK, {
	    antennae: '    ᕙ   ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _register2), (_register3 = {
	    species: 'incertus',
	    commonName: 'Unsureapillar'
	}, _defineProperty(_register3, TYPES.PLAIN, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍˍ)_/¯'
	}), _defineProperty(_register3, TYPES.TWITTER, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍˍ)_/¯'
	}), _defineProperty(_register3, TYPES.MONO, {
	    antennae: '   ᕙ  ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(   )_/¯',
	    booty: '¯\\_(___)_/¯'
	}), _defineProperty(_register3, TYPES.SLACK, {
	    antennae: '    ᕙ  ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍ)_/¯'
	}), _register3), (_register4 = {
	    species: 'ignavia',
	    commonName: 'Apathetapillar'
	}, _defineProperty(_register4, TYPES.PLAIN, {
	    antennae: '   ᕙ     ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register4, TYPES.TWITTER, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register4, TYPES.MONO, {
	    antennae: '   ᕙ   ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(____)_/¯'
	}), _defineProperty(_register4, TYPES.SLACK, {
	    antennae: '   ᕙ     ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _register4), (_register5 = {
	    species: 'indignati',
	    commonName: 'Indignapillar'
	}, _defineProperty(_register5, TYPES.PLAIN, {
	    antennae: '    ༽     ༼',
	    head: '¯\\_(ಠ_ಠ)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register5, TYPES.TWITTER, {
	    antennae: '    ༽     ༼',
	    head: '¯\\_(ಠ_ಠ)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register5, TYPES.MONO, {
	    antennae: '   ༽   ༼',
	    head: '¯\\_(ಠ_ಠ)_/¯',
	    body: '¯\\_(   )_/¯',
	    booty: '¯\\_(___)_/¯'
	}), _defineProperty(_register5, TYPES.SLACK, {
	    antennae: '    ༽      ༼',
	    head: '¯\\_(ಠ_ಠ)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _register5), (_register6 = {
	    species: 'contentus',
	    commonName: 'Contentapillar'
	}, _defineProperty(_register6, TYPES.PLAIN, {
	    antennae: '     ᕙ     ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register6, TYPES.TWITTER, {
	    antennae: '     ᕙ     ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register6, TYPES.MONO, {
	    antennae: '   ᕙ   ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(____)_/¯'
	}), _defineProperty(_register6, TYPES.SLACK, {
	    antennae: '     ᕙ      ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(           )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍ)_/¯'
	}), _register6), (_register7 = {
	    species: 'exasperentur',
	    commonName: 'Desuapillar'
	}, _defineProperty(_register7, TYPES.PLAIN, {
	    antennae: '    ᕙ       ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register7, TYPES.TWITTER, {
	    antennae: '    ᕙ            ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(                 )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register7, TYPES.MONO, {
	    antennae: '   ᕙ       ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(_______)_/¯'
	}), _defineProperty(_register7, TYPES.SLACK, {
	    antennae: '   ᕙ          ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(            )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _register7), (_register8 = {
	    species: 'omnipotentem',
	    commonName: 'Illumipillar',
	    description: 'The illumipillar knows all. Sees all. But doesn\'t care. lol.'
	}, _defineProperty(_register8, TYPES.PLAIN, {
	    antennae: '   ᕙ   ᕗ',
	    head: '¯\\_(👁)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍˍ)_/¯'
	}), _defineProperty(_register8, TYPES.TWITTER, {
	    antennae: '   ᕙ   ᕗ',
	    head: '¯\\_(👁)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍˍ)_/¯'
	}), _defineProperty(_register8, TYPES.MONO, {
	    antennae: '   ᕙ ᕗ',
	    head: '¯\\_(👁)_/¯',
	    body: '¯\\_(  )_/¯',
	    booty: '¯\\_(__)_/¯'
	}), _defineProperty(_register8, TYPES.SLACK, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(👁)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍ)_/¯'
	}), _register8), (_register9 = {
	    species: 'lepidoptera',
	    commonName: 'Concealapillar'
	}, _defineProperty(_register9, TYPES.PLAIN, {
	    antennae: '    ༽        ༼',
	    head: '¯\\_(ಥ﹏ಥ)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(_____)_/¯'
	}), _defineProperty(_register9, TYPES.TWITTER, {
	    antennae: '    ༽        ༼',
	    head: '¯\\_(ಥ﹏ಥ)_/¯',
	    body: '¯\\_(         )_/¯',
	    booty: '¯\\_(_____)_/¯'
	}), _defineProperty(_register9, TYPES.MONO, {
	    antennae: '   ༽    ༼',
	    head: '¯\\_(ಥ﹏ಥ)_/¯',
	    body: '¯\\_(    )_/¯',
	    booty: '¯\\_(____)_/¯'
	}), _defineProperty(_register9, TYPES.SLACK, {
	    antennae: '    ༽         ༼',
	    head: '¯\\_(ಥ﹏ಥ)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(______)_/¯'
	}), _register9));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(11),
	    isHostObject = __webpack_require__(12),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(3);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(19);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(18);

	var _src = __webpack_require__(2);

	var Shrugapillar = _interopRequireWildcard(_src);

	var _actions = __webpack_require__(1);

	var Actions = _interopRequireWildcard(_actions);

	var _reducer = __webpack_require__(9);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function setupHeadControl(store) {
	    var el = document.querySelector('.head-control__select');
	    var description = document.querySelector('.modal__controls-p');

	    Shrugapillar.getAll().forEach(function (shrugapillar) {
	        var definition = shrugapillar.getDefinition();
	        var head = definition[Shrugapillar.TYPES.PLAIN].head;

	        var headEl = document.createElement('option');
	        headEl.value = shrugapillar.commonName;
	        headEl.innerHTML = head + ' - ' + definition.commonName;

	        el.appendChild(headEl);
	    });

	    function update() {
	        var state = store.getState();
	        var def = Shrugapillar.get(state.selectedCommonName).getDefinition();
	        description.innerHTML = def.description || '';
	    }

	    el.addEventListener('change', function (evt) {
	        store.dispatch(Actions.setSelectedCommonName(evt.target.value));
	    });

	    store.subscribe(update);

	    update();
	}

	function setupLengthControl(store) {
	    document.querySelector('.length-control__button--decrease').addEventListener('click', function (evt) {
	        evt.preventDefault();
	        store.dispatch(Actions.changeLength(-1));
	    });
	    document.querySelector('.length-control__button--increase').addEventListener('click', function (evt) {
	        evt.preventDefault();
	        store.dispatch(Actions.changeLength(1));
	    });

	    function update() {
	        document.querySelector('.length-control__output').innerHTML = store.getState().length;
	    }

	    store.subscribe(update);

	    update();
	}

	function setupOutputTypeControl(store) {
	    var form = document.querySelector('.modal__controls');
	    var el = document.querySelector('.output-type-control');

	    var initialState = store.getState();

	    Object.keys(Shrugapillar.TYPES).forEach(function (type) {
	        var div = document.createElement('div');
	        div.classList.add('output-type-control__type');
	        div.innerHTML = '\n            <input type="radio" name="outputType"\n                    class="output-type-control__type-input"\n                    id="' + Shrugapillar.TYPES[type] + '"\n                    value="' + Shrugapillar.TYPES[type] + '"/>\n            <label for="' + Shrugapillar.TYPES[type] + '"\n                    class="output-type-control__type-label">\n                ' + type.toLowerCase() + '\n            </label>\n        ';

	        if (initialState.outputType === Shrugapillar.TYPES[type]) {
	            div.querySelector('input').checked = true;
	        }

	        div.querySelector('input').addEventListener('change', onChange);

	        el.appendChild(div);
	    });

	    function onChange(evt) {
	        var selectedType = void 0;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = form.elements.outputType[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var outputTypeRadio = _step.value;

	                if (outputTypeRadio.checked) selectedType = outputTypeRadio.value;
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        store.dispatch(Actions.setOutputType(selectedType));
	    }
	}

	function setupOutput(store) {
	    var outputEl = document.querySelector('.output');
	    var warningEl = document.querySelector('.modal__output-info--warning');

	    outputEl.addEventListener('focus', function () {
	        return outputEl.select();
	    });

	    function update() {
	        var state = store.getState();
	        outputEl.className = 'output';
	        outputEl.classList.add('output--' + state.outputType);

	        outputEl.value = Shrugapillar.get(state.selectedCommonName).render({
	            type: state.outputType,
	            length: state.length
	        });

	        if (state.outputType === Shrugapillar.TYPES.SLACK && outputEl.value.length > 4000) {
	            warningEl.innerHTML = 'Ruh roh! This shrugapillar is looking a\n                    little long for slack. You message may not send.';
	        } else if (state.outputType === Shrugapillar.TYPES.TWITTER && outputEl.value.length > 140) {
	            warningEl.innerHTML = 'Ruh roh! This shrugapillar too long to fit\n                    into a tweet (by ' + (outputEl.value.length - 140) + '\n                    characters). You\'ll probably want to make it shorter.';
	        } else {
	            warningEl.innerHTML = '';
	        }
	    }

	    store.subscribe(update);

	    update();
	}

	document.addEventListener('DOMContentLoaded', function () {
	    var store = (0, _redux.createStore)(_reducer2.default);
	    setupHeadControl(store);
	    setupLengthControl(store);
	    setupOutputTypeControl(store);
	    setupOutput(store);
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;

	var _src = __webpack_require__(2);

	var Shrugapillar = _interopRequireWildcard(_src);

	var _actions = __webpack_require__(1);

	var Actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var DEFAULT_STATE = {
	    selectedCommonName: Shrugapillar.getAll()[0].commonName,
	    length: 1,
	    outputType: Shrugapillar.TYPES.PLAIN
	};

	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_STATE : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case Actions.SET_SELECTED_COMMON_NAME:
	            return Object.assign(state, {
	                selectedCommonName: action.name
	            });
	        case Actions.CHANGE_LENGTH:
	            return Object.assign(state, {
	                length: Math.max(state.length + action.amount, 1)
	            });
	        case Actions.SET_OUTPUT_TYPE:
	            return Object.assign(state, {
	                outputType: action.outputType
	            });
	        default:
	            return state;
	    }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Shrugapillar = function () {
	    _createClass(Shrugapillar, [{
	        key: 'commonName',
	        get: function get() {
	            return this.definiton_.commonName;
	        }
	    }], [{
	        key: 'TYPES',
	        get: function get() {
	            return Object.assign({}, TYPES);
	        }
	    }]);

	    function Shrugapillar(definition) {
	        _classCallCheck(this, Shrugapillar);

	        this.definiton_ = Object.assign({}, definition);
	    }

	    /**
	     * Returns the Shrugapillars definition.
	     *
	     * @return {Object} A shrugapillar definition.
	     */


	    _createClass(Shrugapillar, [{
	        key: 'getDefinition',
	        value: function getDefinition() {
	            return Object.assign({}, this.definiton_);
	        }

	        /**
	         * Renders the current shrugapillar to a string.
	         *
	         * @param {number} options.length=1 The number of body elements that should
	         *      be rendered.
	         * @param {Shrugapillar.TYPES} options.type=TYPES.PLAIN
	         * @param {number} options.maxNumCharacters= If specified, the length of
	         *      of the shrugapillar will be limited so as to fit within the
	         *      provided max number of characters.
	         *
	         * @return {string}
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var parts = this.getParts_(options.type);
	            var lineEnd = '\n';
	            var length = !options.length ? 1 : Math.max(options.length, 1);

	            var maxNumCharacters = options.maxNumCharacters;

	            if (options.maxNumCharacters) {
	                var baseSize = [parts.antennae, parts.head, parts.booty].join(lineEnd).length;

	                var maxLength = Math.floor((options.maxNumCharacters - baseSize) / (parts.body.length + lineEnd.length));

	                length = Math.min(length, maxLength);
	            }

	            var shrugapillar = [parts.antennae, parts.head];

	            for (var i = 0; i < length; i++) {
	                shrugapillar.push(parts.body);
	            }shrugapillar.push(parts.booty);

	            return shrugapillar.join(lineEnd);
	        }
	    }, {
	        key: 'getParts_',
	        value: function getParts_() {
	            var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TYPE : arguments[0];

	            var parts = Object.assign({}, this.definiton_[type]);

	            // To prevent slack and twitter from trimming leading whitespace,
	            // add a tiny 'ؘ' character to the start of the shrugapillar's antennae.
	            if (type === TYPES.SLACK || type === TYPES.TWITTER) {
	                parts.antennae = 'ؘ' + parts.antennae;
	            }

	            return parts;
	        }
	    }]);

	    return Shrugapillar;
	}();

	exports.default = Shrugapillar;


	var TYPES = {
	    PLAIN: 'plain',
	    TWITTER: 'twitter',
	    SLACK: 'slack',
	    MONO: 'monospace'
	};

	var DEFAULT_TYPE = TYPES.PLAIN;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(13);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(5);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(6);

	var _isPlainObject = __webpack_require__(3);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(6);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(17);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(16);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(15);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(5);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(20)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ }
/******/ ]);