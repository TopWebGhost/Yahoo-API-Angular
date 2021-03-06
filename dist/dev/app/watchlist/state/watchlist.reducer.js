"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var watchlist_state_1 = require("./watchlist.state");
var index_1 = require("./index");
var initialState = new watchlist_state_1.WatchlistInitialState();
exports.watchlistReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var payload = _a.payload, type = _a.type;
    switch (type) {
        case index_1.WatchlistActions.CHANGE_STOCK:
            return state.set(index_1.WatchlistStateKeys.Stock, payload);
        case index_1.WatchlistActions.CHANGE_STOCK_DATA:
            return state.set(index_1.WatchlistStateKeys.StockData, payload);
        case index_1.WatchlistActions.DELETE_FAVORITES:
            return state.set(index_1.WatchlistStateKeys.Favorites, state.favorites.filter(function (symbol) { return payload.indexOf(symbol) === -1; }));
        case index_1.WatchlistActions.ADD_FAVORITE:
            if (state.favorites.indexOf(payload) === -1) {
                return state.set(index_1.WatchlistStateKeys.Favorites, [payload].concat(state.favorites));
            }
            else {
                return state;
            }
        case index_1.WatchlistActions.CHANGE_HIGHLIGHTS:
            return state.set(index_1.WatchlistStateKeys.Highlights, payload);
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc3RhdGUvd2F0Y2hsaXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBMEQ7QUFDMUQsaUNBSWlCO0FBRWpCLElBQU0sWUFBWSxHQUEyQixJQUFJLHVDQUFxQixFQUE2QixDQUFDO0FBRXZGLFFBQUEsZ0JBQWdCLEdBQzNCLFVBQUMsS0FBNEMsRUFBRSxFQUF1QjtJQUFyRSxzQkFBQSxFQUFBLG9CQUE0QztRQUFHLG9CQUFPLEVBQUUsY0FBSTtJQUMzRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyx3QkFBZ0IsQ0FBQyxZQUFZO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxLQUFLLHdCQUFnQixDQUFDLGlCQUFpQjtZQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQkFBa0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUQsS0FBSyx3QkFBZ0IsQ0FBQyxnQkFBZ0I7WUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMEJBQWtCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNuRSxVQUFDLE1BQWEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FDbkQsQ0FBQztRQUNKLEtBQUssd0JBQWdCLENBQUMsWUFBWTtZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUFrQixDQUFDLFNBQVMsR0FBRyxPQUFPLFNBQUssS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hGLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILEtBQUssd0JBQWdCLENBQUMsaUJBQWlCO1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUFrQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3N0YXRlL3dhdGNobGlzdC5yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi93YXRjaGxpc3Quc3RhdGUnO1xuaW1wb3J0IHtcbiAgV2F0Y2hsaXN0QWN0aW9ucyxcbiAgV2F0Y2hsaXN0U3RhdGVLZXlzLFxuICBXYXRjaGxpc3RTdGF0ZUludGVyZmFjZVxufSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOldhdGNobGlzdFN0YXRlSW50ZXJmYWNlID0gbmV3IFdhdGNobGlzdEluaXRpYWxTdGF0ZSgpIGFzIFdhdGNobGlzdFN0YXRlSW50ZXJmYWNlO1xuXG5leHBvcnQgY29uc3Qgd2F0Y2hsaXN0UmVkdWNlcjpBY3Rpb25SZWR1Y2VyPFdhdGNobGlzdFN0YXRlSW50ZXJmYWNlPiA9XG4gIChzdGF0ZTpXYXRjaGxpc3RTdGF0ZUludGVyZmFjZSA9IGluaXRpYWxTdGF0ZSwge3BheWxvYWQsIHR5cGV9OiBBY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgV2F0Y2hsaXN0QWN0aW9ucy5DSEFOR0VfU1RPQ0s6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXQoV2F0Y2hsaXN0U3RhdGVLZXlzLlN0b2NrLCBwYXlsb2FkKTtcbiAgICAgIGNhc2UgV2F0Y2hsaXN0QWN0aW9ucy5DSEFOR0VfU1RPQ0tfREFUQTpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChXYXRjaGxpc3RTdGF0ZUtleXMuU3RvY2tEYXRhLCBwYXlsb2FkKTtcbiAgICAgIGNhc2UgV2F0Y2hsaXN0QWN0aW9ucy5ERUxFVEVfRkFWT1JJVEVTOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KFdhdGNobGlzdFN0YXRlS2V5cy5GYXZvcml0ZXMsIHN0YXRlLmZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHN5bWJvbDpzdHJpbmcpID0+IHBheWxvYWQuaW5kZXhPZihzeW1ib2wpID09PSAtMSlcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgV2F0Y2hsaXN0QWN0aW9ucy5BRERfRkFWT1JJVEU6XG4gICAgICAgIGlmIChzdGF0ZS5mYXZvcml0ZXMuaW5kZXhPZihwYXlsb2FkKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0KFdhdGNobGlzdFN0YXRlS2V5cy5GYXZvcml0ZXMsIFtwYXlsb2FkLCAuLi5zdGF0ZS5mYXZvcml0ZXNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgV2F0Y2hsaXN0QWN0aW9ucy5DSEFOR0VfSElHSExJR0hUUzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChXYXRjaGxpc3RTdGF0ZUtleXMuSGlnaGxpZ2h0cywgcGF5bG9hZCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuIl19
