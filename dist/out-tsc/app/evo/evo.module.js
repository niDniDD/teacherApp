import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EvoPage } from './evo.page';
var routes = [
    {
        path: '',
        component: EvoPage
    },
];
var EvoPageModule = /** @class */ (function () {
    function EvoPageModule() {
    }
    EvoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EvoPage]
        })
    ], EvoPageModule);
    return EvoPageModule;
}());
export { EvoPageModule };
//# sourceMappingURL=evo.module.js.map