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
var NotificationComponent = (function () {
    function NotificationComponent() {
        this.action = new core_1.EventEmitter();
    }
    NotificationComponent.prototype.buttonClick = function () {
        this.action.emit(this.button.action);
    };
    return NotificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "button", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NotificationComponent.prototype, "action", void 0);
NotificationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-notification',
        templateUrl: 'notification.component.html',
        styleUrls: ['notification.component.css']
    })
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum[NotificationTypeEnum["None"] = 0] = "None";
    NotificationTypeEnum[NotificationTypeEnum["Notification"] = 1] = "Notification";
    NotificationTypeEnum[NotificationTypeEnum["Error"] = 2] = "Error";
    NotificationTypeEnum[NotificationTypeEnum["Loader"] = 3] = "Loader";
})(NotificationTypeEnum = exports.NotificationTypeEnum || (exports.NotificationTypeEnum = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUU7QUFTdkUsSUFBYSxxQkFBcUI7SUFQbEM7UUFXWSxXQUFNLEdBQXdCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSzdELENBQUM7SUFIQywyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVJVO0lBQVIsWUFBSyxFQUFFOzttREFBMkI7QUFDMUI7SUFBUixZQUFLLEVBQUU7O29EQUFjO0FBQ2I7SUFBUixZQUFLLEVBQUU7O3FEQUFvQztBQUNsQztJQUFULGFBQU0sRUFBRTs4QkFBUSxtQkFBWTtxREFBOEI7QUFKaEQscUJBQXFCO0lBUGpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzFDLENBQUM7R0FFVyxxQkFBcUIsQ0FTakM7QUFUWSxzREFBcUI7QUFXbEMsSUFBWSxvQkFLWDtBQUxELFdBQVksb0JBQW9CO0lBQzlCLCtEQUFJLENBQUE7SUFDSiwrRUFBWSxDQUFBO0lBQ1osaUVBQUssQ0FBQTtJQUNMLG1FQUFNLENBQUE7QUFDUixDQUFDLEVBTFcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFLL0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21wLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSB0eXBlOk5vdGlmaWNhdGlvblR5cGVFbnVtO1xuICBASW5wdXQoKSB2YWx1ZTpzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1dHRvbjpOb3RpZmljYXRpb25CdXR0b25JbnRlcmZhY2U7XG4gIEBPdXRwdXQoKSBhY3Rpb246RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgYnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCh0aGlzLmJ1dHRvbi5hY3Rpb24pO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGVFbnVtIHtcbiAgTm9uZSxcbiAgTm90aWZpY2F0aW9uLFxuICBFcnJvcixcbiAgTG9hZGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQnV0dG9uSW50ZXJmYWNlIHtcbiAgaWNvbj86c3RyaW5nO1xuICB0ZXh0PzpzdHJpbmc7XG4gIGFjdGlvbj86c3RyaW5nO1xufVxuIl19
