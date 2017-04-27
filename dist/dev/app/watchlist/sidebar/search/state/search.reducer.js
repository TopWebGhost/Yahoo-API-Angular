"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_state_1 = require("./search.state");
var index_1 = require("./index");
var initialState = new search_state_1.SearchInitialState();
exports.searchReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var payload = _a.payload, type = _a.type;
    switch (type) {
        case index_1.SearchActions.FETCH_FULFILLED:
            return state.set(index_1.SearchStateKeys.Data, payload);
        case index_1.SearchActions.FETCH_LOADER:
            return state.set(index_1.SearchStateKeys.Loader, payload);
        case index_1.SearchActions.FETCH_ERROR:
            return state.set(index_1.SearchStateKeys.Error, payload);
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc3RhdGUvc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwrQ0FBb0Q7QUFDcEQsaUNBSWlCO0FBRWpCLElBQU0sWUFBWSxHQUF3QixJQUFJLGlDQUFrQixFQUEwQixDQUFDO0FBRTlFLFFBQUEsYUFBYSxHQUN4QixVQUFDLEtBQXlDLEVBQUUsRUFBdUI7SUFBbEUsc0JBQUEsRUFBQSxvQkFBeUM7UUFBRyxvQkFBTyxFQUFFLGNBQUk7SUFDeEQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUsscUJBQWEsQ0FBQyxlQUFlO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELEtBQUsscUJBQWEsQ0FBQyxZQUFZO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELEtBQUsscUJBQWEsQ0FBQyxXQUFXO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25EO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc3RhdGUvc2VhcmNoLnJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25cbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU2VhcmNoSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9zZWFyY2guc3RhdGUnO1xuaW1wb3J0IHtcbiAgU2VhcmNoQWN0aW9ucyxcbiAgU2VhcmNoU3RhdGVLZXlzLFxuICBTZWFyY2hTdGF0ZUludGVyZmFjZVxufSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOlNlYXJjaFN0YXRlSW50ZXJmYWNlID0gbmV3IFNlYXJjaEluaXRpYWxTdGF0ZSgpIGFzIFNlYXJjaFN0YXRlSW50ZXJmYWNlO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoUmVkdWNlcjpBY3Rpb25SZWR1Y2VyPFNlYXJjaFN0YXRlSW50ZXJmYWNlPiA9XG4gIChzdGF0ZTpTZWFyY2hTdGF0ZUludGVyZmFjZSA9IGluaXRpYWxTdGF0ZSwge3BheWxvYWQsIHR5cGV9OiBBY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgU2VhcmNoQWN0aW9ucy5GRVRDSF9GVUxGSUxMRUQ6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXQoU2VhcmNoU3RhdGVLZXlzLkRhdGEsIHBheWxvYWQpO1xuICAgICAgY2FzZSBTZWFyY2hBY3Rpb25zLkZFVENIX0xPQURFUjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChTZWFyY2hTdGF0ZUtleXMuTG9hZGVyLCBwYXlsb2FkKTtcbiAgICAgIGNhc2UgU2VhcmNoQWN0aW9ucy5GRVRDSF9FUlJPUjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChTZWFyY2hTdGF0ZUtleXMuRXJyb3IsIHBheWxvYWQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcbiJdfQ==
