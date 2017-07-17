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
var ClickablelistComponent = (function () {
    function ClickablelistComponent() {
        this.message = 'Please click on following links to take appropriate action';
        this.binderAlu = [];
        this.isLoadedAddUser = false;
        this.isLoadedUpdateUser = false;
        this.isLoadedSearchUser = false;
        this.isLoadedDeleteUser = false;
    }
    ClickablelistComponent.prototype.addUserClk = function (evt) {
        evt.preventDefault();
        this.isLoadedAddUser = !this.isLoadedAddUser;
    };
    ClickablelistComponent.prototype.updateUserClk = function (evt) {
        evt.preventDefault();
        this.isLoadedUpdateUser = !this.isLoadedUpdateUser;
    };
    ClickablelistComponent.prototype.searchUserClk = function (evt) {
        evt.preventDefault();
        this.isLoadedSearchUser = !this.isLoadedSearchUser;
    };
    ClickablelistComponent.prototype.deleteUserClk = function (evt) {
        evt.preventDefault();
        this.isLoadedDeleteUser = !this.isLoadedDeleteUser;
    };
    return ClickablelistComponent;
}());
__decorate([
    core_1.Input("crud"),
    __metadata("design:type", Array)
], ClickablelistComponent.prototype, "crud1", void 0);
ClickablelistComponent = __decorate([
    core_1.Component({
        selector: 'clickable-list',
        template: "<ul>\n  <li id=\"litypeof\"><div id=\"add_u_unq_id\" (click)=\"addUserClk($event)\">{{crud1[0]}}</div><div id=\"hello\" *ngIf=isLoadedAddUser ><add-user></add-user></div></li>\n  <li id=\"litypeof\"><div id=\"add_u_unq_id_u\" (click)=\"updateUserClk($event)\">{{crud1[1]}}</div><div id=\"hello_1\" *ngIf=isLoadedUpdateUser ><update-user></update-user> </div></li>\n  <li id=\"litypeof\"><div id=\"add_u_unq_id_s\" (click)=\"searchUserClk($event)\">{{crud1[2]}}</div><div id=\"hello_2\" *ngIf=isLoadedSearchUser ><search-user></search-user></div></li>\n  <li id=\"litypeof\"><div id=\"add_u_unq_id_d\" (click)=\"deleteUserClk($event)\">{{crud1[3]}}</div><div id=\"hello_3\" *ngIf=isLoadedDeleteUser><delete-user></delete-user></div></li>\n  </ul>",
        styles: ['#hello { color: red; }', '#litypeof { font-size:30px; }', '#add_u_unq_id { cursor:pointer; }', '#add_u_unq_id_d { cursor:pointer; }', '#add_u_unq_id_u { cursor:pointer; }', '#add_u_unq_id_s { cursor:pointer; }']
    })
], ClickablelistComponent);
exports.ClickablelistComponent = ClickablelistComponent;
//# sourceMappingURL=clickablelist.component.js.map