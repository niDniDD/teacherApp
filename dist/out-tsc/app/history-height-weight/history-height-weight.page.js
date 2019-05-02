import * as tslib_1 from "tslib";
import { StudentService } from './../services/student.service';
import { AuthService } from './../services/auth/auth.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileSavePage } from '../profile-save/profile-save.page';
var HistoryHeightWeightPage = /** @class */ (function () {
    function HistoryHeightWeightPage(modalcontroller, auth, studentService) {
        this.modalcontroller = modalcontroller;
        this.auth = auth;
        this.studentService = studentService;
    }
    HistoryHeightWeightPage.prototype.ngOnInit = function () {
        console.log(this.data);
        this.getData();
    };
    HistoryHeightWeightPage.prototype.goBack = function () {
        this.modalcontroller.dismiss();
    };
    HistoryHeightWeightPage.prototype.addhw = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: ProfileSavePage,
                            componentProps: {
                                data: this.dataWeightHeight
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryHeightWeightPage.prototype.getData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, bodyRoom, _b, bodyStudent, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.auth.getUser()];
                    case 1:
                        _a.datauser = _d.sent();
                        console.log(this.datauser);
                        bodyRoom = {
                            citizenid: this.datauser.data.citizenid,
                            school_id: this.datauser.data.schoolid
                        };
                        _b = this;
                        return [4 /*yield*/, this.studentService.getRoom(bodyRoom)];
                    case 2:
                        _b.dataclass = _d.sent();
                        console.log(this.dataclass);
                        bodyStudent = {
                            citizenid: this.data.citizenid,
                            class: this.dataclass.data.class[0].class,
                            classroom: this.dataclass.data.class[0].room,
                            classtype: this.dataclass.data.class[0].classtype,
                            school_id: this.datauser.data.schoolid,
                            studentname: this.data.nametitle + this.data.firstname + " " + this.data.lastname,
                            term: this.dataclass.data.term,
                            year: this.dataclass.data.year
                        };
                        _c = this;
                        return [4 /*yield*/, this.studentService.getWeightHeight(bodyStudent)];
                    case 3:
                        _c.dataWeightHeight = _d.sent();
                        console.log(this.dataWeightHeight);
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryHeightWeightPage = tslib_1.__decorate([
        Component({
            selector: 'app-history-height-weight',
            templateUrl: './history-height-weight.page.html',
            styleUrls: ['./history-height-weight.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AuthService,
            StudentService])
    ], HistoryHeightWeightPage);
    return HistoryHeightWeightPage;
}());
export { HistoryHeightWeightPage };
//# sourceMappingURL=history-height-weight.page.js.map