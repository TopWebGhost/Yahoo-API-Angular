"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular2_mdl_1 = require("angular2-mdl");
var index_1 = require("./index");
var SearchBoxModule = (function () {
    function SearchBoxModule() {
    }
    return SearchBoxModule;
}());
SearchBoxModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            angular2_mdl_1.MdlModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            index_1.SearchBoxComponent
        ],
        exports: [
            index_1.SearchBoxComponent
        ]
    })
], SearchBoxModule);
exports.SearchBoxModule = SearchBoxModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VhcmNoLWJveC9zZWFyY2gtYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msd0NBQXFEO0FBQ3JELDZDQUF5QztBQUN6QyxpQ0FBNkM7QUFlN0MsSUFBYSxlQUFlO0lBQTVCO0lBQ0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxlQUFlO0lBYjNCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1osd0JBQVM7WUFDVCwyQkFBbUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWiwwQkFBa0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQkFBa0I7U0FDbkI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUMzQjtBQURZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VhcmNoLWJveC9zZWFyY2gtYm94Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1kbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1kbCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNZGxNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZWFyY2hCb3hDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNlYXJjaEJveENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveE1vZHVsZSB7XG59XG4iXX0=
