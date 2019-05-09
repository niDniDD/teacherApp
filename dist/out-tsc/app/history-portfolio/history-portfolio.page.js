import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var HistoryPortfolioPage = /** @class */ (function () {
    function HistoryPortfolioPage(modalcontroller) {
        this.modalcontroller = modalcontroller;
    }
    HistoryPortfolioPage.prototype.ngOnInit = function () {
    };
    HistoryPortfolioPage.prototype.goBack = function () {
        this.modalcontroller.dismiss();
    };
    HistoryPortfolioPage = tslib_1.__decorate([
        Component({
            selector: 'app-history-portfolio',
            templateUrl: './history-portfolio.page.html',
            styleUrls: ['./history-portfolio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], HistoryPortfolioPage);
    return HistoryPortfolioPage;
}());
export { HistoryPortfolioPage };
//# sourceMappingURL=history-portfolio.page.js.map