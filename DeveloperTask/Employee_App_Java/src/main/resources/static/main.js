(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-employee/edit-employee.component */ "./src/app/components/edit-employee/edit-employee.component.ts");






const routes = [
    { path: '', component: src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'edit', component: _components_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu>\n</app-menu>\n<br><br>\n\n<div class=\"container container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n\n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'EmployeeApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-employee/edit-employee.component */ "./src/app/components/edit-employee/edit-employee.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_12__["EditEmployeeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\" class=\"form-horizontal\">\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-1\"> <label for=\"employeeID\" class=\"col-lg-2 control-label\"> <b>ID</b></label></div>\n                <div class=\"col-3\"><input type=\"text\" class=\"form-control\" id=\"employeeID\" placeholder=\"ID..\" name='employeeID' [(ngModel)]='employeeID' /></div>\n                <div class=\"col-2\"><label for=\"employeeName\" class=\"col-lg-2 control-label\"> <b>Name</b></label></div>\n                <div class=\"col-4\"><input type=\"text\" class=\"form-control\" id=\"employeeName\" placeholder=\"Name..\" name='employeeName' [(ngModel)]='employeeName' /></div>\n                <div class=\"col-2\"><button type='submit' class=\"btn btn-primary\">Search</button></div>\n            </div>\n        </div>\n    </fieldset>\n</form>\n<br>\n<br>\n<br>\n<br>\n<div align=right class=\"col-lg-10 \">\n    <button type='button' class=\"btn btn-primary\" (click)=\"createNew()\">Add New Employee</button>\n</div>\n<div align='center'>\n    <table class=\"table table-striped table-hover \">\n        <thead>\n            <tr>\n                <th *ngFor=\"let header of headers\">{{header}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let p of listemployees\">\n                <td>{{p.id}}</td>\n                <td>{{p.name}}</td>\n                <td>{{p.phoneNumber}}</td>\n                <td>{{p.supervisor}}</td>\n                <td><a [routerLink]=\"\" (click)=\"editEmployee(p)\" class='btn btn-outline-success'>Edit</a></td>\n                <td><a [routerLink]=\"\" (click)=\"deleteEmployee(p)\" class='btn btn-outline-danger'>Delete</a></td>\n\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_entities_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/employee */ "./src/app/entities/employee.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.headers = ['ID', 'NAME', 'PHONE NUMBER', 'SUPERVISOR', '', ''];
        this.now = new Date();
    }
    reloadData() {
        /*	this.service.findAll().subscribe(
                response => {
                    this.listemployees = response;
                }
            );
        */
        const employee = new src_app_entities_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](this.employeeID, this.employeeName, '', '');
        this.service.searchEmployee(employee).subscribe(response => {
            this.listemployees = response;
        });
    }
    ngOnInit() {
        this.reloadData();
    }
    onSubmit() {
        const employee = new src_app_entities_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](this.employeeID, this.employeeName, '', '');
        this.service.searchEmployee(employee).subscribe(response => {
            this.listemployees = response;
        });
    }
    editEmployee(employee) {
        console.log(employee);
        this.service.editEmployee = employee;
        this.router.navigate(['edit']);
    }
    createNew() {
        console.log('create new');
        this.service.editEmployee = new src_app_entities_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](-1, '', '', '');
        this.router.navigate(['edit']);
    }
    deleteEmployee(employee) {
        console.log(employee.id);
        this.service.deleteById(employee.id).subscribe(data => {
            this.reloadData();
        });
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-employee/edit-employee.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1lbXBsb3llZS9lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-employee/edit-employee.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small *ngIf='!valid'>{{validMsg}}</small>\n<form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\" class=\"form-horizontal\">\n    <fieldset>\n        <div align='center'>\n            <legend>Edit</legend>\n        </div>\n        <div align='center'>\n            <div class=\"form-group\">\n                <label align='left' for=\"name\" class=\"col-lg-2 control-label\">Name</label>\n                <div class=\"col-lg-2\">\n                    <input type=\"text\" class=\"form-control\" id=\"name\" name='name' [(ngModel)]='service.editEmployee.name' />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label align='left' for=\"phoneNumber\" class=\"col-lg-2 control-label\">Phone Number</label>\n                <div class=\"col-lg-2\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputPassword\" name='phoneNumber' [(ngModel)]='service.editEmployee.phoneNumber' />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label align='left' for=\"supervisor\" class=\"col-lg-2 control-label\">Supervisor</label>\n                <div class=\"col-lg-2\">\n                    <input type=\"text\" class=\"form-control\" id=\"supervisor\" name='password' [(ngModel)]='service.editEmployee.supervisor' />\n                </div>\n            </div>\n            <br>\n            <br>\n            <div class=\"form-group\">\n                <div align=center class=\"col-lg-10 col-lg-offset-4 \">\n                    <button type='submit' class=\"btn btn-primary mr-2 mb-2\">Save</button>\n                </div>\n            </div>\n            <div align=center class=\"col-lg-10 col-lg-offset-4 \">\n                <button type='button' class=\"btn btn-primary mr-2 mb-2\" (click)=\"goToDashBoard()\">Cancel</button>\n            </div>\n        </div>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-employee/edit-employee.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");





let EditEmployeeComponent = class EditEmployeeComponent {
    constructor(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.valid = true;
        this.validMsg = 'error';
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.service.editEmployee);
        this.service.save(this.service.editEmployee).subscribe(response => {
            if (response === undefined) {
                this.validMsg = 'error while saving data';
                this.valid = false;
            }
            else {
                this.validMsg = '';
                this.valid = true;
                this.service.editEmployee = null;
                this.router.navigate(['dashboard']);
            }
        });
    }
    goToDashBoard() {
        this.router.navigate(['dashboard']);
    }
};
EditEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-employee',
        template: __webpack_require__(/*! ./edit-employee.component.html */ "./src/app/components/edit-employee/edit-employee.component.html"),
        styles: [__webpack_require__(/*! ./edit-employee.component.css */ "./src/app/components/edit-employee/edit-employee.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], EditEmployeeComponent);



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div align='center' class=\"\">\n        <span class=\"text-muted\"></span>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\" class=\"form-horizontal\">\n    <fieldset>\n        <div align='center'>\n            <legend>Login</legend>\n        </div>\n        <div align='center'>\n            <div class=\"form-group\">\n                <label align='left' for=\"inputEmail\" class=\"col-lg-2 control-label\">Username</label>\n                <div class=\"col-lg-2\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter mail..\" name='username' [(ngModel)]='username' />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label align='left' for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n                <div class=\"col-lg-2\">\n                    <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Enter passwd..\" name='password' [(ngModel)]='password' />\n                </div>\n            </div>\n            <div align='center'>\n                <p class=\"text-danger\">\n                    <small *ngIf='!valid'>{{validMsg}}</small>\n                </p>\n            </div>\n            <br>\n            <br>\n            <div class=\"form-group\">\n                <div align=center class=\"col-lg-10 col-lg-offset-2\">\n                    <button type='submit' [disabled]=\"!userForm.form.valid\" class=\"btn btn-primary\">Login</button>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_entities_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/user */ "./src/app/entities/user.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");






let LoginComponent = class LoginComponent {
    constructor(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.valid = true;
        this.validMsg = 'error';
        this.validateUrl = 'http://localhost:8080/validate/';
    }
    ngOnInit() {
    }
    validateUser(user) {
        return this.http.post(this.validateUrl, user);
    }
    onSubmit() {
        const user = new src_app_entities_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.username, this.password);
        this.validateUser(user).subscribe((response) => {
            console.log(response.username);
            console.log(response.jwtToken);
            sessionStorage.setItem('userAuth', response.jwtToken);
            console.log(response);
            if (response.jwtToken !== '') {
                this.valid = true;
                this.validMsg = '';
                console.log('Login Success');
                this.router.navigate(['dashboard']);
            }
            else {
                console.log('Failed ');
                this.valid = false;
                this.validMsg = 'Invalid UserName and  Password';
                console.log(this.validMsg);
            }
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n        <a class=\"navbar-brand\" routerLink=\"/login\">CompositeApp</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t    <span class=\"navbar-toggler-icon\"></span>\n\t  </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li *ngIf=\"isUserLoggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard\">List Employees</a>\n                </li>\n            </ul>\n            <ul class='navbar-nav navbar-collapse justify-content-end'>\n                <li *ngIf=\"!isUserLoggedIn()\">\n                    <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n                </li>\n                <li *ngIf=\"isUserLoggedIn()\">\n                    <a class=\"nav-link\" (click)='logout()' routerLink=\"/\">Logout</a>\n                </li>\n            </ul>\n            <div class=\"form-inline my-2 my-lg-0\">\n\n            </div>\n        </div>\n    </nav>\n\n</header>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");



let MenuComponent = class MenuComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    isUserLoggedIn() {
        return this.service.isUserLoggedIn();
    }
    logout() {
        this.service.logout();
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/entities/employee.ts":
/*!**************************************!*\
  !*** ./src/app/entities/employee.ts ***!
  \**************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
class Employee {
    constructor(id, name, phoneNumber, supervisor) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.supervisor = supervisor;
    }
}


/***/ }),

/***/ "./src/app/entities/user.ts":
/*!**********************************!*\
  !*** ./src/app/entities/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/employees';
    }
    findAll() {
        return this.http.get(this.url);
    }
    searchEmployee(employee) {
        return this.http.post(this.url + '/search', employee);
    }
    validateUser(user) {
        return this.http.post(this.validateUrl, user);
    }
    save(employee) {
        return this.http.post(this.url + '/save', employee);
    }
    deleteById(id) {
        console.log(id);
        return this.http.delete(this.url + '/delete/' + id);
    }
    isUserLoggedIn() {
        const user = sessionStorage.getItem('userAuth');
        return !(user === null);
    }
    logout() {
        sessionStorage.removeItem('userAuth');
    }
};
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EmployeeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CompositeApp\EmployeeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map