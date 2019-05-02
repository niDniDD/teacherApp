import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoryPortfolioPage } from './history-portfolio.page';
var routes = [
    {
        path: '',
        component: HistoryPortfolioPage
    }
];
var HistoryPortfolioPageModule = /** @class */ (function () {
    function HistoryPortfolioPageModule() {
    }
    HistoryPortfolioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoryPortfolioPage]
        })
    ], HistoryPortfolioPageModule);
    return HistoryPortfolioPageModule;
}());
export { HistoryPortfolioPageModule };
//# sourceMappingURL=history-portfolio.module.js.map