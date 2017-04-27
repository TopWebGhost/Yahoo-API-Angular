"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var chart_module_1 = require("./chart/chart.module");
var info_module_1 = require("./info/info.module");
var news_module_1 = require("./news/news.module");
var ContentModule = (function () {
    function ContentModule() {
    }
    return ContentModule;
}());
ContentModule = __decorate([
    core_1.NgModule({
        imports: [
            chart_module_1.ChartModule,
            info_module_1.InfoModule,
            news_module_1.NewsModule
        ],
        declarations: [
            index_1.ContentComponent
        ],
        exports: [
            index_1.ContentComponent
        ]
    })
], ContentModule);
exports.ContentModule = ContentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxpQ0FBMkM7QUFDM0MscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCxrREFBZ0Q7QUFlaEQsSUFBYSxhQUFhO0lBQTFCO0lBQ0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxhQUFhO0lBYnpCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDBCQUFXO1lBQ1gsd0JBQVU7WUFDVix3QkFBVTtTQUNYO1FBQ0QsWUFBWSxFQUFFO1lBQ1osd0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FDekI7QUFEWSxzQ0FBYSIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvY29udGVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2NoYXJ0L2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBJbmZvTW9kdWxlIH0gZnJvbSAnLi9pbmZvL2luZm8ubW9kdWxlJztcbmltcG9ydCB7IE5ld3NNb2R1bGUgfSBmcm9tICcuL25ld3MvbmV3cy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2hhcnRNb2R1bGUsXG4gICAgSW5mb01vZHVsZSxcbiAgICBOZXdzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRlbnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbnRlbnRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50TW9kdWxlIHtcbn1cbiJdfQ==
