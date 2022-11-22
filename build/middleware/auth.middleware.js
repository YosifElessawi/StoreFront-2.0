"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var unauthorizedUser = function (next) {
    var error = new Error('Unauthorized User');
    next(error);
};
var verifyAuthToken = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader.split(' ')[1];
        if (jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET)) {
            next();
        }
        else {
            unauthorizedUser(next);
        }
    }
    catch (error) {
        res.status(401);
    }
};
exports.default = verifyAuthToken;
