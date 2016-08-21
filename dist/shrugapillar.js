var Shrugapillar =
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
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

	var _shrugapillar = __webpack_require__(2);

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
	    antennae: '   ᕙ            ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(             )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register2, TYPES.TWITTER, {
	    antennae: '   ᕙ            ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(             )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register2, TYPES.MONO, {
	    antennae: '  ᕙ      ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(_____)_/¯'
	}), _defineProperty(_register2, TYPES.SLACK, {
	    antennae: '    ᕙ   ᕗ',
	    head: '¯\\_(⌣̯̀⌣́)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _register2), (_register3 = {
	    species: 'incertus',
	    commonName: 'Unsureapillar',
	    description: 'Also known as the idontknowlolapillar.'
	}, _defineProperty(_register3, TYPES.PLAIN, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍ)_/¯'
	}), _defineProperty(_register3, TYPES.TWITTER, {
	    antennae: '   ᕙ    ᕗ',
	    head: '¯\\_(º_o)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍ)_/¯'
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
	    commonName: 'Apathetapillar',
	    description: 'The Apathetapillar is in a constant state of indifference. Known for having an absence of interest in or concern about emotional, social, spiritual, philosophical and/or physical life and the world.'
	}, _defineProperty(_register4, TYPES.PLAIN, {
	    antennae: '   ᕙ     ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register4, TYPES.TWITTER, {
	    antennae: '   ᕙ     ᕗ',
	    head: '¯\\_(´-｀)_/¯',
	    body: '¯\\_(       )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
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
	    booty: '¯\\_(ˍˍˍˍˍ)_/¯'
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
	    commonName: 'Contentapillar',
	    description: 'The Contentapillar accepts every situation as it is.'
	}, _defineProperty(_register6, TYPES.PLAIN, {
	    antennae: '     ᕙ     ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register6, TYPES.TWITTER, {
	    antennae: '     ᕙ     ᕗ',
	    head: '¯\\_(◉‿◉)_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍ)_/¯'
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
	    antennae: '    ᕙ       ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(          )_/¯',
	    booty: '¯\\_(ˍˍˍˍˍˍˍˍ)_/¯'
	}), _defineProperty(_register7, TYPES.MONO, {
	    antennae: '   ᕙ       ᕗ',
	    head: '¯\\_( ͡° ͜ʖ ͡° )_/¯',
	    body: '¯\\_(        )_/¯',
	    booty: '¯\\_(________)_/¯'
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
	    booty: '¯\\_(ˍˍˍ)_/¯'
	}), _defineProperty(_register8, TYPES.TWITTER, {
	    antennae: '   ᕙ   ᕗ',
	    head: '¯\\_(👁)_/¯',
	    body: '¯\\_(     )_/¯',
	    booty: '¯\\_(ˍˍˍ)_/¯'
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
	    body: '¯\\_(          )_/¯',
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
/* 2 */
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

/***/ }
/******/ ]);