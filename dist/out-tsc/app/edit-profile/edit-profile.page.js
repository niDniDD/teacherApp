import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(route, act, modalcontoroller) {
        this.route = route;
        this.act = act;
        this.modalcontoroller = modalcontoroller;
        this.Status = [{ name: 'สถานะ :' }, { name: 'ชื่อ :' }, { name: 'นามสกุล :' }, { name: 'ที่อยู่ :' }, { name: 'เลขบัตรประชาชน :' }, { name: 'เชื้อชาติ :' }, { name: 'ศาสนา :' }, { name: 'กรุ๊ปเลือด :' }, { name: 'ที่อยู่ :' }];
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.back = function () {
        this.modalcontoroller.dismiss();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditProfilePage.prototype, "data", void 0);
    EditProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.page.html',
            styleUrls: ['./edit-profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            ModalController])
    ], EditProfilePage);
    return EditProfilePage;
}());
export { EditProfilePage };
//# sourceMappingURL=edit-profile.page.js.map