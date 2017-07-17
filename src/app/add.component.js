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
var add_service_1 = require("./add.service");
var AddUserComponent = (function () {
    function AddUserComponent(addService) {
        this.addService = addService;
    }
    AddUserComponent.prototype.addUserSyncDb = function (evt) {
        this.addService.addNewUser(this.addname, this.addemail, this.addproject);
        //console.log(this.addname);
        //console.log(this.addemail);
        //console.log(this.addproject);
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'add-user',
        providers: [add_service_1.AddUserService],
        template: "<div id=\"_add_user_parent\">\n  \t<div id=\"_add_user_child_1\">\n  \t\t<div id=\"_d_flex\">\n  \t\t\t<input type=\"text\" id=\"_name_add_user\" placeholder=\"enter name\" [(ngModel)]=\"addname\" />\n  \t\t</div>\n  \t</div>\n  \t<div id=\"_add_user_child_2\">\n  \t\t<div id=\"_d_flex\">\n  \t\t\t<input type=\"text\" id=\"_email_add_user\" placeholder=\"enter email\" [(ngModel)]=\"addemail\" />\n  \t\t</div>\n  \t</div>\n  \t<div id=\"_add_user_child_3\">\n  \t\t<div id=\"_d_flex\">\n  \t\t\t<input type=\"text\" id=\"_project_add_user\" placeholder=\"enter project\" [(ngModel)]=\"addproject\" />\n  \t\t</div>\n  \t</div>\n  \t<div id=\"_add_user_child_4\">\n  \t\t<div id=\"_d_flex_start\">\n  \t\t\t<input type=\"button\" value=\"Sync Db\" (click)=\"addUserSyncDb($event)\" />\n  \t\t</div>\n  \t</div>\n  </div>",
        styles: ['#_project_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }', '#_email_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }', '#_name_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }', '#_add_user_parent { width:80%;height:50px; }', '#_add_user_child_1 { width:25%;height:100%;display:inline;float:left }', '#_add_user_child_2 { width:25%;height:100%;display:inline;float:left }', '#_add_user_child_3 { width:25%;height:100%;display:inline;float:left }', '#_add_user_child_4 { width:25%;height:100%;display:inline;float:left }', '#_d_flex { width:100%;height:100%;display:flex;justify-content:center;align-items:center }', '#_d_flex_start { width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center }']
    }),
    __metadata("design:paramtypes", [add_service_1.AddUserService])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add.component.js.map