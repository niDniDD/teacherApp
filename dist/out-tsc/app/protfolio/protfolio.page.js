import * as tslib_1 from "tslib";
import { AuthService } from './../services/auth/auth.service';
import { PortfolioSavePage } from './../portfolio-save/portfolio-save.page';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { StudentService } from '../services/student.service';
var ProtfolioPage = /** @class */ (function () {
    function ProtfolioPage(route, modalcontroller, portfolioservice, auth, studentService) {
        this.route = route;
        this.modalcontroller = modalcontroller;
        this.portfolioservice = portfolioservice;
        this.auth = auth;
        this.studentService = studentService;
    }
    ProtfolioPage.prototype.ngOnInit = function () {
        this.getData();
    };
    ProtfolioPage.prototype.back = function () {
        this.modalcontroller.dismiss();
    };
    ProtfolioPage.prototype.addPort = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: PortfolioSavePage,
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
    ProtfolioPage.prototype.getData = function () {
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
                        return [4 /*yield*/, this.studentService.getPortfolio(bodyStudent)];
                    case 3:
                        _c.dataPortfolio = _d.sent();
                        console.log(this.dataPortfolio);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProtfolioPage = tslib_1.__decorate([
        Component({
            selector: 'app-protfolio',
            templateUrl: './protfolio.page.html',
            styleUrls: ['./protfolio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ModalController,
            PortfolioService,
            AuthService,
            StudentService])
    ], ProtfolioPage);
    return ProtfolioPage;
}());
export { ProtfolioPage };
//# sourceMappingURL=protfolio.page.js.map