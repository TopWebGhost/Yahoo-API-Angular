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
var forms_1 = require("@angular/forms");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/takeUntil");
var SearchBoxComponent = (function () {
    function SearchBoxComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.changed = new core_1.EventEmitter();
        this.activate = new core_1.EventEmitter();
        this.formControl = new forms_1.FormControl();
        this.ngOnDestroy$ = new Subject_1.Subject();
        this.formControl.valueChanges
            .takeUntil(this.ngOnDestroy$)
            .debounceTime(500)
            .subscribe(function (value) { return _this.changed.emit(value); });
    }
    SearchBoxComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.value) {
            this.formControl.setValue(this.value, {});
        }
        if (changes.active && this.active) {
            setTimeout(function () {
                _this.input.nativeElement.focus();
            }, 0);
        }
    };
    SearchBoxComponent.prototype.activateInput = function () {
        var _this = this;
        if (!this.windowClickListener) {
            this.windowClickListener = this.renderer.listenGlobal('window', 'click', function (event) {
                if (!event.target.parentElement ||
                    (event.target.parentElement.className.indexOf('mp-search-box') === -1 &&
                        event.target.className.indexOf('mdl-button') === -1)) {
                    _this.toggleActive(false);
                    _this.formControl.setValue('', {});
                    _this.destroyListener();
                }
            });
            this.toggleActive(true);
        }
    };
    SearchBoxComponent.prototype.clear = function () {
        this.formControl.setValue('', {});
        this.changed.emit(null);
        this.input.nativeElement.focus();
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
        this.ngOnDestroy$.next(true);
        this.destroyListener();
    };
    SearchBoxComponent.prototype.toggleActive = function (active) {
        this.active = active;
        this.activate.emit(active);
    };
    SearchBoxComponent.prototype.destroyListener = function () {
        if (this.windowClickListener) {
            this.windowClickListener();
            this.windowClickListener = null;
        }
    };
    return SearchBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchBoxComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchBoxComponent.prototype, "active", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SearchBoxComponent.prototype, "changed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SearchBoxComponent.prototype, "activate", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], SearchBoxComponent.prototype, "input", void 0);
SearchBoxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-search-box',
        templateUrl: 'search-box.component.html',
        styleUrls: ['search-box.component.css']
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], SearchBoxComponent);
exports.SearchBoxComponent = SearchBoxComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQVV1QjtBQUN2Qix3Q0FBNkM7QUFDN0Msd0NBQXVDO0FBQ3ZDLDBDQUF3QztBQUN4Qyx1Q0FBcUM7QUFTckMsSUFBYSxrQkFBa0I7SUFVN0IsNEJBQW9CLFFBQWlCO1FBQXJDLGlCQUtDO1FBTG1CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFQM0IsWUFBTyxHQUF3QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNsRCxhQUFRLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTlELGdCQUFXLEdBQWUsSUFBSSxtQkFBVyxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUc1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7YUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUNqQixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBVztRQUF2QixpQkFVQztRQVRDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEMsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25DLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUFBLGlCQWNDO1FBYkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUNyRSxVQUFDLEtBQVM7Z0JBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWE7b0JBQzdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixNQUFjO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyw0Q0FBZSxHQUF2QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsSUFBQTtBQWxFVTtJQUFSLFlBQUssRUFBRTs7aURBQWM7QUFDYjtJQUFSLFlBQUssRUFBRTs7a0RBQWdCO0FBQ2Q7SUFBVCxhQUFNLEVBQUU7OEJBQVMsbUJBQVk7bURBQThCO0FBQ2xEO0lBQVQsYUFBTSxFQUFFOzhCQUFVLG1CQUFZO29EQUErQjtBQUMxQztJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBTyxpQkFBVTtpREFBQztBQUwxQixrQkFBa0I7SUFQOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQ3hDLENBQUM7cUNBWTZCLGVBQVE7R0FWMUIsa0JBQWtCLENBbUU5QjtBQW5FWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBSZW5kZXJlcixcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZVVudGlsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtc2VhcmNoLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWFyY2gtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdmFsdWU6c3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmU6Ym9vbGVhbjtcbiAgQE91dHB1dCgpIGNoYW5nZWQ6RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6RWxlbWVudFJlZjtcbiAgZm9ybUNvbnRyb2w6Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHJpdmF0ZSB3aW5kb3dDbGlja0xpc3RlbmVyOkZ1bmN0aW9uO1xuICBwcml2YXRlIG5nT25EZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjpSZW5kZXJlcikge1xuICAgIHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAudGFrZVVudGlsKHRoaXMubmdPbkRlc3Ryb3kkKVxuICAgICAgLmRlYm91bmNlVGltZSg1MDApXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY2hhbmdlZC5lbWl0KHZhbHVlKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSkge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMudmFsdWUsIHt9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLndpbmRvd0NsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMud2luZG93Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCd3aW5kb3cnLCAnY2xpY2snLFxuICAgICAgICAoZXZlbnQ6YW55KSA9PiB7XG4gICAgICAgICAgaWYgKCFldmVudC50YXJnZXQucGFyZW50RWxlbWVudCB8fFxuICAgICAgICAgICAgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtcC1zZWFyY2gtYm94JykgPT09IC0xICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ21kbC1idXR0b24nKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKCcnLCB7fSk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKCcnLCB7fSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQobnVsbCk7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm5nT25EZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVyKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUFjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdChhY3RpdmUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMud2luZG93Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy53aW5kb3dDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLndpbmRvd0NsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19
