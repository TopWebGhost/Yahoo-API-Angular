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
var RangeComponent = (function () {
    function RangeComponent() {
        this.options = {};
        this.position = {};
    }
    RangeComponent.prototype.ngOnChanges = function () {
        if (this.options) {
            this.position = this.getPosition(this.options);
        }
    };
    RangeComponent.prototype.getPosition = function (options) {
        var total = Number(options.end) - Number(options.start);
        return {
            left: ((Number(options.activeStart) - Number(options.start)) / total) * 100,
            width: ((Number(options.activeEnd) - Number(options.activeStart)) / total) * 100,
            pin: ((Number(options.active) - Number(options.start)) / total) * 100
        };
    };
    return RangeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RangeComponent.prototype, "options", void 0);
RangeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-range',
        templateUrl: 'range.component.html',
        styleUrls: ['range.component.css']
    })
], RangeComponent);
exports.RangeComponent = RangeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL3JhbmdlL3JhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUl1QjtBQVN2QixJQUFhLGNBQWM7SUFQM0I7UUFRVyxZQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUM1QyxhQUFRLEdBQTBCLEVBQUUsQ0FBQztJQWdCdkMsQ0FBQztJQWRDLG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsT0FBNkI7UUFDL0MsSUFBSSxLQUFLLEdBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRztZQUMzRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUc7WUFDaEYsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHO1NBQ3RFLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBakJVO0lBQVIsWUFBSyxFQUFFOzsrQ0FBb0M7QUFEakMsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUVXLGNBQWMsQ0FrQjFCO0FBbEJZLHdDQUFjIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL3JhbmdlL3JhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JhbmdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0aW9uczpSYW5nZU9wdGlvbnNJbnRlcmZhY2UgPSB7fTtcbiAgcG9zaXRpb246UmFuZ2VQb3NpdGlvbkludGVyZmFjZSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbihvcHRpb25zOlJhbmdlT3B0aW9uc0ludGVyZmFjZSkge1xuICAgIGxldCB0b3RhbDpudW1iZXIgPSBOdW1iZXIob3B0aW9ucy5lbmQpIC0gTnVtYmVyKG9wdGlvbnMuc3RhcnQpO1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiAoKE51bWJlcihvcHRpb25zLmFjdGl2ZVN0YXJ0KSAtIE51bWJlcihvcHRpb25zLnN0YXJ0KSkgLyB0b3RhbCkgKiAxMDAsXG4gICAgICB3aWR0aDogKChOdW1iZXIob3B0aW9ucy5hY3RpdmVFbmQpIC0gTnVtYmVyKG9wdGlvbnMuYWN0aXZlU3RhcnQpKSAvIHRvdGFsKSAqIDEwMCxcbiAgICAgIHBpbjogKChOdW1iZXIob3B0aW9ucy5hY3RpdmUpIC0gTnVtYmVyKG9wdGlvbnMuc3RhcnQpKSAvIHRvdGFsKSAqIDEwMFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZU9wdGlvbnNJbnRlcmZhY2Uge1xuICB0ZXh0PzpzdHJpbmc7XG4gIHN0YXJ0PzpudW1iZXI7XG4gIGVuZD86bnVtYmVyO1xuICBhY3RpdmVTdGFydD86bnVtYmVyO1xuICBhY3RpdmVFbmQ/Om51bWJlcjtcbiAgYWN0aXZlPzpudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VQb3NpdGlvbkludGVyZmFjZSB7XG4gIGxlZnQ/Om51bWJlcjtcbiAgd2lkdGg/Om51bWJlcjtcbiAgcGluPzpudW1iZXI7XG59XG4iXX0=
