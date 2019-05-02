import * as tslib_1 from "tslib";
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var StudentService = /** @class */ (function () {
    function StudentService(httpclient) {
        this.httpclient = httpclient;
    }
    StudentService.prototype.authorizationHeader = function () {
        var token = window.localStorage.getItem('@token');
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return headers;
    };
    StudentService.prototype.getStudentById = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/student-yeartermclassclassroom', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.getPortfolio = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/portfolio-condition', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.getData = function () {
        return this.httpclient.get('../assets/student.json').toPromise();
    };
    StudentService.prototype.getStudent = function (citizenid) {
        return this.httpclient.get(environment.apiUrl + '/api/student-detail/' + citizenid, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.getRoom = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/staff-getroom', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.getWeightHeight = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/education-personality', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.getDevelopment = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/get-education-development', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.saveWeightHeight = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/education-savepersonality', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.saveGrade = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/education-savegrade', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService.prototype.saveDevelopment = function (body) {
        return this.httpclient.post(environment.apiUrl + '/api/save-development', body, { headers: this.authorizationHeader() }).toPromise();
    };
    StudentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StudentService);
    return StudentService;
}());
export { StudentService };
//# sourceMappingURL=student.service.js.map