import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var ScoreService = /** @class */ (function () {
    function ScoreService(httpclient) {
        this.httpclient = httpclient;
    }
    ScoreService.prototype.getdatascore = function () {
        return this.httpclient.get('../../../assets/score.json').toPromise();
    };
    ScoreService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ScoreService);
    return ScoreService;
}());
export { ScoreService };
//# sourceMappingURL=score.service.js.map