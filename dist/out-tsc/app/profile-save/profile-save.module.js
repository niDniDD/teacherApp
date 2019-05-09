import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileSavePage } from './profile-save.page';
var routes = [
    {
        path: '',
        component: ProfileSavePage
    }
];
var ProfileSavePageModule = /** @class */ (function () {
    function ProfileSavePageModule() {
    }
    ProfileSavePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfileSavePage]
        })
    ], ProfileSavePageModule);
    return ProfileSavePageModule;
}());
export { ProfileSavePageModule };
//# sourceMappingURL=profile-save.module.js.map