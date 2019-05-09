import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProtfolioPage } from './protfolio.page';
var routes = [
    {
        path: '',
        component: ProtfolioPage
    }
];
var ProtfolioPageModule = /** @class */ (function () {
    function ProtfolioPageModule() {
    }
    ProtfolioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProtfolioPage]
        })
    ], ProtfolioPageModule);
    return ProtfolioPageModule;
}());
export { ProtfolioPageModule };
//# sourceMappingURL=protfolio.module.js.map