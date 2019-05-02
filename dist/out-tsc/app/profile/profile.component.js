import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { HistoryPortfolioPage } from '../history-portfolio/history-portfolio.page';
import { HistoryHeightWeightPage } from '../history-height-weight/history-height-weight.page';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalcontroller, popoverController) {
        this.modalcontroller = modalcontroller;
        this.popoverController = popoverController;
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.historyheight = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.popoverController.dismiss();
                        return [4 /*yield*/, this.modalcontroller.create({
                                component: HistoryHeightWeightPage,
                                componentProps: {
                                    data: this.data
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileComponent.prototype.historyportfolio = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.popoverController.dismiss();
                        return [4 /*yield*/, this.modalcontroller.create({
                                component: HistoryPortfolioPage,
                                componentProps: {
                                    data: this.data
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            PopoverController])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map