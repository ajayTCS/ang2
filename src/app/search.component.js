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
var Rx_1 = require("rxjs/Rx");
var searchuser_service_1 = require("./searchuser.service");
var SearchUserComponent = (function () {
    function SearchUserComponent(updateService) {
        this.updateService = updateService;
        this.searchUserModel = 'a';
        this.ux = new Rx_1.Observable();
    }
    SearchUserComponent.prototype.ngOnInit = function () {
        this.ux = this.updateService.updateUser(this.searchUserModel);
    };
    SearchUserComponent.prototype.myOwnModel = function () {
        this.ux = this.updateService.updateUser(this.searchUserModel);
    };
    return SearchUserComponent;
}());
SearchUserComponent = __decorate([
    core_1.Component({
        selector: 'search-user',
        providers: [searchuser_service_1.SearchUserService],
        template: "<div id=\"_add_user_parent_ser\">\n  \t<div id=\"_tere_liye_duniya\">\n      <input type=\"search\" id=\"_search_box_rxjs\" [(ngModel)]=\"searchUserModel\" (ngModelChange)=\"myOwnModel()\"  />\n    </div>\n    <div id=\"_add_user_parent\" *ngFor=\"let user of (ux | async)\">\n    <div id=\"_add_user_child_1\" >\n      <div id=\"_d_flex\" >\n        <font contenteditable=\"true\">{{user.name}}</font>\n        <input type=\"hidden\" value=\"{{user.name}}\" />\n      </div>\n    </div>\n    <div id=\"_add_user_child_2\">\n      <div id=\"_d_flex\">\n        \n      </div>\n    </div>\n    <div id=\"_add_user_child_3\">\n      <div id=\"_d_flex\">\n        \n      </div>\n    </div>\n    <div id=\"_add_user_child_4\">\n      <div id=\"_d_flex_start\">\n        \n      </div>\n    </div>\n  </div>\n  </div>",
        styles: ['#_add_user_parent_ser { width:100%; }', '#_tere_liye_duniya {width:100%;height:50px}', '#_search_box_rxjs {width:300px;height:30px;border:1px solid lightgrey;border-radius:4px;}']
    }),
    __metadata("design:paramtypes", [searchuser_service_1.SearchUserService])
], SearchUserComponent);
exports.SearchUserComponent = SearchUserComponent;
//# sourceMappingURL=search.component.js.map