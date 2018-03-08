'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _monad = require('./monad');

var _monad2 = _interopRequireDefault(_monad);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var axios = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(config) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.t0 = M;
                        _context.next = 4;
                        return (0, _axios2.default)(config);

                    case 4:
                        _context.t1 = _context.sent;
                        return _context.abrupt('return', _context.t0.eitherR.call(_context.t0, _context.t1));

                    case 8:
                        _context.prev = 8;
                        _context.t2 = _context['catch'](0);
                        return _context.abrupt('return', M.eitherL(_context.t2));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function axios(_x) {
        return _ref.apply(this, arguments);
    };
}();

axios.get = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(url, config) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.t0 = M;
                        _context2.next = 4;
                        return _axios2.default.get(url, config);

                    case 4:
                        _context2.t1 = _context2.sent;
                        return _context2.abrupt('return', _context2.t0.eitherR.call(_context2.t0, _context2.t1));

                    case 8:
                        _context2.prev = 8;
                        _context2.t2 = _context2['catch'](0);
                        return _context2.abrupt('return', M.eitherL(_context2.t2));

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

axios.post = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(url, config) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.t0 = M;
                        _context3.next = 4;
                        return _axios2.default.post(url, config);

                    case 4:
                        _context3.t1 = _context3.sent;
                        return _context3.abrupt('return', _context3.t0.eitherR.call(_context3.t0, _context3.t1));

                    case 8:
                        _context3.prev = 8;
                        _context3.t2 = _context3['catch'](0);
                        return _context3.abrupt('return', M.eitherL(_context3.t2));

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

axios.put = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(url, config) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.t0 = M;
                        _context4.next = 4;
                        return _axios2.default.put(url, config);

                    case 4:
                        _context4.t1 = _context4.sent;
                        return _context4.abrupt('return', _context4.t0.eitherR.call(_context4.t0, _context4.t1));

                    case 8:
                        _context4.prev = 8;
                        _context4.t2 = _context4['catch'](0);
                        return _context4.abrupt('return', M.eitherL(_context4.t2));

                    case 11:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x6, _x7) {
        return _ref4.apply(this, arguments);
    };
}();

axios.delete = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(url, config) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.t0 = M;
                        _context5.next = 4;
                        return _axios2.default.delete(url, config);

                    case 4:
                        _context5.t1 = _context5.sent;
                        return _context5.abrupt('return', _context5.t0.eitherR.call(_context5.t0, _context5.t1));

                    case 8:
                        _context5.prev = 8;
                        _context5.t2 = _context5['catch'](0);
                        return _context5.abrupt('return', M.eitherL(_context5.t2));

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[0, 8]]);
    }));

    return function (_x8, _x9) {
        return _ref5.apply(this, arguments);
    };
}();

module.exports = {
    axios: axios
};