"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_state_service_1 = require("./state/app-state.service");
var AppComponent = (function () {
    function AppComponent(appState) {
        var _this = this;
        this.appState = appState;
        this.preloaderDiv = document.getElementsByClassName('mp-preloader')[0];
        var sub = appState.preloader$.subscribe(function (preloader) {
            if (!preloader && _this.preloaderDiv) {
                _this.preloaderDiv.className += ' mp-loaded';
                sub.unsubscribe();
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [app_state_service_1.AppStateService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLCtEQUE0RDtBQVE1RCxJQUFhLFlBQVk7SUFFdkIsc0JBQW9CLFFBQXdCO1FBQTVDLGlCQVdDO1FBWG1CLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUNyQyxVQUFBLFNBQVM7WUFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDO2dCQUM1QyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQyxDQUFDO3FDQUk2QixtQ0FBZTtHQUZqQyxZQUFZLENBY3hCO0FBZFksb0NBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvYXBwLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdtcC1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcmVsb2FkZXJEaXY6YW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFN0YXRlOkFwcFN0YXRlU2VydmljZSkge1xuICAgIHRoaXMucHJlbG9hZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXAtcHJlbG9hZGVyJylbMF07XG5cbiAgICBsZXQgc3ViID0gYXBwU3RhdGUucHJlbG9hZGVyJC5zdWJzY3JpYmUoXG4gICAgICBwcmVsb2FkZXIgPT4ge1xuICAgICAgICBpZiAoIXByZWxvYWRlciAmJiB0aGlzLnByZWxvYWRlckRpdikge1xuICAgICAgICAgIHRoaXMucHJlbG9hZGVyRGl2LmNsYXNzTmFtZSArPSAnIG1wLWxvYWRlZCc7XG4gICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=
