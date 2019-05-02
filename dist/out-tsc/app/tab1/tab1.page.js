import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(studentService, route, act) {
        this.studentService = studentService;
        this.route = route;
        this.act = act;
        this.datasuccess = false;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var res = this.act.snapshot.paramMap.get('dataClassroom');
        this.dataclass = JSON.parse(res);
        this.getData();
    };
    Tab1Page.prototype.list = function (item) {
        item.dataclass = this.dataclass;
        this.route.navigateForward(['/profile', { sss: JSON.stringify(item) }]);
    };
    Tab1Page.prototype.getData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, index, element, Student, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataclassSchool = {
                            class: this.dataclass.class,
                            classroom: this.dataclass.room,
                            classtype: this.dataclass.classtype,
                            school_id: this.dataclass.dataschool.school_id,
                            term: this.dataclass.dataschool.term,
                            year: this.dataclass.dataschool.year
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        _a = this;
                        return [4 /*yield*/, this.studentService.getStudentById(this.dataclassSchool)];
                    case 2:
                        _a.data = _b.sent();
                        index = 0;
                        _b.label = 3;
                    case 3:
                        if (!(index < this.data.datas.length)) return [3 /*break*/, 6];
                        element = this.data.datas[index];
                        return [4 /*yield*/, this.studentService.getStudent(element.citizenid)];
                    case 4:
                        Student = _b.sent();
                        this.data.datas[index].image = Student.data.student.image;
                        if (!this.data.datas[index].image) {
                            this.data.datas[index].image = 'https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png';
                        }
                        _b.label = 5;
                    case 5:
                        index++;
                        return [3 /*break*/, 3];
                    case 6:
                        this.datasuccess = true;
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        throw error_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StudentService,
            NavController,
            ActivatedRoute])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map