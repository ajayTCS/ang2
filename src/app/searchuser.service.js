"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var SearchUserService = (function () {
    function SearchUserService(http) {
        this.http = http;
    }
    SearchUserService.prototype.updateUser = function (term) {
        var ar = [];
        this.http
            .get("http://www.linkedface.in/angular2?l_v=match (ee:Angular2User) where ee.name=~'.*." + term + ".*' return ee")
            .subscribe(function (response) {
            var data = response.json().ob;
            console.log(data);
            data.map(function (a, b) {
                ar.push(a._fields[0].properties);
            });
        }, function (error) { alert(error); });
        return Rx_1.Observable.of(ar);
    };
    return SearchUserService;
}());
SearchUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SearchUserService);
exports.SearchUserService = SearchUserService;
//# sourceMappingURL=searchuser.service.js.map