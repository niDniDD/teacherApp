import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProtfolioPage } from '../protfolio/protfolio.page';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ScorePage } from '../score/score.page';
import { EvoPage } from '../evo/evo.page';
import { EditProfilePage } from '../edit-profile/edit-profile.page';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth/auth.service';
import { HistoryHeightWeightPage } from '../history-height-weight/history-height-weight.page';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(route, act, modalcontroller, popoverController, studentService, auth) {
        this.route = route;
        this.act = act;
        this.modalcontroller = modalcontroller;
        this.popoverController = popoverController;
        this.studentService = studentService;
        this.auth = auth;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var res = this.act.snapshot.paramMap.get('sss');
        this.data = JSON.parse(res);
        console.log(this.data);
    };
    ProfilePage.prototype.backtab4 = function () {
        this.route.navigateBack('/tabs/tab1');
    };
    ProfilePage.prototype.score = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: ScorePage,
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
    ProfilePage.prototype.goProtfolio = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: ProtfolioPage,
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
    ProfilePage.prototype.evo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: EvoPage,
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
    ProfilePage.prototype.editprofile = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: EditProfilePage,
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
    ProfilePage.prototype.profilesave = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
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
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            ModalController,
            PopoverController,
            StudentService,
            AuthService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map