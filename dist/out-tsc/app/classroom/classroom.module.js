import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClassroomPage } from './classroom.page';
var routes = [
    {
        path: '',
        component: ClassroomPage
    }
];
var ClassroomPageModule = /** @class */ (function () {
    function ClassroomPageModule() {
    }
    ClassroomPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ClassroomPage]
        })
    ], ClassroomPageModule);
    return ClassroomPageModule;
}());
export { ClassroomPageModule };
//# sourceMappingURL=classroom.module.js.map