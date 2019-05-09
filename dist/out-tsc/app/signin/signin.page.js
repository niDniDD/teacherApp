import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { NavController } from '@ionic/angular';
var SigninPage = /** @class */ (function () {
    function SigninPage(auth, route) {
        this.auth = auth;
        this.route = route;
        this.username = '';
        this.password = '';
    }
    SigninPage.prototype.ngOnInit = function () {
        this.token = window.localStorage.getItem('@token');
        if (this.token) {
            this.route.navigateForward("/classroom");
        }
    };
    SigninPage.prototype.signin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body, res, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = {
                            username: this.username,
                            password: this.password
                        };
                        return [4 /*yield*/, this.auth.onSignin(body)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        window.localStorage.setItem('@token', res.token);
                        if (res) {
                            this.route.navigateForward("/classroom");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SigninPage = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            NavController])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.page.js.map