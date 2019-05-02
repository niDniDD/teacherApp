import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
var PortfolioSavePage = /** @class */ (function () {
    function PortfolioSavePage(modalcontroller, route) {
        this.modalcontroller = modalcontroller;
        this.route = route;
    }
    PortfolioSavePage.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    PortfolioSavePage.prototype.back = function () {
        this.modalcontroller.dismiss();
    };
    PortfolioSavePage = tslib_1.__decorate([
        Component({
            selector: 'app-portfolio-save',
            templateUrl: './portfolio-save.page.html',
            styleUrls: ['./portfolio-save.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavController])
    ], PortfolioSavePage);
    return PortfolioSavePage;
}());
export { PortfolioSavePage };
//# sourceMappingURL=portfolio-save.page.js.map