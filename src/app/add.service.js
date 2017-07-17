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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AddUserService = (function () {
    function AddUserService(http) {
        this.http = http;
    }
    AddUserService.prototype.addNewUser = function (name, email, project) {
        this.http
            .get("http://www.linkedface.in/angular2?l_v=create (ee:Angular2User{name:'" + name + "',email:'" + email + "',project:'" + project + "'}) return ee")
            .subscribe(function (response) {
            var data = response.json().ob[0]._fields[0].properties;
            console.log(response.json().ob[0]._fields[0].properties);
            alert("user is added with following data \n name: " + data.name + " \n email: " + data.email + " \n project: " + data.project);
        }, function (error) { alert(error); });
    };
    return AddUserService;
}());
AddUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AddUserService);
exports.AddUserService = AddUserService;
//# sourceMappingURL=add.service.js.map