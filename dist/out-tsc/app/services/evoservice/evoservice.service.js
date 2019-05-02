import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EvoserviceService = /** @class */ (function () {
    function EvoserviceService(httpclient) {
        this.httpclient = httpclient;
    }
    EvoserviceService.prototype.getdata = function () {
        return this.httpclient.get("../../../assets/evo.json").toPromise();
    };
    EvoserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EvoserviceService);
    return EvoserviceService;
}());
export { EvoserviceService };
//# sourceMappingURL=evoservice.service.js.map