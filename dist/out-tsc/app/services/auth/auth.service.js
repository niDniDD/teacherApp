import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authorizationHeader = function () {
        var token = window.localStorage.getItem('@token');
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return headers;
    };
    AuthService.prototype.onSignin = function (body) {
        return this.http.post(environment.apiUrl + '/api/auth/signin', body).toPromise();
    };
    AuthService.prototype.getUser = function () {
        return this.http.get(environment.apiUrl + '/api/user-school', { headers: this.authorizationHeader() }).toPromise();
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map