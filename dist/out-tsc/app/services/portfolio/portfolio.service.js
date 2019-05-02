import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PortfolioService = /** @class */ (function () {
    function PortfolioService(httpclient) {
        this.httpclient = httpclient;
    }
    PortfolioService.prototype.getData = function () {
        return this.httpclient.get('../assets/portfolio.json').toPromise();
    };
    PortfolioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PortfolioService);
    return PortfolioService;
}());
export { PortfolioService };
//# sourceMappingURL=portfolio.service.js.map