(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet style=\"display: flex;width: 97%;\">\r\n\r\n    <!-- title -->\r\n    <kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\r\n        <ng-container ktPortletTitle>\r\n            <h3 class=\"head-title\">\r\n                <span>Tableau de bord</span>\r\n            </h3>\r\n        </ng-container>\r\n\r\n    </kt-portlet-header>\r\n\r\n    <!-- frames -->\r\n    <!--\t<iframe title=\"Report Section\"-->\r\n    <!--\t\t\twidth=\"100%\"-->\r\n    <!--\t\t\theight=\"1000\"-->\r\n    <!--\t\t\tsrc=\"https://app.powerbi.com/view?r=eyJrIjoiMDI0OGNmMzctNTgxNi00NjNlLTg0ODUtNGUyNDc0YTg0NWY0IiwidCI6ImNjM2U5YTQwLTlmMDEtNGQzNC04YjM5LWZlZDY2NDdjZmI2MiJ9\"-->\r\n    <!--\t\t\tframeborder=\"0\" allowFullScreen=\"true\">-->\r\n\r\n    <!--\t</iframe>-->\r\n\r\n    <iframe title=\"Report Section\"    width=\"100%\"\r\n            height=\"1000\"\r\n            src=\"https://app.powerbi.com/view?r=eyJrIjoiNzg1NTY2Y2YtMzMzYy00MDA5LWIzZjMtM2JmYzRiNWQ5MWVlIiwidCI6ImNjM2U5YTQwLTlmMDEtNGQzNC04YjM5LWZlZDY2NDdjZmI2MiJ9&pageName=ReportSection9eef59fed5c2ea6e40a2\"\r\n            frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n\r\n</kt-portlet>\r\n\r\n\r\n<!-- <div class=\"dashboard-container\">-->\r\n<!--&lt;!&ndash;\t<div class=\"column-dashboard\">-->\r\n<!--\t\t<div class=\"dashboard-container row-full-height\">-->\r\n<!--\t\t\t<div class=\"column-middle-dashboard\">-->\r\n<!--\t\t\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid-half kt-portlet&#45;&#45;border-bottom-brand'\">-->\r\n<!--\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fluid'\">-->\r\n<!--\t\t\t\t\t\t<kt-widget26 [value]=\"570\" [desc]=\"'Total Sales'\" [options]=\"chartOptions1\"></kt-widget26>-->\r\n<!--\t\t\t\t\t</kt-portlet-body>-->\r\n<!--\t\t\t\t</kt-portlet>-->\r\n\r\n<!--\t\t\t\t<div class=\"kt-space-20\"></div>-->\r\n\r\n<!--\t\t\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid-half kt-portlet&#45;&#45;border-bottom-brand'\">-->\r\n<!--\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fluid'\">-->\r\n<!--\t\t\t\t\t\t<kt-widget26 [value]=\"640\" [desc]=\"'Completed Transactions'\" [options]=\"chartOptions2\"></kt-widget26>-->\r\n<!--\t\t\t\t\t</kt-portlet-body>-->\r\n<!--\t\t\t\t</kt-portlet>-->\r\n<!--\t\t\t</div>-->\r\n\r\n<!--\t\t\t<div class=\"column-middle-dashboard\">-->\r\n<!--\t\t\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid-half kt-portlet&#45;&#45;border-bottom-brand'\">-->\r\n<!--\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fluid'\">-->\r\n<!--\t\t\t\t\t\t<kt-widget26 [value]=\"'234+'\" [desc]=\"'Transactions'\" [options]=\"chartOptions3\"></kt-widget26>-->\r\n<!--\t\t\t\t\t</kt-portlet-body>-->\r\n<!--\t\t\t\t</kt-portlet>-->\r\n\r\n<!--\t\t\t\t<div class=\"kt-space-20\"></div>-->\r\n\r\n<!--\t\t\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid-half kt-portlet&#45;&#45;border-bottom-brand'\">-->\r\n<!--\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fluid'\">-->\r\n<!--\t\t\t\t\t\t<kt-widget26 [value]=\"'4.4M$'\" [desc]=\"'Paid Comissions'\" [options]=\"chartOptions4\"></kt-widget26>-->\r\n<!--\t\t\t\t\t</kt-portlet-body>-->\r\n<!--\t\t\t\t</kt-portlet>-->\r\n<!--\t\t\t</div>-->\r\n<!--\t\t</div>-->\r\n<!--\t</div>-->\r\n<!--\t<div class=\"column-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Order Statistics'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget12></kt-widget12>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--<kt-portlet>-->\r\n<!--\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fit'\">-->\r\n<!--\t\t<div class=\"dashboard-container row-no-padding row-col-separator-xl\">-->\r\n<!--\t\t\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t\t\t<kt-widget1></kt-widget1>-->\r\n<!--\t\t\t</div>-->\r\n<!--\t\t\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>-->\r\n<!--\t\t\t</div>-->\r\n<!--\t\t\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>-->\r\n<!--\t\t\t</div>-->\r\n<!--\t\t</div>-->\r\n<!--\t</kt-portlet-body>-->\r\n<!--</kt-portlet>-->\r\n<!--\t &ndash;&gt;-->\r\n\r\n\r\n<!--<div class=\"dashboard-container\">-->\r\n<!--\t&lt;!&ndash;<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Download Files'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget4 [data]=\"widget4_1\">-->\r\n<!--\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">-->\r\n<!--\t\t\t\t\t\t<div class=\"kt-widget4__tools\">-->\r\n<!--\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">-->\r\n<!--\t\t\t\t\t\t\t\t<mat-icon> vertical_align_bottom</mat-icon>-->\r\n<!--\t\t\t\t\t\t\t</a>-->\r\n<!--\t\t\t\t\t\t</div>-->\r\n<!--\t\t\t\t\t</ng-template>-->\r\n<!--\t\t\t\t</kt-widget4>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'New Users'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget4 [data]=\"widget4_2\">-->\r\n<!--\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">-->\r\n<!--\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>-->\r\n<!--\t\t\t\t\t</ng-template>-->\r\n<!--\t\t\t\t</kt-widget4>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget4 [data]=\"widget4_3\">-->\r\n<!--\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">-->\r\n<!--\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>-->\r\n<!--\t\t\t\t\t</ng-template>-->\r\n<!--\t\t\t\t</kt-widget4>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>&ndash;&gt;-->\r\n<!--</div>-->\r\n\r\n<!--&lt;!&ndash;-->\r\n<!--<div class=\"dashboard-container\">-->\r\n<!--\t<div class=\"bloc-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head&#45;&#45;lg kt-portlet__head&#45;&#45;noborder kt-portlet__head&#45;&#45;break-sm'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu></kt-context-menu>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fit'\">-->\r\n<!--\t\t\t\t<kt-data-table></kt-data-table>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget4 [data]=\"widget4_4\">-->\r\n<!--\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">-->\r\n<!--\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>-->\r\n<!--\t\t\t\t\t</ng-template>-->\r\n<!--\t\t\t\t</kt-widget4>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--&ndash;&gt;-->\r\n<!--</div>-->\r\n\r\n<!--&lt;!&ndash;-->\r\n<!--<div class=\"dashboard-container\">-->\r\n<!--\t<div class=\"bloc-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-widget5></kt-widget5>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--\t<div class=\"column-mini-dashboard\">-->\r\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\r\n<!--\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">-->\r\n<!--\t\t\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n<!--\t\t\t</kt-portlet-header>-->\r\n<!--\t\t\t<kt-portlet-body>-->\r\n<!--\t\t\t\t<kt-timeline2></kt-timeline2>-->\r\n<!--\t\t\t</kt-portlet-body>-->\r\n<!--\t\t</kt-portlet>-->\r\n<!--\t</div>-->\r\n<!--</div>-->\r\n\r\n<!--&ndash;&gt;-->\r\n<!--&lt;!&ndash;-->\r\n<!--<kt-portlet>-->\r\n<!--\t<kt-portlet-header>-->\r\n<!--\t\t<ng-container ktPortletTitle>-->\r\n<!--\t\t</ng-container>-->\r\n<!--\t\t<ng-container ktPortletTools>-->\r\n<!--\t\t</ng-container>-->\r\n<!--\t</kt-portlet-header>-->\r\n<!--\t<kt-portlet-body></kt-portlet-body>-->\r\n<!--\t<kt-portlet-footer></kt-portlet-footer>-->\r\n<!--</kt-portlet>-->\r\n<!--&ndash;&gt;-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/profile/profile/profile.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/profile/profile/profile.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 card card-body\" style=\"padding-left: 13rem; padding-right: 13rem\">\r\n            <div class=\"form-group row \">\r\n                <label class=\"col-xl-3 col-lg-3 col-form-label\">Avatar</label>\r\n                <div class=\"col-lg-9 col-xl-9\">\r\n                    <div class=\"image-input image-input-outline\" id=\"kt_contact_add_avatar\">\r\n                        <div class=\"image-input-wrapper\"\r\n                             [style]=\"'background-image: url(https://ui-avatars.com/api/?name='+user?.firstname+'+'+user?.lastname+'&background=0D8ABC&color=fff)'\"></div>\r\n\r\n                        <label class=\"myicon btn  btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow \"\r\n                               data-toggle=\"tooltip\" title=\"\" data-original-title=\"Change avatar\">\r\n                            <mat-icon style=\"margin-top: 5px\">edit</mat-icon>\r\n                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" style=\"display: none\">\r\n                            <input type=\"hidden\" name=\"profile_avatar_remove\">\r\n                        </label>\r\n\r\n                        <span class=\"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow\"\r\n                              data-action=\"cancel\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Cancel avatar\">\r\n\t\t\t\t\t\t                            <i class=\"ki ki-bold-close icon-xs text-muted\"></i>\r\n\t\t\t\t\t\t                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"user\">\r\n                <form [formGroup]=\"userForm\">\r\n                    <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n                              (close)=\"onAlertClose($event)\">\r\n                        Oh snap! Change a few things up and try submitting again.\r\n                    </kt-alert>\r\n\r\n\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">Prénom</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input class=\"form-control form-control-lg form-control-solid\" name=\"firstname\" type=\"text\"\r\n                                   formControlName=\"firstname\"\r\n                            >\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">Nom</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input class=\"form-control form-control-lg form-control-solid\" name=\"lastname\" type=\"text\"\r\n                                   formControlName=\"lastname\">\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">Nom d'utilisateur</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input class=\"form-control form-control-lg form-control-solid\" name=\"username\" type=\"text\"\r\n                                   formControlName=\"username\">\r\n                            <span class=\"form-text text-muted\">If you want your invoices addressed to a company. Leave blank to use your full name.</span>\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">N° téléphone</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <div class=\"input-group input-group-lg input-group-solid\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <mat-icon>phone</mat-icon>\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control form-control-lg form-control-solid\" name=\"phone\"\r\n                                       formControlName=\"phone\"\r\n                                       placeholder=\"Phone\"\r\n                                       tenDigitsOnly>\r\n                            </div>\r\n                            <span class=\"form-text text-muted\">We'll never share your email with anyone else.</span>\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">Address Email</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <div class=\"input-group input-group-lg input-group-solid\">\r\n                                <div class=\"input-group-prepend\">\r\n                                     <span class=\"input-group-text\">@</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control form-control-lg form-control-solid\" name=\"email\"\r\n                                       formControlName=\"email\"\r\n                                       placeholder=\"Email\">\r\n                            </div>\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row fv-plugins-icon-container\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label\">Address</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <div class=\"input-group input-group-lg input-group-solid\">\r\n                                <input type=\"text\" class=\"form-control form-control-lg form-control-solid\"\r\n                                       formControlName=\"address\"\r\n                                       placeholder=\"loop\">\r\n                                <!--                        <div class=\"input-group-append\"><span class=\"input-group-text\">.com</span></div>-->\r\n                            </div>\r\n                            <div class=\"fv-plugins-message-container\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label text-alert\">Roles</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input class=\"form-control form-control-lg form-control-solid mb-2\" disabled\r\n                                   placeholder=\"Current password\" [value]=\"getStringRoles(user.roles)\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <br>\r\n                    <hr>\r\n                    <br>\r\n                    <!--begin::Alert-->\r\n                    <div class=\"alert alert-danger\" role=\"alert\" style=\"background-color: #FFE2E5; color: #F64E60\">\r\n                        <div class=\"alert-icon\">\r\n                            <span class=\"material-icons\">warning</span>\r\n                        </div>\r\n                        <div>\r\n                            Si vous ne souhaitez pas changer votre mot de passe, laissez simplement ces champs\r\n                            vides,<br>\r\n                            Souvenez-vous de votre mot de passe ou vous pourriez être bloqué par inadvertance hors du\r\n                            système!\r\n                        </div>\r\n                    </div>\r\n                    <!--end::Alert-->\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label text-alert\">Nouveau mot de passe</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input type=\"password\" class=\"form-control form-control-lg form-control-solid\"\r\n                                   formControlName=\"newPassword\"\r\n                                   placeholder=\"New password\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-xl-3 col-lg-3 col-form-label text-alert\">Vérifier le mot de passe</label>\r\n                        <div class=\"col-lg-9 col-xl-9\">\r\n                            <input type=\"password\" class=\"form-control form-control-lg form-control-solid\"\r\n                                   formControlName=\"confirmationPassword\"\r\n                                   placeholder=\"Verify password\">\r\n                            <mat-error\r\n                                    *ngIf=\"userForm.controls.confirmationPassword.invalid && userForm.controls.confirmationPassword.touched\">\r\n                                Passwords doesn't match\r\n                                <strong> Ooops !</strong>\r\n                            </mat-error>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div >\r\n                        <button  mat-raised-button  class=\"btn-color-primary\" (click)=\"onSumbit()\">Sauvegarder</button>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n\n.dashboard-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.column-dashboard {\n  flex: 0 0 50%;\n  max-width: 50%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.column-middle-dashboard {\n  flex: 0 0 100%;\n  max-width: 100%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.column-mini-dashboard {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.bloc-dashboard {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.head-title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--title-dark-grey);\n  padding: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXEVLSUNMSUMtQ1BBXFxFS0lDTElDLUNQQVxcZnJvbnRcXHdzLWFkbWluL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYTtBQ0RoQjs7QURLQTtFQUVDLGFBQWE7RUFFYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQ0ZuQjs7QURJQTtFQUVDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FDRG5COztBREdBO0VBRUMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUNBbkI7O0FERUE7RUFFQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQ0NuQjs7QURDQTtFQUVDLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FDRW5COztBREFBO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFNBQVM7QUNHViIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG4uY29sdW1uLWRhc2hib2FyZCB7XHJcblx0LW1zLWZsZXg6IDAgMCA1MCU7XHJcblx0ZmxleDogMCAwIDUwJTtcclxuXHRtYXgtd2lkdGg6IDUwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbHVtbi1taWRkbGUtZGFzaGJvYXJkIHtcclxuXHQtbXMtZmxleDogMCAwIDEwMCU7XHJcblx0ZmxleDogMCAwIDEwMCU7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sdW1uLW1pbmktZGFzaGJvYXJkIHtcclxuXHQtbXMtZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcblx0ZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcblx0bWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uYmxvYy1kYXNoYm9hcmQge1xyXG5cdC1tcy1mbGV4OiAwIDAgNjYuNjY2NjY3JTtcclxuXHRmbGV4OiAwIDAgNjYuNjY2NjY3JTtcclxuXHRtYXgtd2lkdGg6IDY2LjY2NjY2NyU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5oZWFkLXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6IHZhcigtLXRpdGxlLWRhcmstZ3JleSk7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbn0iLCI6aG9zdCA6Om5nLWRlZXAgbmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uY29sdW1uLWRhc2hib2FyZCB7XG4gIC1tcy1mbGV4OiAwIDAgNTAlO1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY29sdW1uLW1pZGRsZS1kYXNoYm9hcmQge1xuICAtbXMtZmxleDogMCAwIDEwMCU7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvbHVtbi1taW5pLWRhc2hib2FyZCB7XG4gIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMzMzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uYmxvYy1kYXNoYm9hcmQge1xuICAtbXMtZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xuICBtYXgtd2lkdGg6IDY2LjY2NjY2NyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWRhcmstZ3JleSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular

// Lodash

// Services
// Widgets model

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: this.layoutConfigService.getConfig('colors.state.brand'),
            border: 3
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: this.layoutConfigService.getConfig('colors.state.danger'),
            border: 3
        };
        this.chartOptions3 = {
            data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
            color: this.layoutConfigService.getConfig('colors.state.success'),
            border: 3
        };
        this.chartOptions4 = {
            data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
            color: this.layoutConfigService.getConfig('colors.state.primary'),
            border: 3
        };
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Development',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile/profile.component */ "./src/app/views/pages/dashboard/profile/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/__ivy_ngcc__/fesm5/ngx-permissions.js");

// Angular



// Core Module





// Material



var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ALL_HOME', 'ONLY_READ'],
                redirectTo: '/error/403',
            },
            title: 'DashBoard'
        }
    },
    {
        path: 'profile',
        component: _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsGuard"]],
        data: {
            title: 'Profile'
        }
    },];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/profile/profile/profile.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/profile/profile/profile.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-input-wrapper {\n  width: 120px;\n  height: 120px;\n  border-radius: 0.42rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.image-input {\n  position: relative;\n  display: inline-block;\n  border-radius: 0.42rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.myicon {\n  cursor: pointer;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  box-shadow: 0px 9px 16px 0px rgba(24, 28, 50, 0.25) !important;\n  height: 24px;\n  width: 24px;\n  background-color: white;\n}\n\n.image-input-wrapper {\n  border: 3px solid var(--main-button-font-color);\n  box-shadow: 0 0.5rem 1.5rem 0.5rem #c3c3c3;\n}\n\n.btn-color-primary {\n  background: var(--main-color-primary);\n  color: var(--main-button-font-color);\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS9DOlxcVXNlcnNcXFBDXFxEZXNrdG9wXFxFS0lDTElDLUNQQVxcRUtJQ0xJQy1DUEFcXGZyb250XFx3cy1hZG1pbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxkYXNoYm9hcmRcXHByb2ZpbGVcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUNBdkI7O0FESUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FDRHhCOztBREtBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNaLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQ0Z6Qjs7QURNQTtFQUNFLCtDQUErQztFQUMvQywwQ0FBMEM7QUNINUM7O0FES0E7RUFDRSxxQ0FBcUM7RUFDckMsb0NBQW9DO0VBQ3BDLFlBQVk7QUNGZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1pbnB1dC13cmFwcGVye1xyXG5cclxuIHdpZHRoOiAxMjBweDtcclxuIGhlaWdodDogMTIwcHg7XHJcbiBib3JkZXItcmFkaXVzOiAwLjQycmVtO1xyXG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4uaW1hZ2UtaW5wdXR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAwLjQycmVtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5teWljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTZweCAwcHggcmdiYSgyNCwgMjgsIDUwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5pbWFnZS1pbnB1dC13cmFwcGVye1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tYnV0dG9uLWZvbnQtY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDEuNXJlbSAwLjVyZW0gI2MzYzNjMztcclxufVxyXG4uYnRuLWNvbG9yLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1idXR0b24tZm9udC1jb2xvcik7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiIsIi5pbWFnZS1pbnB1dC13cmFwcGVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjQycmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1hZ2UtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMC40MnJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm15aWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogLTEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTZweCAwcHggcmdiYSgyNCwgMjgsIDUwLCAwLjI1KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLWJ1dHRvbi1mb250LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIDAuNXJlbSAjYzNjM2MzO1xufVxuXG4uYnRuLWNvbG9yLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1idXR0b24tZm9udC1jb2xvcik7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/profile/profile/profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/profile/profile/profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_auth_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/auth/_actions/user.actions */ "./src/app/core/auth/_actions/user.actions.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userFB, layoutUtilsService, store, userService, cd, zone) {
        this.userFB = userFB;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.userService = userService;
        this.cd = cd;
        this.zone = zone;
        this.hasFormErrors = false;
        this.PHONE_REGEX = /^(00213|\+213|0)(5|6|7)(\s*?[0-9]\s*?){5,8}$/;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getUserByEmail().subscribe(function (res) {
            _this.user = Object.assign({}, res);
            _this.createForm();
            _this.zone.run(function () {
                _this.user = Object.assign({}, res);
                _this.cd.detectChanges();
            });
        });
    };
    /**
     * Create form
     */
    ProfileComponent.prototype.createForm = function () {
        this.userForm = this.userFB.group({
            username: [this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstname: [this.user.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [this.user.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [this.user.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            phone: [this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.PHONE_REGEX)])],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmationPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: MustMatch('newPassword', 'confirmationPassword')
        });
    };
    /**
     * Returns prepared data for save
     */
    ProfileComponent.prototype.prepareUser = function () {
        var controls = this.userForm.controls;
        var _user = new _core_auth__WEBPACK_IMPORTED_MODULE_2__["User"]();
        _user.clear();
        _user.address = controls.address.value;
        // _user.pic = this.user.pic;
        _user.id = this.currentUser.id;
        _user.username = controls.username.value;
        _user.email = controls.email.value;
        _user.firstname = controls.firstname.value;
        _user.lastname = controls.lastname.value;
        _user.phone = controls.phone.value;
        _user.roles = this.currentUser.roles;
        if (controls.newPassword.value !== '') {
            _user.password = controls.newPassword.value;
        }
        else {
            _user.password = undefined;
        }
        return _user;
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    ProfileComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (controls.username.invalid
            || controls.firstname.invalid
            || controls.lastname.invalid
            || controls.email.invalid
            || controls.address.invalid
            || controls.phone.invalid) {
            this.hasFormErrors = true;
            return;
        }
        if (controls.newPassword.value !== '' && controls.confirmationPassword.invalid) {
            this.hasFormErrors = true;
            return;
        }
        var editedUser = this.prepareUser();
        this.updateUser(editedUser, withBack);
    };
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    ProfileComponent.prototype.updateUser = function (_user, withBack) {
        // Update User
        // tslint:disable-next-line:prefer-const
        if (withBack === void 0) { withBack = false; }
        var updatedUser = {
            id: _user.id,
            changes: _user
        };
        this.store.dispatch(_core_auth_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["UserUpdated"]({ partialUser: updatedUser, user: _user }));
        var message = "User successfully has been saved.";
        this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Update, 5000, true, true);
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    ProfileComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /**
     * get String role names
     */
    ProfileComponent.prototype.getStringRoles = function (roles) {
        var roleNames = [];
        roles.forEach(function (role) {
            switch (role) {
                case 'ROLE_SUPERADMIN':
                    roleNames.push('Super Administrateur');
                    break;
                case 'ROLE_MARKETING':
                    roleNames.push('Commercial');
                    break;
                case 'ROLE_EDITOR':
                    roleNames.push('Editeur');
                    break;
                case 'ROLE_ACCOUNTING':
                    roleNames.push('comptabilité');
                    break;
                case 'ROLE_ADMIN':
                    roleNames.push('Administrateur');
                    break;
                case 'ROLE_GUEST':
                    roleNames.push('INVITÉ');
                    break;
                default:
                    roleNames.push(role);
                    break;
            }
        });
        return roleNames;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/profile/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/views/pages/dashboard/profile/profile/profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=views-pages-dashboard-dashboard-module.js.map