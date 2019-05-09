import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoryHeightWeightPage } from './history-height-weight.page';
var routes = [
    {
        path: '',
        component: HistoryHeightWeightPage
    }
];
var HistoryHeightWeightPageModule = /** @class */ (function () {
    function HistoryHeightWeightPageModule() {
    }
    HistoryHeightWeightPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoryHeightWeightPage]
        })
    ], HistoryHeightWeightPageModule);
    return HistoryHeightWeightPageModule;
}());
export { HistoryHeightWeightPageModule };
//# sourceMappingURL=history-height-weight.module.js.map