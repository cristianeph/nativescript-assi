"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }
    UserService.prototype.info = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.infoCustomer = function (id) {
        return this.http.get(this.urlResource + "/customer/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.infoWorker = function (id) {
        return this.http.get(this.urlResource + "/worker/" + id).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;