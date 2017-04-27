"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriptions = (function () {
    function Subscriptions() {
        this.subscriptions = [];
    }
    Subscriptions.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) {
            item.unsubscribe();
        });
        this.subscriptions.length = 0;
    };
    return Subscriptions;
}());
exports.Subscriptions = Subscriptions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3N1YnNjcmlwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUdFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCO1lBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb3JlL3N1YnNjcmlwdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25zIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uczpJU3Vic2NyaXB0aW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoaXRlbTpJU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBpdGVtLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoID0gMDtcbiAgfVxufVxuIl19
