import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PortfolioSavePage } from './portfolio-save.page';
var routes = [
    {
        path: '',
        component: PortfolioSavePage
    }
];
var PortfolioSavePageModule = /** @class */ (function () {
    function PortfolioSavePageModule() {
    }
    PortfolioSavePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PortfolioSavePage]
        })
    ], PortfolioSavePageModule);
    return PortfolioSavePageModule;
}());
export { PortfolioSavePageModule };
//# sourceMappingURL=portfolio-save.module.js.map