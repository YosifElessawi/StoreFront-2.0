"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../../models/user");
var database_1 = __importDefault(require("../../database"));
var store = new user_1.UserStore();
describe('Test ALL users methods', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        describe('Test Authentication method', function () {
            it('Should have authenticate method', function () {
                expect(store.authenticate).toBeDefined();
            });
            var user = {
                firstname: 'test',
                lastname: 'user',
                email: 'testuser@test.com',
                password: 'testpass'
            };
            beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
                var newuser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, store.create(user)];
                        case 1:
                            newuser = _a.sent();
                            user.id = newuser.id;
                            return [2 /*return*/];
                    }
                });
            }); });
            afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
                var conn, sql;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, database_1.default.connect()];
                        case 1:
                            conn = _a.sent();
                            sql = 'DELETE FROM users';
                            return [4 /*yield*/, conn.query(sql)];
                        case 2:
                            _a.sent();
                            conn.release();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('Should return user for authenticated users', function () { return __awaiter(void 0, void 0, void 0, function () {
                var authuser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, store.authenticate(user.email, user.password)];
                        case 1:
                            authuser = _a.sent();
                            expect(authuser === null || authuser === void 0 ? void 0 : authuser.firstname).toBe(user.firstname);
                            expect(authuser === null || authuser === void 0 ? void 0 : authuser.lastname).toBe(user.lastname);
                            expect(authuser === null || authuser === void 0 ? void 0 : authuser.email).toBe(user.email);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        //Test logic of methods
        describe('Test Users CRUD methods ', function () {
            describe('Methods should exist test', function () {
                it('Should have index method', function () {
                    expect(store.index).toBeDefined();
                });
                it('Should have show method', function () {
                    expect(store.show).toBeDefined();
                });
                it('Should have create method', function () {
                    expect(store.create).toBeDefined();
                });
                it('Should have update method', function () {
                    expect(store.edit).toBeDefined();
                });
                it('Should have delete method', function () {
                    expect(store.delete).toBeDefined();
                });
            });
            describe('Methods logic test', function () {
                var user = {
                    firstname: 'test',
                    lastname: 'user',
                    email: 'testuser@test.com',
                    password: 'testpass'
                };
                beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newuser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.create(user)];
                            case 1:
                                newuser = _a.sent();
                                user.id = newuser.id;
                                return [2 /*return*/];
                        }
                    });
                }); });
                afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var conn, sql;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, database_1.default.connect()];
                            case 1:
                                conn = _a.sent();
                                sql = 'DELETE FROM users';
                                return [4 /*yield*/, conn.query(sql)];
                            case 2:
                                _a.sent();
                                conn.release();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('Should create new user', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newuser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.create({
                                    firstname: 'test2',
                                    lastname: 'user2',
                                    email: 'testuser2@test.com',
                                    password: 'testpass2'
                                })];
                            case 1:
                                newuser = _a.sent();
                                expect(newuser).toEqual({
                                    id: newuser.id,
                                    firstname: 'test2',
                                    lastname: 'user2',
                                    email: 'testuser2@test.com'
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('Should return all users', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var users;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.index()];
                            case 1:
                                users = _a.sent();
                                expect(users.length).toBe(2);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('Should return one user with specified ID', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var specuser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.show(user.id)];
                            case 1:
                                specuser = _a.sent();
                                expect(specuser.id).toBe(user.id);
                                expect(specuser.firstname).toBe(user.firstname);
                                expect(specuser.lastname).toBe(user.lastname);
                                expect(specuser.email).toBe(user.email);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('Should update user with specified ID', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var edituser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.edit(user.id, {
                                    firstname: 'testedit',
                                    lastname: 'testedit',
                                    email: 'testedit@user.com',
                                    password: 'passedit'
                                })];
                            case 1:
                                edituser = _a.sent();
                                expect(edituser.id).toBe(user.id);
                                expect(edituser.firstname).toBe('testedit');
                                expect(edituser.lastname).toBe('testedit');
                                expect(edituser.email).toBe('testedit@user.com');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('Should delete user with specified ID', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var deluser;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, store.delete(user.id)];
                            case 1:
                                deluser = _a.sent();
                                expect(deluser).toBeFalsy();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
        return [2 /*return*/];
    });
}); });
