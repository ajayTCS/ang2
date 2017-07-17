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
var deleteuser_service_1 = require("./deleteuser.service");
var DeleteUserComponent = (function () {
    function DeleteUserComponent(nabiya) {
        this.nabiya = nabiya;
        this.delModel = '';
    }
    DeleteUserComponent.prototype.myOfferClick = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.nabiya.updateUser(this.delModel);
    };
    return DeleteUserComponent;
}());
DeleteUserComponent = __decorate([
    core_1.Component({
        selector: 'delete-user',
        providers: [deleteuser_service_1.DeleteUserService],
        template: "<div id=\"_add_user_parent_ser\">\n  \t<div id=\"_tere_liye_duniya\">\n      <input type=\"search\" id=\"_del_box_rxjs\" placeholder=\"type user email to delete user\" [(ngModel)]=\"delModel\" /><input type=\"button\" value=\"Delete\" (click)=\"myOfferClick($event)\" />\n    </div>\n  </div>",
        styles: ['#_add_user_parent_ser { width:100%; }', '#_tere_liye_duniya {width:100%;height:50px}', '#_del_box_rxjs {width:300px;height:30px;border:1px solid lightgrey;border-radius:4px;vertical-align:center;}']
    }),
    __metadata("design:paramtypes", [deleteuser_service_1.DeleteUserService])
], DeleteUserComponent);
exports.DeleteUserComponent = DeleteUserComponent;
//# sourceMappingURL=delete.component.js.map