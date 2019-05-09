import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StudentService } from '../services/student.service';
var ProfileSavePage = /** @class */ (function () {
    function ProfileSavePage(route, act, ModalController, studentService) {
        this.route = route;
        this.act = act;
        this.ModalController = ModalController;
        this.studentService = studentService;
    }
    ProfileSavePage.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ProfileSavePage.prototype.profile = function () {
        this.ModalController.dismiss();
    };
    ProfileSavePage.prototype.success = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newpersonality, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newpersonality = {
                            date: this.date,
                            height: this.height,
                            weight: this.weight
                        };
                        this.data.data.personality.push(newpersonality);
                        console.log(this.data);
                        return [4 /*yield*/, this.studentService.saveWeightHeight(this.data.data)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res) {
                            this.ModalController.dismiss({
                                data: res
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSavePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile-save',
            templateUrl: './profile-save.page.html',
            styleUrls: ['./profile-save.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            ModalController,
            StudentService])
    ], ProfileSavePage);
    return ProfileSavePage;
}());
export { ProfileSavePage };
//# sourceMappingURL=profile-save.page.js.map