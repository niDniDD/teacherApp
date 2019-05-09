import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ScoreService } from '../services/score/score.service';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth/auth.service';
var ScorePage = /** @class */ (function () {
    function ScorePage(route, modalcontroller, scoreservice, studentService, auth) {
        this.route = route;
        this.modalcontroller = modalcontroller;
        this.scoreservice = scoreservice;
        this.studentService = studentService;
        this.auth = auth;
        this.score = [];
        this.totalfullpoint = 0;
        this.totalpoint = 0;
        this.totalpercepoint = 0;
    }
    ScorePage.prototype.ngOnInit = function () {
        this.setData();
    };
    ScorePage.prototype.backProfile = function () {
        this.modalcontroller.dismiss();
    };
    ScorePage.prototype.success = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i, element, bodyStudent, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < this.datascore.length; i++) {
                            element = this.datascore[i];
                            this.totalpoint += parseInt(element.point);
                            this.totalfullpoint += parseInt(element.fullpoint);
                            this.percepoint = element.point / element.fullpoint * 100;
                            this.datascore[i].percent = String(this.percepoint);
                        }
                        this.totalpercepoint = this.totalpoint / this.totalfullpoint * 100;
                        this.grad = {
                            name: "Grad",
                            getpointamount: this.totalpoint,
                            percenamount: this.totalpercepoint,
                            pointamount: this.totalfullpoint,
                            subjects: this.datascore
                        };
                        bodyStudent = {
                            citizenid: this.data.citizenid,
                            class: this.dataclass.data.class[0].class,
                            classroom: this.dataclass.data.class[0].room,
                            classtype: this.dataclass.data.class[0].classtype,
                            grade: this.grad,
                            school_id: this.datauser.data.schoolid,
                            term: this.dataclass.data.term,
                            year: this.dataclass.data.year
                        };
                        console.log(bodyStudent);
                        return [4 /*yield*/, this.studentService.saveGrade(bodyStudent)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res) {
                            this.modalcontroller.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScorePage.prototype.setData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.data.dataclass.gradetemplate.subjects.forEach(function (element) {
                    element.point = 0;
                });
                this.datascore = this.data.dataclass.gradetemplate.subjects;
                console.log(this.data);
                return [2 /*return*/];
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ScorePage.prototype, "data", void 0);
    ScorePage = tslib_1.__decorate([
        Component({
            selector: 'app-score',
            templateUrl: './score.page.html',
            styleUrls: ['./score.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ModalController,
            ScoreService,
            StudentService,
            AuthService])
    ], ScorePage);
    return ScorePage;
}());
export { ScorePage };
//# sourceMappingURL=score.page.js.map