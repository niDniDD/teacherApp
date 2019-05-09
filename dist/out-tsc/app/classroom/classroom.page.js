import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { StudentService } from '../services/student.service';
import { NavController } from '@ionic/angular';
var ClassroomPage = /** @class */ (function () {
    function ClassroomPage(auth, studentService, route) {
        this.auth = auth;
        this.studentService = studentService;
        this.route = route;
    }
    ClassroomPage.prototype.ngOnInit = function () {
        this.getData();
    };
    ClassroomPage.prototype.studentList = function (item) {
        item.dataschool = {
            school_id: this.dataclass.data.school_id,
            term: this.dataclass.data.term,
            year: this.dataclass.data.year
        };
        this.route.navigateForward(['/tabs/tab1', { dataClassroom: JSON.stringify(item) }]);
    };
    ClassroomPage.prototype.getData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, bodyRoom, resRoom;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.getUser()];
                    case 1:
                        res = _a.sent();
                        if (!res.data) return [3 /*break*/, 3];
                        bodyRoom = {
                            citizenid: res.data.citizenid,
                            school_id: res.data.schoolid
                        };
                        return [4 /*yield*/, this.studentService.getRoom(bodyRoom)];
                    case 2:
                        resRoom = _a.sent();
                        this.dataclass = resRoom;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomPage = tslib_1.__decorate([
        Component({
            selector: 'app-classroom',
            templateUrl: './classroom.page.html',
            styleUrls: ['./classroom.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            StudentService,
            NavController])
    ], ClassroomPage);
    return ClassroomPage;
}());
export { ClassroomPage };
//# sourceMappingURL=classroom.page.js.map