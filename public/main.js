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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var _pages_plannings_plannings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/plannings/plannings.component */ "./src/app/pages/plannings/plannings.component.ts");
/* harmony import */ var _pages_planoverview_planoverview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/planoverview/planoverview.component */ "./src/app/pages/planoverview/planoverview.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_httpInterceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/httpInterceptor.service */ "./src/app/services/httpInterceptor.service.ts");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./configs */ "./src/app/configs.ts");
/* harmony import */ var _pages_planoverview_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/planoverview/overview/overview.component */ "./src/app/pages/planoverview/overview/overview.component.ts");
/* harmony import */ var _pages_planoverview_route_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/planoverview/route/route.component */ "./src/app/pages/planoverview/route/route.component.ts");
/* harmony import */ var _pages_planoverview_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/planoverview/calendar/calendar.component */ "./src/app/pages/planoverview/calendar/calendar.component.ts");
/* harmony import */ var _components_fileupload_file_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/fileupload/file-upload.component */ "./src/app/components/fileupload/file-upload.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _pages_planoverview_files_files_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/planoverview/files/files.component */ "./src/app/pages/planoverview/files/files.component.ts");
/* harmony import */ var _pages_planoverview_share_share_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/planoverview/share/share.component */ "./src/app/pages/planoverview/share/share.component.ts");
/* harmony import */ var _pages_planoverview_money_money_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/planoverview/money/money.component */ "./src/app/pages/planoverview/money/money.component.ts");
/* harmony import */ var _components_places_input_places_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/places-input/places-input.component */ "./src/app/components/places-input/places-input.component.ts");
/* harmony import */ var _pages_planoverview_stepdetail_stepdetail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/planoverview/stepdetail/stepdetail.component */ "./src/app/pages/planoverview/stepdetail/stepdetail.component.ts");
/* harmony import */ var _pages_planoverview_images_images_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/planoverview/images/images.component */ "./src/app/pages/planoverview/images/images.component.ts");
/* harmony import */ var _directives_httpSrc_httpSrc_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/httpSrc/httpSrc.directive */ "./src/app/directives/httpSrc/httpSrc.directive.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _components_plan_files_plan_files_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/plan-files/plan-files.component */ "./src/app/components/plan-files/plan-files.component.ts");
/* harmony import */ var _components_step_files_step_files_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/step-files/step-files.component */ "./src/app/components/step-files/step-files.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_fileupload_file_upload_component__WEBPACK_IMPORTED_MODULE_21__["FileUploadComponent"],
                _components_places_input_places_input_component__WEBPACK_IMPORTED_MODULE_26__["PlacesInputComponent"],
                _components_plan_files_plan_files_component__WEBPACK_IMPORTED_MODULE_31__["PlanFilesComponent"],
                _components_step_files_step_files_component__WEBPACK_IMPORTED_MODULE_32__["StepFilesComponent"],
                _directives_httpSrc_httpSrc_directive__WEBPACK_IMPORTED_MODULE_29__["HttpSrcDirective"],
                _app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
                _pages_start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
                _pages_plannings_plannings_component__WEBPACK_IMPORTED_MODULE_11__["PlanningsComponent"],
                _pages_planoverview_planoverview_component__WEBPACK_IMPORTED_MODULE_12__["PlanoverviewComponent"],
                _pages_planoverview_stepdetail_stepdetail_component__WEBPACK_IMPORTED_MODULE_27__["StepDetailComponent"],
                _pages_planoverview_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__["OverviewComponent"],
                _pages_planoverview_route_route_component__WEBPACK_IMPORTED_MODULE_19__["RouteComponent"],
                _pages_planoverview_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__["CalendarComponent"],
                _pages_planoverview_files_files_component__WEBPACK_IMPORTED_MODULE_23__["FilesComponent"],
                _pages_planoverview_images_images_component__WEBPACK_IMPORTED_MODULE_28__["ImagesComponent"],
                _pages_planoverview_share_share_component__WEBPACK_IMPORTED_MODULE_24__["ShareComponent"],
                _pages_planoverview_money_money_component__WEBPACK_IMPORTED_MODULE_25__["MoneyComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: _configs__WEBPACK_IMPORTED_MODULE_17__["Configs"].mapsApiKey
                })
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _services_httpInterceptor_service__WEBPACK_IMPORTED_MODULE_15__["HttpInterceptorService"],
                    multi: true
                },
                _services_planning_service__WEBPACK_IMPORTED_MODULE_16__["PlanningService"],
                _services_file_service__WEBPACK_IMPORTED_MODULE_22__["FileService"]
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var _pages_plannings_plannings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/plannings/plannings.component */ "./src/app/pages/plannings/plannings.component.ts");
/* harmony import */ var _pages_planoverview_planoverview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/planoverview/planoverview.component */ "./src/app/pages/planoverview/planoverview.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_planoverview_share_share_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/planoverview/share/share.component */ "./src/app/pages/planoverview/share/share.component.ts");
/* harmony import */ var _pages_planoverview_stepdetail_stepdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/planoverview/stepdetail/stepdetail.component */ "./src/app/pages/planoverview/stepdetail/stepdetail.component.ts");
/* harmony import */ var _pages_planoverview_images_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/planoverview/images/images.component */ "./src/app/pages/planoverview/images/images.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: '',
        component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"],
        pathMatch: 'full'
    }, {
        path: 'callback',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        pathMatch: 'full'
    }, {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        pathMatch: 'full'
    },
    {
        path: 'plannings',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _pages_plannings_plannings_component__WEBPACK_IMPORTED_MODULE_3__["PlanningsComponent"]
    },
    {
        path: 'planoverview/:id',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _pages_planoverview_planoverview_component__WEBPACK_IMPORTED_MODULE_4__["PlanoverviewComponent"]
    },
    {
        path: 'share/:id',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _pages_planoverview_share_share_component__WEBPACK_IMPORTED_MODULE_7__["ShareComponent"]
    },
    {
        path: 'stepdetails/:planid/:stepid',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _pages_planoverview_stepdetail_stepdetail_component__WEBPACK_IMPORTED_MODULE_8__["StepDetailComponent"]
    },
    {
        path: 'images/:id',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _pages_planoverview_images_images_component__WEBPACK_IMPORTED_MODULE_9__["ImagesComponent"]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.getAccessToken()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/fileupload/file-upload.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/fileupload/file-upload.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{ color: #f00; }\r\n.dragarea{\r\n    font-size: 20px;\r\n    border: 3px solid #bbb; \r\n    padding: 20px ;\r\n    background-color: #fff;\r\n    color: #bbb;\r\n}\r\n.dragarea a{\r\n    font-size: 14px;\r\n}\r\n.droparea{\r\n    font-size: 20px;\r\n    border: 3px dashed #bbb; \r\n    padding: 20px ;\r\n    background-color: #eff;\r\n    color: #aaa;\r\n}"

/***/ }),

/***/ "./src/app/components/fileupload/file-upload.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/fileupload/file-upload.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n            {{infoText}}\r\n            <a href=\"javascript:void(0)\" (click)=\"file.click()\">\r\n                (Or click to browse)\r\n            </a>\r\n            <input type=\"file\" #file [multiple]=\"(maxFiles > 1)\" (change)=\"onFileChange($event)\" style=\"display:none\" />\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"row error\" *ngIf=\"errors.length > 0\">\r\n    <ul>\r\n        <li *ngFor=\"let err of errors\">{{err}}</li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/fileupload/file-upload.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/fileupload/file-upload.component.ts ***!
  \****************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs */ "./src/app/configs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadComponent = (function () {
    function FileUploadComponent(fileService) {
        this.fileService = fileService;
        this.errors = [];
        this.dragAreaClass = 'dragarea';
        this.fileExt = "JPG, GIF, PNG, PDF";
        this.maxFiles = 5;
        this.maxSize = 5; // 5MB
        this.saveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        if (!this.infoText) {
            this.infoText = "Drag & Drop to upload your files";
        }
    };
    FileUploadComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        this.saveFiles(files);
    };
    FileUploadComponent.prototype.onDragOver = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragEnter = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragEnd = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragLeave = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDrop = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        var files = event.dataTransfer.files;
        this.saveFiles(files);
    };
    FileUploadComponent.prototype.saveFiles = function (files) {
        var _this = this;
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        if (files.length > 0 && (!this.isValidFiles(files))) {
            this.uploadStatus.emit(false);
            return;
        }
        if (files.length > 0) {
            var formData = new FormData();
            for (var j = 0; j < files.length; j++) {
                formData.append("file" + j, files[j], files[j].name);
            }
            // todo:
            // formData.append("projectid", myval);
            formData.append("plan", this.plan);
            formData.append("url", _configs__WEBPACK_IMPORTED_MODULE_2__["Configs"].fileUrl);
            this.fileService.upload(this.url, formData)
                .subscribe(function (success) {
                _this.uploadStatus.emit(true);
                _this.saveCallback.emit(success);
                console.log(success);
            }, function (error) {
                _this.uploadStatus.emit(false);
                _this.errors.push(error.ExceptionMessage);
            });
        }
    };
    FileUploadComponent.prototype.isValidFiles = function (files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    };
    FileUploadComponent.prototype.isValidFileExtension = function (files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push("Error (Extension): " + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    };
    FileUploadComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "plan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "infoText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "fileExt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FileUploadComponent.prototype, "maxFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FileUploadComponent.prototype, "maxSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "saveCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "uploadStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "onDragEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "onDragEnd", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "onDragLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "onDrop", null);
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/components/fileupload/file-upload.component.css")],
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/components/fileupload/file-upload.component.html")
        }),
        __metadata("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/places-input/places-input.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/places-input/places-input.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/places-input/places-input.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/places-input/places-input.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input \r\n        matInput \r\n        #box\r\n        [matAutocomplete]=\"suggestList\" \r\n        (keyup)=\"stepKeyUp(box.value);\" \r\n        type=\"text\" \r\n        placeholder=\"{{placeholderInput}}\"\r\n        value={{inputValue}}\r\n        (input)=\"inputChange(box.value)\"\r\n        >\r\n</mat-form-field>\r\n\r\n<!-- [ngModel]=inputValue -->\r\n<!-- value={{inputValue}} -->\r\n\r\n<mat-autocomplete #suggestList=\"matAutocomplete\" [displayWith]=\"displaySuggest\">\r\n    <mat-option (onSelectionChange)=\"suggestlistSelectionChanged(suggest)\" *ngFor=\"let suggest of suggestlist\" [value]=\"suggest\">\r\n        {{ suggest.description }}\r\n    </mat-option>\r\n</mat-autocomplete>\r\n"

/***/ }),

/***/ "./src/app/components/places-input/places-input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/places-input/places-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlacesInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesInputComponent", function() { return PlacesInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs */ "./src/app/configs.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Todo */ "./src/app/models/Todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesInputComponent = (function () {
    function PlacesInputComponent(http) {
        this.http = http;
        this.errors = [];
        this.suggestlist = [];
        this.useGoogle = false;
        this.placeholderInput = "Where do you wanna stop?";
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PlacesInputComponent.prototype.ngOnInit = function () {
    };
    PlacesInputComponent.prototype.inputChange = function (event) {
        var todo = new _models_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        todo.title = event;
        this.selectionChanged.emit(todo);
    };
    PlacesInputComponent.prototype.stepKeyUp = function (value) {
        var _this = this;
        var newTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        newTodo.title = value;
        this.selectionChanged.emit(newTodo);
        if (!this.useGoogle)
            return;
        clearTimeout(this.searchTimer);
        this.searchPlaces(value, function (suggestlist) {
            _this.suggestlist = suggestlist;
        });
    };
    PlacesInputComponent.prototype.suggestlistSelectionChanged = function (suggest) {
        var _this = this;
        this.placeDetails(suggest.place_id, function (place) {
            var newTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
            newTodo.title = suggest.description;
            newTodo.location = place.geometry.location;
            _this.selectionChanged.emit(newTodo);
        });
    };
    PlacesInputComponent.prototype.displaySuggest = function (suggest) {
        return suggest ? suggest.description : suggest;
    };
    PlacesInputComponent.prototype.searchPlaces = function (query, cb) {
        var _this = this;
        if (!query) {
            return;
        }
        this.searchTimer = setTimeout(function () {
            var url = _configs__WEBPACK_IMPORTED_MODULE_1__["Configs"].placesAutocompleteUrl + '?q=' + encodeURIComponent(query);
            _this.http.get(url).subscribe(function (res) {
                cb(res.predictions);
            });
        }, 2000);
    };
    PlacesInputComponent.prototype.placeDetails = function (placeid, cb) {
        var url = _configs__WEBPACK_IMPORTED_MODULE_1__["Configs"].placesDetailsUrl + '?placeid=' + placeid;
        this.http.get(url).subscribe(function (res) {
            cb(res.result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesInputComponent.prototype, "useGoogle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesInputComponent.prototype, "inputValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlacesInputComponent.prototype, "placeholderInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlacesInputComponent.prototype, "selectionChanged", void 0);
    PlacesInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'places-input',
            styles: [__webpack_require__(/*! ./places-input.component.css */ "./src/app/components/places-input/places-input.component.css")],
            template: __webpack_require__(/*! ./places-input.component.html */ "./src/app/components/places-input/places-input.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlacesInputComponent);
    return PlacesInputComponent;
}());



/***/ }),

/***/ "./src/app/components/plan-files/plan-files.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/plan-files/plan-files.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/plan-files/plan-files.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/plan-files/plan-files.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <ul *ngIf=\"plan.files\">\r\n        <li *ngFor=\"let file of plan.files; let i = index\">\r\n            <span (click)=\"downloadFile(file)\">{{i + 1}}. {{file.filename}}</span>\r\n            <button mat-raised-button (click)=\"deleteFileFromPlan(i)\">delete</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/plan-files/plan-files.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/plan-files/plan-files.component.ts ***!
  \***************************************************************/
/*! exports provided: PlanFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFilesComponent", function() { return PlanFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _models_Planing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Planing */ "./src/app/models/Planing.ts");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/planning.service */ "./src/app/services/planning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanFilesComponent = (function () {
    function PlanFilesComponent(fileService, planningService) {
        this.fileService = fileService;
        this.planningService = planningService;
    }
    PlanFilesComponent.prototype.ngOnInit = function () { };
    PlanFilesComponent.prototype.downloadFile = function (file) {
        this.fileService.downloadFile(file);
    };
    PlanFilesComponent.prototype.deleteFileFromPlan = function (index) {
        this.planningService.deleteFileFromPlan(this.plan, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Planing__WEBPACK_IMPORTED_MODULE_2__["Planning"])
    ], PlanFilesComponent.prototype, "plan", void 0);
    PlanFilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'plan-files',
            styles: [__webpack_require__(/*! ./plan-files.component.css */ "./src/app/components/plan-files/plan-files.component.css")],
            template: __webpack_require__(/*! ./plan-files.component.html */ "./src/app/components/plan-files/plan-files.component.html")
        }),
        __metadata("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], PlanFilesComponent);
    return PlanFilesComponent;
}());



/***/ }),

/***/ "./src/app/components/step-files/step-files.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/step-files/step-files.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/step-files/step-files.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/step-files/step-files.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n    <ul *ngIf=\"step.files\">\r\n        <li *ngFor=\"let file of step.files; let i = index\">\r\n            <span (click)=\"downloadFile(file)\">{{i + 1}}. {{file.filename}}</span> <button (click)=\"deleteFileFromStep(i, step)\">delete</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/step-files/step-files.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/step-files/step-files.component.ts ***!
  \***************************************************************/
/*! exports provided: StepFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFilesComponent", function() { return StepFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _models_Step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Step */ "./src/app/models/Step.ts");
/* harmony import */ var _models_Planing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Planing */ "./src/app/models/Planing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StepFilesComponent = (function () {
    function StepFilesComponent(fileService, planningService) {
        this.fileService = fileService;
        this.planningService = planningService;
    }
    StepFilesComponent.prototype.ngOnInit = function () { };
    StepFilesComponent.prototype.downloadFile = function (file) {
        this.fileService.downloadFile(file);
    };
    StepFilesComponent.prototype.deleteFileFromStep = function (index, step) {
        this.findStep(step._id, function (step) {
            step.files.splice(index, 1);
        });
        this.planningService.setPlanning(this.plan);
    };
    StepFilesComponent.prototype.findStep = function (stepid, cb) {
        this.plan.steps.forEach(function (step) {
            if (step._id == stepid) {
                cb(step);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Planing__WEBPACK_IMPORTED_MODULE_4__["Planning"])
    ], StepFilesComponent.prototype, "plan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Step__WEBPACK_IMPORTED_MODULE_3__["Step"])
    ], StepFilesComponent.prototype, "step", void 0);
    StepFilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'step-files',
            styles: [__webpack_require__(/*! ./step-files.component.css */ "./src/app/components/step-files/step-files.component.css")],
            template: __webpack_require__(/*! ./step-files.component.html */ "./src/app/components/step-files/step-files.component.html")
        }),
        __metadata("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_2__["PlanningService"]])
    ], StepFilesComponent);
    return StepFilesComponent;
}());



/***/ }),

/***/ "./src/app/configs.ts":
/*!****************************!*\
  !*** ./src/app/configs.ts ***!
  \****************************/
/*! exports provided: Configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configs", function() { return Configs; });
var Configs = (function () {
    function Configs() {
    }
    Configs.mapsApiKey = 'AIzaSyAcLB4ukiK5M2tuVLK4P2kIyib7vUDt_r8';
    //public static baseUrl = 'http://localhost:4200';
    Configs.baseUrl = 'https://hidden-taiga-84499.herokuapp.com';
    Configs.loginUrl = Configs.baseUrl + '/login';
    Configs.registerUrl = Configs.baseUrl + '/register';
    Configs.planningsUrl = Configs.baseUrl + '/plannings';
    Configs.placesAutocompleteUrl = Configs.baseUrl + '/places/autocomplete';
    Configs.placesSearchUrl = Configs.baseUrl + '/places/search';
    Configs.placesDetailsUrl = Configs.baseUrl + '/places/details';
    Configs.placesPhotoUrl = Configs.baseUrl + '/places/photo';
    Configs.placesDistanceUrl = Configs.baseUrl + '/places/distance';
    Configs.fileUrl = Configs.baseUrl + '/file';
    // public static fileGetImagesUrl = Configs.baseUrl + '/file/images';
    Configs.shareUrl = Configs.baseUrl + '/share';
    return Configs;
}());



/***/ }),

/***/ "./src/app/directives/httpSrc/httpSrc.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/httpSrc/httpSrc.directive.ts ***!
  \*********************************************************/
/*! exports provided: HttpSrcDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpSrcDirective", function() { return HttpSrcDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpSrcDirective = (function () {
    function HttpSrcDirective(http, element) {
        this.http = http;
        this.element = element;
        // function revokeObjectURL() {
        //   if (element.nativeElement.objectURL) {
        //     URL.revokeObjectURL(element.nativeElement.objectURL);
        //   }
        // }
        //setTimeout(this.downloadFile, 10)
    }
    HttpSrcDirective.prototype.ngOnInit = function () {
        this.downloadFile();
    };
    HttpSrcDirective.prototype.downloadFile = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Accept', 'text/plain');
        this.http.get(this.imageUrl, { headers: headers, responseType: 'blob' }).subscribe(function (resp) {
            var blob = new Blob([resp], { type: resp.type });
            _this.element.nativeElement.src = URL.createObjectURL(blob);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('httpSrc'),
        __metadata("design:type", String)
    ], HttpSrcDirective.prototype, "imageUrl", void 0);
    HttpSrcDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[httpSrc]'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HttpSrcDirective);
    return HttpSrcDirective;
}());



/***/ }),

/***/ "./src/app/models/Cost.ts":
/*!********************************!*\
  !*** ./src/app/models/Cost.ts ***!
  \********************************/
/*! exports provided: Cost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cost", function() { return Cost; });
var Cost = (function () {
    function Cost() {
    }
    return Cost;
}());



/***/ }),

/***/ "./src/app/models/Distance.ts":
/*!************************************!*\
  !*** ./src/app/models/Distance.ts ***!
  \************************************/
/*! exports provided: Distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return Distance; });
var Distance = (function () {
    function Distance() {
    }
    return Distance;
}());



/***/ }),

/***/ "./src/app/models/Planing.ts":
/*!***********************************!*\
  !*** ./src/app/models/Planing.ts ***!
  \***********************************/
/*! exports provided: Planning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planning", function() { return Planning; });
var Planning = (function () {
    function Planning() {
    }
    return Planning;
}());



/***/ }),

/***/ "./src/app/models/Step.ts":
/*!********************************!*\
  !*** ./src/app/models/Step.ts ***!
  \********************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
var Step = (function () {
    function Step() {
        this.todos = [];
    }
    return Step;
}());



/***/ }),

/***/ "./src/app/models/Todo.ts":
/*!********************************!*\
  !*** ./src/app/models/Todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>It seems you need to login again</h2>\r\n\r\n<h3>At the moment you can only login with your google account. More Provider will be added soon ...</h3>\r\n\r\n\r\n\r\n<h4>Login with E-Mail</h4>\r\n<mat-form-field>\r\n    <input matInput [(ngModel)]=\"emailAdress\" type=\"email\" placeholder=\"Your email adress\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n    <input matInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"Your password\">\r\n</mat-form-field>\r\n\r\n<button mat-raised-button (click)=\"login()\">Login</button>\r\n\r\n\r\n<h4><a target=\"_self\" rel=\"noopener\" href=\"/register\">Register with E-Mail</a></h4>\r\n\r\n\r\n<h4><a target=\"_self\" rel=\"noopener\" href=\"http://localhost:4200/auth/google\">Login with Google</a></h4>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs */ "./src/app/configs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(http, route, router, authService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .filter(function (params) { return params.access_token; })
            .subscribe(function (params) {
            var token = params.access_token;
            if (token) {
                _this.authService.setAccessToken(token);
                _this.router.navigate(['plannings']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var loginUser = {
            email: this.emailAdress,
            password: this.password
        };
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_5__["Configs"].loginUrl, loginUser)
            .subscribe(function (resp) {
            _this.authService.setAccessToken(resp.token);
            _this.router.navigate(['plannings']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/plannings/plannings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/plannings/plannings.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-grid-tile {\r\n    /* border: 1px dotted #bbb; */\r\n}\r\n\r\n.mat-form-field{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/pages/plannings/plannings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/plannings/plannings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <span>Your Plannings</span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n\r\n\r\n\r\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n    <mat-grid-tile (click)=\"goto(plan._id)\" *ngFor=\"let plan of plannings\">\r\n        {{plan.title}}\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n\r\n\r\n<mat-grid-list cols=\"4\" rowHeight=\"5em\">\r\n    <mat-grid-tile colspan=\"3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [(ngModel)]=\"name\" placeholder=\"Name for next trip ..\">\r\n                </mat-form-field>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n        <button mat-raised-button (click)=\"add(name)\">Add</button>\r\n    </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/pages/plannings/plannings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/plannings/plannings.component.ts ***!
  \********************************************************/
/*! exports provided: PlanningsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningsComponent", function() { return PlanningsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs */ "./src/app/configs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanningsComponent = (function () {
    function PlanningsComponent(http, router, planningService) {
        this.http = http;
        this.router = router;
        this.planningService = planningService;
        this.plannings = [];
    }
    PlanningsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    PlanningsComponent.prototype.init = function () {
        var _this = this;
        this.http.get(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].planningsUrl).subscribe(function (items) {
            _this.planningService.setPlannings(items);
            _this.plannings = items;
        });
    };
    PlanningsComponent.prototype.goto = function (planid) {
        this.router.navigate(['planoverview', planid]);
    };
    PlanningsComponent.prototype.add = function (name) {
        var _this = this;
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].planningsUrl, { title: name }).subscribe(function () {
            _this.init();
        });
    };
    PlanningsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plannings',
            template: __webpack_require__(/*! ./plannings.component.html */ "./src/app/pages/plannings/plannings.component.html"),
            styles: [__webpack_require__(/*! ./plannings.component.css */ "./src/app/pages/plannings/plannings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], PlanningsComponent);
    return PlanningsComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/calendar/calendar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/planoverview/calendar/calendar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/pages/planoverview/calendar/calendar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/planoverview/calendar/calendar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    Todo calendar\r\n</div>"

/***/ }),

/***/ "./src/app/pages/planoverview/calendar/calendar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/planoverview/calendar/calendar.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarComponent = (function () {
    function CalendarComponent(http, route, router, planningService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.locations = [];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.init();
    };
    CalendarComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
            if (_this.plan.steps == undefined) {
                _this.plan.steps = [];
            }
        });
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/pages/planoverview/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/pages/planoverview/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/files/files.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/planoverview/files/files.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/planoverview/files/files.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/files/files.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    Todo Files\r\n</div>\r\n<ul>\r\n    <li *ngFor=\"let file of files; let i = index;\">\r\n        <p>{{file.filename}}</p>\r\n        <button (click)=\"deleteFile(file._id)\">delete</button>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/pages/planoverview/files/files.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/planoverview/files/files.component.ts ***!
  \*************************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilesComponent = (function () {
    function FilesComponent(fileService, route, router, planningService) {
        this.fileService = fileService;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.files = [];
    }
    FilesComponent.prototype.ngOnInit = function () {
        this.init();
    };
    FilesComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
            if (_this.plan.steps == undefined) {
                _this.plan.steps = [];
            }
            _this.loadFiles();
        });
    };
    FilesComponent.prototype.loadFiles = function () {
        var _this = this;
        this.fileService.loadFilesForPlan(_configs__WEBPACK_IMPORTED_MODULE_3__["Configs"].fileUrl, this.plan._id).subscribe(function (res) {
            _this.files = res;
        });
    };
    FilesComponent.prototype.deleteFile = function (id) {
        var _this = this;
        this.fileService.deleteFile(_configs__WEBPACK_IMPORTED_MODULE_3__["Configs"].fileUrl, id).subscribe(function () {
            _this.loadFiles();
        });
    };
    FilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/pages/planoverview/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.css */ "./src/app/pages/planoverview/files/files.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_2__["PlanningService"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/images/images.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/planoverview/images/images.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/planoverview/images/images.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/planoverview/images/images.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-file-upload \r\n[(plan)]=\"plan._id\"\r\n(saveCallback)=\"addImagesToPlan($event, plan._id)\"\r\n[url]=\"fileupload.fileurl\"\r\nmaxFiles=\"4\"\r\nmaxSize=\"2\"\r\nfileExt=\"JPG, PNG\"\r\ninfoText=\"Drop your images here\" >\r\n</app-file-upload>\r\n\r\n<li *ngFor=\"let image of plan.images; let i = index;\">\r\n    <img [httpSrc]=\"image.url\" height=\"200px\" width=\"200px;\" />\r\n    <button (click)=\"deleteFile(i)\">delete</button>\r\n</li>"

/***/ }),

/***/ "./src/app/pages/planoverview/images/images.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/images/images.component.ts ***!
  \***************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImagesComponent = (function () {
    function ImagesComponent(http, fileService, route, router, planningService) {
        this.http = http;
        this.fileService = fileService;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.fileupload = {
            imagesurl: _configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].fileUrl
        };
        this.images = [];
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ImagesComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
            if (_this.plan.images == undefined) {
                _this.plan.images = [];
            }
            _this.loadFiles();
        });
    };
    ImagesComponent.prototype.updatePlan = function (plan) {
        var _this = this;
        this.planningService.setPlanning(plan);
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].planningsUrl, plan).subscribe(function (resp) { _this.loadFiles(); });
    };
    ImagesComponent.prototype.addImagesToPlan = function (newImages) {
        if (!this.plan.images) {
            this.plan.images = [];
        }
        this.plan.images = this.plan.images.concat(newImages);
        this.updatePlan(this.plan);
    };
    ImagesComponent.prototype.loadFiles = function () {
        // this.fileService.loadFilesForPlan(Configs.imagesUrl, this.plan._id).subscribe((res : Array<File>) => {
        //   this.files = res;
        // });
    };
    ImagesComponent.prototype.deleteFile = function (index) {
        var _this = this;
        var fileid = this.plan.images[index].fileId;
        this.fileService.deleteFile(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].fileUrl, fileid).subscribe(function () {
            _this.plan.images.splice(index, 1);
            _this.updatePlan(_this.plan);
        });
    };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/pages/planoverview/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/pages/planoverview/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/money/money.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/planoverview/money/money.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/planoverview/money/money.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/money/money.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    Money\r\n</div>\r\n<div>\r\n    <mat-form-field>\r\n        <input matInput #fromBox type=\"text\" placeholder=\"From?\" [matAutocomplete]=\"fromUsers\">\r\n    </mat-form-field>\r\n    <mat-autocomplete #fromUsers=\"matAutocomplete\" [displayWith]=\"displayWithDisplayName\">\r\n        <mat-option (onSelectionChange)=\"fromSelectionChange(user)\" *ngFor=\"let user of plan.users\" [value]=\"user\">\r\n            {{ user.displayName }}\r\n        </mat-option>\r\n    </mat-autocomplete>\r\n    <mat-form-field>\r\n        <input matInput #forBox type=\"text\" placeholder=\"What for?\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput #amoutBox type=\"number\" placeholder=\"How much Money?\">\r\n    </mat-form-field>\r\n    <button (click)=\"addCosts(forBox.value, amoutBox.value)\">Add</button>\r\n</div>\r\n<ul>\r\n    <li *ngFor=\"let cost of plan.costs; let i = index;\">\r\n        <span>{{cost.amount}}</span>\r\n        <span>{{cost.for}}</span>\r\n        <span>{{cost.from.displayName}}</span>\r\n        \r\n        <button (click)=\"deleteCost(i)\">delete</button>\r\n    </li>\r\n</ul>\r\n\r\n<span>total costs: {{totalCosts}} (per person: {{costPerPerson}})</span>\r\n<ul>\r\n    <li *ngFor=\"let costShare of costSharesSmart; let i = index;\">\r\n        <span>{{costShare.name}} needs to pay {{costShare.totalAmount}}:</span>\r\n        <ul>\r\n            <li *ngFor=\"let owe of costShare.owes; let i = index;\">\r\n                <span>{{owe.name}}: </span>\r\n                <span>{{owe.amount}}</span>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<!-- <ul>\r\n    <li *ngFor=\"let costShare of costShares; let i = index;\">\r\n        <span>{{costShare.name}} owes {{costShare.totalAmount}} to:</span>\r\n        <ul>\r\n            <li *ngFor=\"let owe of costShare.owes; let i = index;\">\r\n                <span>{{owe.name}}: </span>\r\n                <span>{{owe.amount}}</span>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n</ul> -->"

/***/ }),

/***/ "./src/app/pages/planoverview/money/money.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/planoverview/money/money.component.ts ***!
  \*************************************************************/
/*! exports provided: MoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyComponent", function() { return MoneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
/* harmony import */ var _models_Cost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/Cost */ "./src/app/models/Cost.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MoneyComponent = (function () {
    function MoneyComponent(http, route, router, planningService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.costShares = [];
        this.costSharesSmart = [];
    }
    MoneyComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MoneyComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.initPlanning(params.id);
            _this.calcCostShare();
            _this.calcCostSharSmart();
        });
    };
    MoneyComponent.prototype.initPlanning = function (id) {
        this.plan = this.planningService.getPlanning(id);
    };
    MoneyComponent.prototype.displayWithDisplayName = function (user) {
        return user ? user.displayName : user;
    };
    MoneyComponent.prototype.fromSelectionChange = function (user) {
        this.selectedFromUser = user;
    };
    MoneyComponent.prototype.addCosts = function (whatFor, amount) {
        var cost = new _models_Cost__WEBPACK_IMPORTED_MODULE_5__["Cost"]();
        cost.amount = parseFloat(amount);
        cost.for = whatFor;
        cost.from = this.selectedFromUser; //this.plan.loggedInUser;
        this.plan.costs.push(cost);
        this.updatePlan(this.plan);
    };
    MoneyComponent.prototype.deleteCost = function (index) {
        this.plan.costs.splice(index, 1);
        this.updatePlan(this.plan);
    };
    MoneyComponent.prototype.calcCostShare = function () {
        var _this = this;
        this.costShares = [];
        this.totalCosts = 0;
        this.plan.steps.forEach(function (step) {
            step.todos.forEach(function (todo) {
                _this.totalCosts += todo.costs;
            });
        });
        this.costPerPerson = 0;
        this.plan.costs.forEach(function (cost) {
            var amount = parseFloat(cost.amount.toString());
            _this.totalCosts += amount;
        });
        this.costPerPerson += this.totalCosts / this.plan.users.length;
        this.plan.users.forEach(function (user) {
            var currentUser = {
                _id: user._id,
                name: user.displayName,
                totalAmount: 0,
                owes: []
            };
            _this.plan.costs.forEach(function (cost) {
                if (cost.from._id != currentUser._id) {
                    var amount = parseFloat(cost.amount.toString());
                    var amountPerPerson = amount / _this.plan.users.length;
                    currentUser.totalAmount += amountPerPerson;
                    var oweUser = currentUser.owes.find(function (owe) { return owe.name == cost.from.displayName; });
                    if (oweUser) {
                        oweUser.amount += amountPerPerson;
                        return;
                    }
                    currentUser.owes.push({
                        name: cost.from.displayName,
                        amount: amountPerPerson
                    });
                }
            });
            _this.costShares.push(currentUser);
        });
    };
    MoneyComponent.prototype.calcCostSharSmart = function () {
        var _this = this;
        this.costSharesSmart = [];
        this.totalCosts = 0;
        this.plan.steps.forEach(function (step) {
            step.todos.forEach(function (todo) {
                _this.totalCosts += todo.costs;
            });
        });
        this.costPerPerson = 0;
        this.plan.costs.forEach(function (cost) {
            var amount = parseFloat(cost.amount.toString());
            _this.totalCosts += amount;
        });
        this.costPerPerson += this.totalCosts / this.plan.users.length;
        this.plan.users.forEach(function (user) {
            var currentUser = {
                _id: user._id,
                name: user.displayName,
                amountToPay: _this.costPerPerson,
                totalAmount: _this.costPerPerson,
                owes: []
            };
            var payedFromUser = _this.plan.costs.filter(function (cost) { return cost.from._id == user._id; });
            payedFromUser.forEach(function (cost) {
                currentUser.amountToPay -= cost.amount;
            });
            _this.costSharesSmart.push(currentUser);
        });
        this.costSharesSmart.forEach(function (c) {
            if (c.amountToPay < 0) {
                var theothers = _this.costSharesSmart.filter(function (c2) { return c2._id != c._id && c2.amountToPay > 0; });
                theothers.forEach(function (o) {
                    if (c.amountToPay < 0) {
                        var test = c.amountToPay + o.amountToPay;
                        if (test <= 0) {
                            c.amountToPay += o.amountToPay;
                            o.totalAmount += o.amountToPay;
                            o.owes.push({
                                name: c.name,
                                amount: o.amountToPay
                            });
                            o.amountToPay = 0;
                        }
                        else {
                            var theAmoutToGetZero = (-1 * c.amountToPay);
                            o.totalAmount += theAmoutToGetZero;
                            o.amountToPay -= theAmoutToGetZero;
                            c.amountToPay += theAmoutToGetZero;
                            o.owes.push({
                                name: c.name,
                                amount: theAmoutToGetZero
                            });
                        }
                    }
                });
            }
        });
    };
    MoneyComponent.prototype.updatePlan = function (plan) {
        var _this = this;
        this.planningService.setPlanning(plan);
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].planningsUrl, plan).subscribe(function (resp) {
            _this.initPlanning(_this.plan._id);
            _this.calcCostShare();
            _this.calcCostSharSmart();
        });
    };
    MoneyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-money',
            template: __webpack_require__(/*! ./money.component.html */ "./src/app/pages/planoverview/money/money.component.html"),
            styles: [__webpack_require__(/*! ./money.component.css */ "./src/app/pages/planoverview/money/money.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], MoneyComponent);
    return MoneyComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/overview/overview.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/planoverview/overview/overview.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 200px;\r\n}\r\n\r\n.overview-container{\r\n  padding: 1em;\r\n  margin-bottom: 1em;\r\n  /* border-left: 3px solid #bbb; */\r\n}\r\n\r\n.mat-input-container {\r\n  width: 7em;\r\n}"

/***/ }),

/***/ "./src/app/pages/planoverview/overview/overview.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/planoverview/overview/overview.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"overview-container\">\r\n    <h4>Travelmates</h4>\r\n    <div style=\"float: left;\">\r\n        <span *ngFor=\"let user of plan.users\" >\r\n            <img [src]=\"user.picture\" height=\"50\" [title]=\"user.email\" />\r\n        </span>\r\n    </div>\r\n    <button mat-icon-button style=\"clear: left;\" (click)=\"sharePlan()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button>\r\n</div>\r\n\r\n\r\n<div class=\"overview-container\" >\r\n    <h4>Dates</h4>\r\n    <div style=\"float: left;\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"startDatePicker\" [ngModel]=\"plan.startDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"plan.startDate=$event;startDateChanged();\"\r\n                placeholder=\"Start\">\r\n        </mat-form-field>\r\n        <mat-datepicker-toggle [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #startDatePicker></mat-datepicker>\r\n    </div>\r\n\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"endDatePicker\" [ngModel]=\"plan.endDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"plan.endDate=$event;planChanged();\"\r\n                placeholder=\"End\">\r\n        </mat-form-field>\r\n        <mat-datepicker-toggle [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #endDatePicker></mat-datepicker>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"plan.files.length > 0\" class=\"overview-container\">\r\n    <h4>Flight tickets, car vouchers, etc. </h4>\r\n\r\n    <plan-files \r\n        [(plan)] = \"plan\"\r\n    ></plan-files>\r\n\r\n</div>\r\n\r\n<div class=\"overview-container\">\r\n    <h4>The places you will visit</h4>\r\n\r\n    <places-input\r\n        [useGoogle]=\"true\"\r\n        placeholderInput=\"Where?\"\r\n        (selectionChanged)=\"placesSelectionChanged($event)\"\r\n    ></places-input>\r\n\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"stepDays\" type=\"number\" placeholder=\"How many days you wanna stop?\">\r\n    </mat-form-field>\r\n    <button mat-raised-button (click)=\"addStep(selectedSuggestion, stepDays)\">Add</button>\r\n\r\n\r\n\r\n    <div *ngIf=\"plan.steps\">\r\n        <div *ngFor=\"let step of plan.steps; let i = index;\">\r\n            <!-- <h3 (click)=\"step.edit = true;\" *ngIf=\"!step.edit\">\r\n                {{i + 1}}. {{step.title}} ({{step.days}} days)\r\n            </h3>\r\n            <div *ngIf=\"step.edit\">\r\n                <places-input\r\n                    placeholderInput=\"Where?\"\r\n                    (selectionChanged)=\"placesSelectionUpdate($event, i)\"\r\n                ></places-input>\r\n                <input [(ngModel)]=\"step.days\" type=\"number\" (ngModelChange)=\"planChanged();\" />\r\n                <button (click)=\"step.edit = false;\">Done</button>\r\n                <button (click)=\"removeStep(i);\">Remove</button>\r\n            </div> -->\r\n            <mat-card>\r\n                <mat-card-header>\r\n                        <!-- <img mat-card-avatar src=\"http://localhost:4200/places/staticmap?lat={{step.location.lat}}&lng={{step.location.lng}}&zoom=15\" /> -->\r\n                        <div (click)=\"step.edit = true;\" *ngIf=\"!step.edit\">\r\n                            <mat-card-title>{{step.title}}</mat-card-title>\r\n                            <mat-card-subtitle>Days: {{step.days}} Costs: {{stepTotalCosts(step)}}</mat-card-subtitle>\r\n                        </div>\r\n                        <div *ngIf=\"step.edit\">\r\n                            <places-input\r\n                                #stepTitleBox\r\n                                [inputValue]=\"step.title\"\r\n                                placeholderInput=\"Next Stop\"\r\n                                (selectionChanged)=\"placesSelectionUpdate($event, i)\"\r\n                            ></places-input>\r\n                            <mat-form-field>\r\n                                <input matInput [(ngModel)]=\"step.days\" type=\"number\" />\r\n                            </mat-form-field>\r\n                            <button (click)=\"stepUpdate(step);step.edit = false;\">Done</button>\r\n                            <button (click)=\"removeStep(i);\">Remove</button>\r\n                        </div>\r\n                </mat-card-header>\r\n                <!--                 \r\n                <img mat-card-image src=\"http://localhost:4200/places/staticmap?lat={{step.location.lat}}&lng={{step.location.lng}}&zoom=11\" />\r\n                 -->\r\n                <div mat-card-image *ngIf=\"step.location\">\r\n                    <agm-map [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\" [zoom]=\"11\">\r\n                        <agm-marker [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n                <mat-card-content>\r\n                    <div *ngIf=\"step.distance\">\r\n                        Distance to your next location: {{step.distance.distance.text}} ({{step.distance.duration.text}})\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-raised-button (click)=\"goToDetails(step._id)\">Details</button>\r\n                </mat-card-actions>\r\n                <mat-card-footer>\r\n                </mat-card-footer>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"overview-container\">\r\n    <app-file-upload \r\n    [(plan)]=\"plan._id\"\r\n    (saveCallback)=\"addFilesToPlan($event, plan._id)\"\r\n    [url]=\"fileupload.fileurl\"\r\n    maxFiles=\"4\"\r\n    maxSize=\"2\"\r\n    fileExt=\"JPG, GIF, PNG, PDF\"\r\n    infoText=\"Drop your flight tickets, car voucher etc. here\" >\r\n    </app-file-upload>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/planoverview/overview/overview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/planoverview/overview/overview.component.ts ***!
  \*******************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _models_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Step */ "./src/app/models/Step.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OverviewComponent = (function () {
    function OverviewComponent(http, fileService, route, router, planningService) {
        this.http = http;
        this.fileService = fileService;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.fileupload = {
            fileurl: _configs__WEBPACK_IMPORTED_MODULE_5__["Configs"].fileUrl
        };
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.init();
    };
    OverviewComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
        });
    };
    OverviewComponent.prototype.sharePlan = function () {
        this.router.navigate(['share', this.plan._id]);
    };
    OverviewComponent.prototype.goToDetails = function (stepid) {
        this.router.navigate(['stepdetails', this.plan._id, stepid]);
    };
    OverviewComponent.prototype.startDateChanged = function () {
        this.plan.endDate = this.plan.startDate;
    };
    OverviewComponent.prototype.planChanged = function () {
        this.planningService.setPlanning(this.plan);
    };
    // stepChanged(step: Step){
    //   this.planningService.addStep(this.plan, step);
    // }
    OverviewComponent.prototype.placesSelectionChanged = function (suggest) {
        this.selectedSuggestion = suggest;
    };
    OverviewComponent.prototype.placesSelectionUpdate = function (suggest, index) {
        if (!suggest || !suggest.title)
            return;
        var step = this.plan.steps[index];
        step.title = suggest.title;
        //step.location = suggest.location;
        //this.stepChanged(step);
    };
    OverviewComponent.prototype.stepTotalCosts = function (step) {
        return this.planningService.stepTotalCosts(step);
    };
    OverviewComponent.prototype.addStep = function (todo, days) {
        var _this = this;
        var newStep = new _models_Step__WEBPACK_IMPORTED_MODULE_4__["Step"]();
        newStep.title = todo.title;
        newStep.days = days;
        newStep.location = todo.location;
        this.planningService.addStep(this.plan, newStep);
        this.planningService.setPlanning(this.plan).then(function (newPlanning) {
            _this.plan = newPlanning;
        });
        ;
    };
    OverviewComponent.prototype.stepUpdate = function (step) {
        this.planningService.removeEdit(step);
        this.planningService.setPlanning(this.plan);
    };
    OverviewComponent.prototype.removeStep = function (index) {
        this.plan.steps.splice(index, 1);
        this.planningService.setPlanning(this.plan);
    };
    OverviewComponent.prototype.refreshFiles = function (status) {
        var _this = this;
        if (status) {
            this.fileService.loadFilesForPlan(_configs__WEBPACK_IMPORTED_MODULE_5__["Configs"].fileUrl, this.plan._id).subscribe(function (files) {
                files.forEach(function (file) {
                    _this.plan.files;
                });
            });
        }
    };
    OverviewComponent.prototype.addFilesToPlan = function (newFiles) {
        this.planningService.addFilesToPlan(this.plan, newFiles);
    };
    OverviewComponent.prototype.downloadFile = function (file) {
        this.fileService.downloadFile(file);
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/pages/planoverview/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/pages/planoverview/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/planoverview.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/planoverview.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.overview-title{\r\n    padding-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/planoverview/planoverview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/planoverview/planoverview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <mat-icon (click)=\"backToPlannings()\">keyboard_backspace</mat-icon>\r\n        <span class=\"overview-title\">{{plan.title}}</span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\r\n    <mat-tab #overviewTab label=\"Overview\" >\r\n        <div *ngIf=\"overviewTab.isActive\">\r\n            <app-overview></app-overview>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab #costsTab label=\"Costs\">\r\n        <div *ngIf=\"costsTab.isActive\">\r\n            <app-money></app-money>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab #imagesTab label=\"Images\">\r\n        <div *ngIf=\"imagesTab.isActive\">\r\n            <app-images></app-images>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab #routerTab label=\"Route\">\r\n        <div *ngIf=\"routerTab.isActive\">\r\n            <app-route></app-route>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab #filesTab label=\"Files\">\r\n        <div *ngIf=\"filesTab.isActive\">\r\n            <app-files></app-files>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n\r\n<!-- <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of navLinks\"\r\n       [routerLink]=\"link.path\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.label}}\r\n    </a>\r\n  </nav> -->\r\n\r\n  <!-- <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n       [routerLink]=\"planoverview/overview\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      Oerview\r\n    </a>\r\n    \r\n    <a mat-tab-link\r\n    [routerLink]=\"planoverview/route\"\r\n    routerLinkActive #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\">\r\n   Route\r\n </a>\r\n  </nav> -->"

/***/ }),

/***/ "./src/app/pages/planoverview/planoverview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/planoverview/planoverview.component.ts ***!
  \**************************************************************/
/*! exports provided: PlanoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoverviewComponent", function() { return PlanoverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanoverviewComponent = (function () {
    function PlanoverviewComponent(changeDetectRef, planningService, route, router) {
        this.changeDetectRef = changeDetectRef;
        this.planningService = planningService;
        this.route = route;
        this.router = router;
    }
    PlanoverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
        });
    };
    PlanoverviewComponent.prototype.backToPlannings = function () {
        this.router.navigate(['plannings']);
    };
    PlanoverviewComponent.prototype.tabChanged = function (event) {
        console.log(event);
    };
    PlanoverviewComponent.prototype.ngAfterViewChecked = function () {
        //check later: this fixes the error -> Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value:
        this.changeDetectRef.detectChanges();
    };
    PlanoverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planoverview',
            template: __webpack_require__(/*! ./planoverview.component.html */ "./src/app/pages/planoverview/planoverview.component.html"),
            styles: [__webpack_require__(/*! ./planoverview.component.css */ "./src/app/pages/planoverview/planoverview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_1__["PlanningService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlanoverviewComponent);
    return PlanoverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/route/route.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/planoverview/route/route.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/pages/planoverview/route/route.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/route/route.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"startLocation\">\r\n    <agm-map #routeOverview [latitude]=\"startLocation.lat\" [longitude]=\"startLocation.lng\">\r\n        <agm-marker *ngFor=\"let step of plan.steps\" [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\"></agm-marker>\r\n        <!-- <agm-marker *ngFor=\"let todo of step.todos\" [latitude]=\"todo.location.lat\" [longitude]=\"todo.location.lng\"></agm-marker> -->\r\n\r\n        <agm-polyline>\r\n                <agm-polyline-point *ngFor=\"let step of plan.steps\" [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\"></agm-polyline-point>\r\n        </agm-polyline>\r\n    </agm-map>\r\n</div>\r\n\r\n<div *ngFor=\"let step of plan.steps; let i = index;\">\r\n    <h3>{{i+1}}. {{step.title}}</h3>\r\n    <a href=\"\">link</a>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/planoverview/route/route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/planoverview/route/route.component.ts ***!
  \*************************************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteComponent = (function () {
    function RouteComponent(http, route, router, planningService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
        this.locations = [];
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.init();
    };
    RouteComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
            if (_this.plan.steps == undefined) {
                _this.plan.steps = [];
            }
            _this.setLocations();
        });
    };
    RouteComponent.prototype.setLocations = function () {
        if (this.plan.steps.length === 0)
            return;
        this.startLocation = this.plan.steps[0].location;
        this.locations = [];
        for (var i = 0; i < this.plan.steps.length; i++) {
            var step = this.plan.steps[i];
            this.locations.push(step.location);
        }
    };
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/pages/planoverview/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/pages/planoverview/route/route.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/share/share.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/planoverview/share/share.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/planoverview/share/share.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/planoverview/share/share.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Share Plan {{plan.title}}\r\n</h1>\r\n\r\n<label>e-mail</label>\r\n<input type=\"email\" [(ngModel)]=\"email\"/>\r\n\r\n<div>\r\n    <button (click)=\"share()\">Share</button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/planoverview/share/share.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/planoverview/share/share.component.ts ***!
  \*************************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShareComponent = (function () {
    function ShareComponent(http, route, router, planningService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ShareComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.id);
        });
    };
    ShareComponent.prototype.share = function () {
        var _this = this;
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].shareUrl, { email: this.email, planid: this.plan._id }).subscribe(function () {
            _this.updatePlan();
        });
    };
    ShareComponent.prototype.updatePlan = function () {
        var _this = this;
        this.http.get(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].planningsUrl).subscribe(function (items) {
            _this.planningService.setPlannings(items);
            _this.plan = _this.planningService.getPlanning(_this.plan._id);
            _this.router.navigate(['planoverview', _this.plan._id]);
        });
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/pages/planoverview/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/pages/planoverview/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/pages/planoverview/stepdetail/stepdetail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/planoverview/stepdetail/stepdetail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 150px;\r\n  }"

/***/ }),

/***/ "./src/app/pages/planoverview/stepdetail/stepdetail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/planoverview/stepdetail/stepdetail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <mat-icon (click)=\"backToPlannings()\">keyboard_backspace</mat-icon>\r\n        <span class=\"overview-title\">{{plan.title}}</span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<!-- \r\n<span (click)=\"backToPlannings()\"> back</span>\r\n<h1>{{plan.title}} </h1> -->\r\n\r\n\r\n<div *ngIf=\"step\">\r\n    <h3 (click)=\"step.edit = true;\" *ngIf=\"!step.edit\">\r\n        {{step.title}} ({{step.days}} days)\r\n    </h3>\r\n    <div *ngIf=\"step.edit\">\r\n        <places-input\r\n            #stepTitleBox\r\n            [inputValue]=\"step.title\"\r\n            placeholderInput=\"Next Stop\"\r\n            (selectionChanged)=\"stepSelectionUpdate($event)\"\r\n        ></places-input>\r\n        <input [(ngModel)]=\"step.days\" type=\"number\" />\r\n        <button (click)=\"stepUpdate(step);step.edit = false;\">Done</button>\r\n        <button (click)=\"removeStep(i);\">Remove</button>\r\n    </div>\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title></mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <agm-map *ngIf=\"step.location\" [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\" [zoom]=\"12\">\r\n            <agm-marker [latitude]=\"step.location.lat\" [longitude]=\"step.location.lng\"></agm-marker>\r\n            <agm-marker *ngFor=\"let todo of getTodosWithLocation(step.todos)\" [latitude]=\"todo.location.lat\" [longitude]=\"todo.location.lng\"></agm-marker>\r\n        </agm-map>\r\n\r\n        <mat-card-content>\r\n            <mat-list>\r\n                <mat-list-item *ngFor=\"let todo of step.todos; let i = index;\">\r\n                    <span>{{todo.title}} - ({{todo.costs}})</span>\r\n                    <button (click)=\"removeTodo(i, step)\">Remove</button>\r\n                </mat-list-item>\r\n            </mat-list>\r\n        </mat-card-content>\r\n        <mat-card-footer>\r\n            <places-input #todoInput\r\n                placeholderInput=\"Next Todo ..\"\r\n                (selectionChanged)=\"todoChanged($event)\"\r\n            ></places-input>\r\n            \r\n            <mat-form-field>\r\n                <input #todoCosts matInput placeholder=\"Costs\" type=\"number\"/>\r\n            </mat-form-field>\r\n            <button mat-raised-button (click)=\"addTodo(step, todoCosts.value);todoInput.inputValue = null;todoCosts.value = null;\">add todo</button>\r\n\r\n            <app-file-upload \r\n            [(plan)]=\"plan._id\"\r\n            (saveCallback)=\"addFilesToStep($event, step)\"\r\n            [url]=\"fileupload.fileurl\"\r\n            maxFiles=\"4\"\r\n            maxSize=\"2\"\r\n            fileExt=\"JPG, GIF, PNG, PDF\"\r\n            infoText=\"Drop your hotel, guesthouse etc. confirmations here\" >\r\n            </app-file-upload>\r\n\r\n            <step-files [(plan)]=\"plan\" [(step)]=\"step\"></step-files>\r\n        </mat-card-footer>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/planoverview/stepdetail/stepdetail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/planoverview/stepdetail/stepdetail.component.ts ***!
  \***********************************************************************/
/*! exports provided: StepDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDetailComponent", function() { return StepDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/planning.service */ "./src/app/services/planning.service.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs */ "./src/app/configs.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StepDetailComponent = (function () {
    function StepDetailComponent(http, fileService, route, router, planningService) {
        this.http = http;
        this.fileService = fileService;
        this.route = route;
        this.router = router;
        this.planningService = planningService;
    }
    StepDetailComponent.prototype.ngOnInit = function () {
        this.init();
    };
    StepDetailComponent.prototype.init = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.plan = _this.planningService.getPlanning(params.planid);
            if (_this.plan.steps != undefined) {
                _this.step = _this.plan.steps.find(function (s) { return s._id == params.stepid; });
            }
        });
    };
    StepDetailComponent.prototype.backToPlannings = function () {
        this.router.navigate(['planoverview', this.plan._id]);
    };
    StepDetailComponent.prototype.planChanged = function () {
        this.planningService.setPlanning(this.plan);
    };
    StepDetailComponent.prototype.stepUpdate = function (step) {
        this.planningService.removeEdit(step);
        this.planningService.setPlanning(this.plan);
    };
    StepDetailComponent.prototype.todoChanged = function (newTodo) {
        this.selectedTodo = newTodo;
    };
    StepDetailComponent.prototype.stepSelectionUpdate = function (todo) {
        //this.selectedTodo = todo;
        this.step.title = todo.title;
        // console.log(todo);
        // this.planningService.setPlanning(this.plan);
        // disable places
        // this.placeDetails(suggest.place_id, (place: PlaceDetail) => {
        //   let step = this.plan.steps[index];
        //   step.title = place.name;
        //   step.location = place.geometry.location;
        //   this.planningService.setPlanning(this.plan);
        // });
    };
    StepDetailComponent.prototype.getTodosWithLocation = function (todos) {
        return todos.filter(function (item) { return item.location; });
    };
    StepDetailComponent.prototype.addTodo = function (step, costs) {
        this.selectedTodo.costs = Number.parseFloat(costs);
        step.todos.push(this.selectedTodo);
        this.planningService.setPlanning(this.plan);
        this.selectedTodo = null;
    };
    StepDetailComponent.prototype.removeTodo = function (index, step) {
        step.todos.splice(index, 1);
        this.planningService.setPlanning(this.plan);
    };
    StepDetailComponent.prototype.refreshFiles = function (status) {
        var _this = this;
        if (status) {
            this.fileService.loadFilesForPlan(_configs__WEBPACK_IMPORTED_MODULE_4__["Configs"].fileUrl, this.plan._id).subscribe(function (files) {
                files.forEach(function () {
                    _this.plan.files;
                });
            });
        }
    };
    StepDetailComponent.prototype.addFilesToStep = function (newFiles, step) {
        if (!("files" in step)) {
            step.files = [];
        }
        step.files = step.files.concat(newFiles);
        this.planningService.setPlanning(this.plan);
    };
    StepDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepdetail',
            template: __webpack_require__(/*! ./stepdetail.component.html */ "./src/app/pages/planoverview/stepdetail/stepdetail.component.html"),
            styles: [__webpack_require__(/*! ./stepdetail.component.css */ "./src/app/pages/planoverview/stepdetail/stepdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"]])
    ], StepDetailComponent);
    return StepDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <!-- <mat-icon (click)=\"backToPlannings()\">keyboard_backspace</mat-icon> -->\r\n        <span >Register</span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-form-field>\r\n    <input matInput [(ngModel)]=\"emailAdress\" type=\"email\" placeholder=\"Your email adress\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n    <input matInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"Your password\">\r\n</mat-form-field>\r\n\r\n<button mat-raised-button (click)=\"register()\">Register</button>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs */ "./src/app/configs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(http, route, router, authService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.route
        // .queryParams
        // .filter(params => params.access_token)
        // .subscribe(params => {
        //   var token = params.access_token;
        //   if(token){
        //     this.authService.setAccessToken(token);
        //     this.router.navigate(['plannings']);
        //   }
        // });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //alert("register: " + this.emailAdress + " " + this.password);
        var newuser = {
            email: this.emailAdress,
            password: this.password
        };
        this.http.post(_configs__WEBPACK_IMPORTED_MODULE_5__["Configs"].registerUrl, newuser)
            .subscribe(function (resp) {
            _this.authService.setAccessToken(resp.token);
            _this.router.navigate(['plannings']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/start/start.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/start/start.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/start/start.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/start/start.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n\n  <h3>\n    With plan it you can plan your next awesome trip ... \n    You can plan your routes, invite your travel mates, \n    add documents, share images you made,\n    calculate costs and see a weather forecast.\n  </h3>\n\n  <h4>At the moment you can only login with your email adress or your google account. More Provider will be added soon ...</h4>\n\n  <h4><a target=\"_self\" rel=\"noopener\" href=\"/callback\">Login with E-Mail</a></h4>\n  <h4><a target=\"_self\" rel=\"noopener\" href=\"http://localhost:4200/auth/google\">Login with Google</a></h4>\n\n</div>\n  \n  \n"

/***/ }),

/***/ "./src/app/pages/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = (function () {
    function StartComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'plan it';
    }
    StartComponent.prototype.ngOnInit = function () {
        if (this.authService.getAccessToken()) {
            this.router.navigate(['plannings']);
        }
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/pages/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/pages/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.setAccessToken = function (token) {
        sessionStorage.setItem('access_token', token);
    };
    AuthService.prototype.getAccessToken = function () {
        var token = sessionStorage.getItem('access_token');
        return token;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Headers, RequestOptions } from '@angular/http';

//import { Observable } from 'rxjs/Rx';

var FileService = (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.upload = function (url, formData) {
        return this.http.post(url, formData);
    };
    FileService.prototype.loadFilesForPlan = function (url, planid) {
        url = url + '?planid=' + planid;
        return this.http.get(url);
        /*.map( (files:Array<File>) => {
            let result = {};
            for(let i = 0; i < files.length; i ++){
                let file = files[i];
                if(""+file.link in result){
                    result[""+file.link].push(file);
                }
                else{
                    result[""+file.link] = [];
                    result[""+file.link].push(file);
                }
                
            }
            return result;
        });
        */
    };
    FileService.prototype.deleteFile = function (url, fileid) {
        url += '?id=' + fileid;
        return this.http.delete(url);
    };
    FileService.prototype.downloadFile = function (file) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Accept', 'text/plain');
        this.http.get(file.url, { headers: headers, responseType: 'blob' }).subscribe(function (resp) {
            //const blob = new Blob([resp], { type: 'application/octet-stream' });
            var blob = new Blob([resp], { type: 'application/pdf' });
            //saveAs(blob, file.filename + "." + file.extension);
            _this.showFile(blob, file.filename);
        });
    };
    FileService.prototype.showFile = function (newBlob, filename) {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        //var newBlob = new Blob([blob], {type: "application/pdf"})
        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        // var reader = new FileReader();
        // //var out = new Blob([this.response], {type: 'application/pdf'});
        // reader.onload = function(e){
        //   window.location.href = reader.result;
        // }
        // reader.readAsDataURL(newBlob);
        var url = URL.createObjectURL(newBlob);
        window.open(url, '_self');
        return;
        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        // const data = window.URL.createObjectURL(newBlob);
        // var link = document.createElement('a');
        // link.href = data;
        // link.download=filename;
        // link.click();
        // setTimeout(function(){
        //   // For Firefox it is necessary to delay revoking the ObjectURL
        //   console.log("show file calling 2");
        //   window.URL.revokeObjectURL(data)
        // , 100});
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/httpInterceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/httpInterceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpInterceptorService = (function () {
    function HttpInterceptorService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var token = this.authService.getAccessToken();
        var authHeader = this.getAuthHeader(token);
        // Clone the request to add the new header.
        var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        // Pass on the cloned request instead of the original request.
        return next
            .handle(authReq)
            .catch(function (err, caught) {
            if (err.status == 401 || err.status == 403) {
                _this.router.navigate(['callback']);
            }
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
        });
    };
    HttpInterceptorService.prototype.getAuthHeader = function (token) {
        return "Bearer " + token;
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/planning.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/planning.service.ts ***!
  \**********************************************/
/*! exports provided: PlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningService", function() { return PlanningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs */ "./src/app/configs.ts");
/* harmony import */ var _models_Distance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Distance */ "./src/app/models/Distance.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanningService = (function () {
    function PlanningService(http) {
        this.http = http;
    }
    PlanningService.prototype.setPlannings = function (plannings) {
        sessionStorage.setItem('plannings', JSON.stringify(plannings));
    };
    PlanningService.prototype.setPlanning = function (planning) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.updatePlanning(planning).subscribe(function (plannings) {
                // var _planning: Planning;
                // for (var i = 0; i < plannings.length; i++) {
                //     _planning = plannings[i];
                //     if (_planning._id == planning._id) {
                //         plannings[0] = planning;
                //     }
                // }
                _this.setPlannings(plannings);
                resolve(_this.getPlanning(planning._id));
            });
        });
        return promise;
    };
    PlanningService.prototype.getPlannings = function () {
        var plannings = JSON.parse(sessionStorage.getItem('plannings'));
        return plannings;
    };
    PlanningService.prototype.getPlanning = function (id) {
        var plannings = this.getPlannings();
        var planning;
        for (var i = 0; i < plannings.length; i++) {
            planning = plannings[i];
            if (planning._id == id) {
                if (planning.steps == undefined) {
                    planning.steps = [];
                }
                if (planning.costs == undefined) {
                    planning.costs = [];
                }
                return planning;
            }
        }
    };
    PlanningService.prototype.stepTotalCosts = function (step) {
        var totalCosts = 0;
        if (step && step.todos && step.todos.length > 0) {
            step.todos.forEach(function (todo) {
                totalCosts += todo.costs;
            });
        }
        return totalCosts;
    };
    PlanningService.prototype.removeEdit = function (step) {
        //we need to remove the temp field edit that is needed to show input fields
        if ("edit" in step) {
            delete step["edit"];
        }
    };
    PlanningService.prototype.addStep = function (plan, step) {
        if (!step._id) {
            // this is when step is a new step!
            plan.steps.push(step);
        }
        //this.recaluclateDistances(plan, step);
    };
    PlanningService.prototype.addFilesToPlan = function (plan, newFiles) {
        if (!plan.files) {
            plan.files = [];
        }
        plan.files = plan.files.concat(newFiles);
        this.setPlanning(plan);
    };
    PlanningService.prototype.deleteFileFromPlan = function (plan, index) {
        plan.files.splice(index, 1);
        this.setPlanning(plan);
    };
    PlanningService.prototype.updatePlanning = function (plan) {
        return this.http.post(_configs__WEBPACK_IMPORTED_MODULE_2__["Configs"].planningsUrl, plan);
    };
    PlanningService.prototype.recaluclateDistances = function (plan, step) {
        var _this = this;
        // Recalculate the distances for between each step      
        if (plan.steps.length > 0) {
            var prevStep_1;
            if (!step._id) {
                // this is when step is a new step!
                prevStep_1 = plan.steps[plan.steps.length - 2];
            }
            else {
                // this is when step already exists
                for (var i = 0; i < plan.steps.length; i++) {
                    if (plan.steps[i]._id == step._id) {
                        if (i > 0) {
                            prevStep_1 = plan.steps[i - 1];
                            break;
                        }
                    }
                }
            }
            if (prevStep_1) {
                var url = _configs__WEBPACK_IMPORTED_MODULE_2__["Configs"].placesDistanceUrl + "?startLat=" + prevStep_1.location.lat + "&startLng=" + prevStep_1.location.lng;
                url += "&endLat=" + step.location.lat + "&endLng=" + step.location.lng;
                this.http.get(url).subscribe(function (rows) {
                    if (rows.length > 0 && rows[0].elements.length > 0) {
                        var result = rows[0].elements[0];
                        var distance = new _models_Distance__WEBPACK_IMPORTED_MODULE_3__["Distance"]();
                        distance.distance = {
                            text: result.distance.text,
                            value: result.distance.value
                        };
                        distance.duration = {
                            text: result.duration.text,
                            value: result.duration.value
                        };
                        prevStep_1.distance = distance;
                    }
                    _this.setPlanning(plan);
                });
            }
            else {
                this.setPlanning(plan);
            }
        }
        else {
            this.setPlanning(plan);
        }
    };
    PlanningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlanningService);
    return PlanningService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\node\planit\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map