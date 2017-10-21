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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DisplayTypeComponent = (function () {
    function DisplayTypeComponent(rd) {
        this.rd = rd;
        this.pageNavMenus = [];
    }
    DisplayTypeComponent.prototype.currentItem = function (menu) {
        this.pageNavMenus.forEach(function (element) {
            if (menu.Text === element.Text) {
                element.CSS = 'menu-item current-menu-item';
            }
            else {
                element.CSS = 'menu-item';
            }
        });
    };
    return DisplayTypeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DisplayTypeComponent.prototype, "pageNavMenus", void 0);
__decorate([
    core_1.ViewChild('someVar'),
    __metadata("design:type", core_1.ElementRef)
], DisplayTypeComponent.prototype, "el", void 0);
DisplayTypeComponent = __decorate([
    core_1.Component({
        selector: 'view-type',
        templateUrl: "./displayType.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Renderer2])
], DisplayTypeComponent);
exports.DisplayTypeComponent = DisplayTypeComponent;
//# sourceMappingURL=displayType.component.js.map