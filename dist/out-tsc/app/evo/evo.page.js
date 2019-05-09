import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EvoserviceService } from '../services/evoservice/evoservice.service';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth/auth.service';
var EvoPage = /** @class */ (function () {
    function EvoPage(route, act, modalcontroller, evoservice, studentService, auth) {
        this.route = route;
        this.act = act;
        this.modalcontroller = modalcontroller;
        this.evoservice = evoservice;
        this.studentService = studentService;
        this.auth = auth;
    }
    EvoPage.prototype.ngOnInit = function () {
        this.getData();
    };
    EvoPage.prototype.goBack = function () {
        this.modalcontroller.dismiss();
    };
    EvoPage.prototype.Success = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bodyDevelopments, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bodyDevelopments = {
                            citizenid: this.data.citizenid,
                            class: this.dataclass.data.class[0].class,
                            classroom: this.dataclass.data.class[0].room,
                            classtype: this.dataclass.data.class[0].classtype,
                            school_id: this.datauser.data.schoolid,
                            studentid: this.data.studentid,
                            term: this.dataclass.data.term,
                            year: this.dataclass.data.year,
                            development: this.res.data.development
                        };
                        console.log(bodyDevelopments);
                        return [4 /*yield*/, this.studentService.saveDevelopment(bodyDevelopments)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    EvoPage.prototype.onCheck = function (item, itemChk, indexDataevo, indexItem) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                item.point = itemChk;
                this.dataevo[indexDataevo].items[indexItem].point = String(item.point);
                return [2 /*return*/];
            });
        });
    };
    EvoPage.prototype.getData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, bodyRoom, _b, bodyDevelopments, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.auth.getUser()];
                    case 1:
                        _a.datauser = _d.sent();
                        bodyRoom = {
                            citizenid: this.datauser.data.citizenid,
                            school_id: this.datauser.data.schoolid
                        };
                        _b = this;
                        return [4 /*yield*/, this.studentService.getRoom(bodyRoom)];
                    case 2:
                        _b.dataclass = _d.sent();
                        bodyDevelopments = {
                            citizenid: this.data.citizenid,
                            class: this.dataclass.data.class[0].class,
                            class_id: this.dataclass.data.class[0]._id,
                            classroom: this.dataclass.data.class[0].room,
                            classtype: this.dataclass.data.class[0].classtype,
                            school_id: this.datauser.data.schoolid,
                            schoolyear_id: this.dataclass.data._id,
                            term: this.dataclass.data.term,
                            year: this.dataclass.data.year
                        };
                        _c = this;
                        return [4 /*yield*/, this.studentService.getDevelopment(bodyDevelopments)];
                    case 3:
                        _c.res = _d.sent();
                        this.dataevo = this.res.data.development.developments;
                        return [2 /*return*/];
                }
            });
        });
    };
    EvoPage = tslib_1.__decorate([
        Component({
            selector: 'app-evo',
            templateUrl: './evo.page.html',
            styleUrls: ['./evo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            ModalController,
            EvoserviceService,
            StudentService,
            AuthService])
    ], EvoPage);
    return EvoPage;
}());
export { EvoPage };
//# sourceMappingURL=evo.page.js.map