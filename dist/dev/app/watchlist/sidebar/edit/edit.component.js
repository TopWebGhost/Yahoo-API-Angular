"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ng2_dragula_1 = require("ng2-dragula");
var index_1 = require("../../../core/index");
var index_2 = require("../state/index");
var index_3 = require("../favorites/state/index");
var header_state_service_1 = require("../../../shared/header/state/header-state.service");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var edit_service_1 = require("./edit.service");
var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(favoritesState, sidebarState, headerState, watchlistState, editService, renderer, dragulaService) {
        var _this = _super.call(this) || this;
        _this.favoritesState = favoritesState;
        _this.sidebarState = sidebarState;
        _this.headerState = headerState;
        _this.watchlistState = watchlistState;
        _this.editService = editService;
        _this.renderer = renderer;
        _this.dragulaService = dragulaService;
        _this.favoritesData = [];
        _this.favorites = [];
        _this.deleted = [];
        _this.dragName = 'editDrag';
        _this.subscriptions.push(watchlistState.favorites$.subscribe(function (favorites) { return _this.favorites = favorites; }));
        _this.subscriptions.push(favoritesState.data$.subscribe(function (data) { return _this.favoritesData = data.filter(function (item) {
            return _this.favorites.indexOf(item.symbol) !== -1;
        }); }));
        dragulaService.setOptions(_this.dragName, editService.getDragOptions());
        return _this;
    }
    EditComponent.prototype.showDelete = function (symbol, event) {
        var _this = this;
        event.stopPropagation();
        this.selected = symbol;
        this.windowClickListener = this.renderer.listenGlobal('window', 'click', function (event) {
            _this.selected = null;
            _this.destroyListener();
        });
    };
    EditComponent.prototype.close = function () {
        this.closeScreen(index_2.SidebarTypeEnum.List);
    };
    EditComponent.prototype.add = function () {
        this.closeScreen(index_2.SidebarTypeEnum.Add);
    };
    EditComponent.prototype.delete = function (symbol, event) {
        event.stopPropagation();
        this.deleted.push(symbol);
        if (this.deleted.length === this.favoritesData.length) {
            this.notification = index_1.Config.notifications.noFavorites;
        }
        this.destroyListener();
    };
    EditComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.destroyListener();
        this.dragulaService.destroy(this.dragName);
    };
    EditComponent.prototype.destroyListener = function () {
        if (this.windowClickListener) {
            this.windowClickListener();
            this.windowClickListener = null;
        }
    };
    EditComponent.prototype.closeScreen = function (type) {
        this.favoritesState.changeOrder(this.editService.getOrder(this.list, this.deleted));
        if (this.deleted.length > 0) {
            this.watchlistState.deleteFavorites(this.deleted);
        }
        if (type === index_2.SidebarTypeEnum.Add) {
            this.headerState.changeSearchActive(true);
        }
        else {
            this.sidebarState.changeType(type);
        }
    };
    return EditComponent;
}(index_1.Subscriptions));
__decorate([
    core_1.ViewChild('list'),
    __metadata("design:type", core_1.ElementRef)
], EditComponent.prototype, "list", void 0);
EditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-edit',
        templateUrl: 'edit.component.html',
        styleUrls: ['edit.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [index_3.FavoritesStateService,
        index_2.SidebarStateService,
        header_state_service_1.HeaderStateService,
        watchlist_state_service_1.WatchlistStateService,
        edit_service_1.EditService,
        core_1.Renderer,
        ng2_dragula_1.DragulaService])
], EditComponent);
exports.EditComponent = EditComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9lZGl0L2VkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RztBQUN6RywyQ0FBNkM7QUFDN0MsNkNBQTREO0FBQzVELHdDQUFzRTtBQUN0RSxrREFBaUU7QUFDakUsMEZBQXVGO0FBQ3ZGLCtFQUE0RTtBQUU1RSwrQ0FBNkM7QUFVN0MsSUFBYSxhQUFhO0lBQVMsaUNBQWE7SUFVOUMsdUJBQW9CLGNBQW9DLEVBQ3BDLFlBQWdDLEVBQ2hDLFdBQThCLEVBQzlCLGNBQW9DLEVBQ3BDLFdBQXVCLEVBQ3ZCLFFBQWlCLEVBQ2pCLGNBQTZCO1FBTmpELFlBT0UsaUJBQU8sU0FZUjtRQW5CbUIsb0JBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxpQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsb0JBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWMsR0FBZCxjQUFjLENBQWU7UUFkakQsbUJBQWEsR0FBd0IsRUFBRSxDQUFDO1FBQ3hDLGVBQVMsR0FBWSxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixjQUFRLEdBQVUsVUFBVSxDQUFDO1FBVzNCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUN6RCxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUN4QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUF1QjtZQUMvRCxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxFQUZNLENBRU4sQ0FDSCxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7O0lBQ3pFLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsTUFBYSxFQUFFLEtBQVc7UUFBckMsaUJBUUM7UUFQQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQ3JFLFVBQUMsS0FBVztZQUNWLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sTUFBYSxFQUFFLEtBQVc7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLFdBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLElBQW9CO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFcEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FwRkEsQUFvRkMsQ0FwRmtDLHFCQUFhLEdBb0YvQztBQW5Gb0I7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQU0saUJBQVU7MkNBQUM7QUFEeEIsYUFBYTtJQVJ6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FZbUMsNkJBQXFCO1FBQ3ZCLDJCQUFtQjtRQUNwQix5Q0FBa0I7UUFDZiwrQ0FBcUI7UUFDeEIsMEJBQVc7UUFDZCxlQUFRO1FBQ0YsNEJBQWM7R0FoQnRDLGFBQWEsQ0FvRnpCO0FBcEZZLHNDQUFhIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9lZGl0L2VkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgT25EZXN0cm95LCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJ25nMi1kcmFndWxhJztcbmltcG9ydCB7IENvbmZpZywgU3Vic2NyaXB0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU2lkZWJhclN0YXRlU2VydmljZSwgU2lkZWJhclR5cGVFbnVtIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgRmF2b3JpdGVzU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IEhlYWRlclN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9oZWFkZXIvc3RhdGUvaGVhZGVyLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvd2F0Y2hsaXN0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvY2tEYXRhSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvd2F0Y2hsaXN0LnN0YXRlJztcbmltcG9ydCB7IEVkaXRTZXJ2aWNlIH0gZnJvbSAnLi9lZGl0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdtcC1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICdlZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VkaXQuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdENvbXBvbmVudCBleHRlbmRzIFN1YnNjcmlwdGlvbnMgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdsaXN0JykgbGlzdDpFbGVtZW50UmVmO1xuICBmYXZvcml0ZXNEYXRhOlN0b2NrRGF0YUludGVyZmFjZVtdID0gW107XG4gIGZhdm9yaXRlczpzdHJpbmdbXSA9IFtdO1xuICBub3RpZmljYXRpb246c3RyaW5nO1xuICBzZWxlY3RlZDpzdHJpbmc7XG4gIGRlbGV0ZWQ6c3RyaW5nW10gPSBbXTtcbiAgZHJhZ05hbWU6c3RyaW5nID0gJ2VkaXREcmFnJztcbiAgcHJpdmF0ZSB3aW5kb3dDbGlja0xpc3RlbmVyOkZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmF2b3JpdGVzU3RhdGU6RmF2b3JpdGVzU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNpZGViYXJTdGF0ZTpTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclN0YXRlOkhlYWRlclN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3YXRjaGxpc3RTdGF0ZTpXYXRjaGxpc3RTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWRpdFNlcnZpY2U6RWRpdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6UmVuZGVyZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6RHJhZ3VsYVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHdhdGNobGlzdFN0YXRlLmZhdm9yaXRlcyQuc3Vic2NyaWJlKFxuICAgICAgZmF2b3JpdGVzID0+IHRoaXMuZmF2b3JpdGVzID0gZmF2b3JpdGVzXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChmYXZvcml0ZXNTdGF0ZS5kYXRhJC5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHRoaXMuZmF2b3JpdGVzRGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtOlN0b2NrRGF0YUludGVyZmFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpdGVtLnN5bWJvbCkgIT09IC0xO1xuICAgICAgfSlcbiAgICApKTtcblxuICAgIGRyYWd1bGFTZXJ2aWNlLnNldE9wdGlvbnModGhpcy5kcmFnTmFtZSwgZWRpdFNlcnZpY2UuZ2V0RHJhZ09wdGlvbnMoKSk7XG4gIH1cblxuICBzaG93RGVsZXRlKHN5bWJvbDpzdHJpbmcsIGV2ZW50OkV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHN5bWJvbDtcbiAgICB0aGlzLndpbmRvd0NsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnd2luZG93JywgJ2NsaWNrJyxcbiAgICAgIChldmVudDpFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZVNjcmVlbihTaWRlYmFyVHlwZUVudW0uTGlzdCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5jbG9zZVNjcmVlbihTaWRlYmFyVHlwZUVudW0uQWRkKTtcbiAgfVxuXG4gIGRlbGV0ZShzeW1ib2w6c3RyaW5nLCBldmVudDpFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGVsZXRlZC5wdXNoKHN5bWJvbCk7XG4gICAgaWYgKHRoaXMuZGVsZXRlZC5sZW5ndGggPT09IHRoaXMuZmF2b3JpdGVzRGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uID0gQ29uZmlnLm5vdGlmaWNhdGlvbnMubm9GYXZvcml0ZXM7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVyKCk7XG4gICAgdGhpcy5kcmFndWxhU2VydmljZS5kZXN0cm95KHRoaXMuZHJhZ05hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMud2luZG93Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy53aW5kb3dDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLndpbmRvd0NsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VTY3JlZW4odHlwZTpTaWRlYmFyVHlwZUVudW0pIHtcbiAgICB0aGlzLmZhdm9yaXRlc1N0YXRlLmNoYW5nZU9yZGVyKHRoaXMuZWRpdFNlcnZpY2UuZ2V0T3JkZXIodGhpcy5saXN0LCB0aGlzLmRlbGV0ZWQpKTtcblxuICAgIGlmICh0aGlzLmRlbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5kZWxldGVGYXZvcml0ZXModGhpcy5kZWxldGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gU2lkZWJhclR5cGVFbnVtLkFkZCkge1xuICAgICAgdGhpcy5oZWFkZXJTdGF0ZS5jaGFuZ2VTZWFyY2hBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lkZWJhclN0YXRlLmNoYW5nZVR5cGUodHlwZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
