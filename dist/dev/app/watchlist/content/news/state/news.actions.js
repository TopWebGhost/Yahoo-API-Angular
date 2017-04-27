"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewsActions = (function () {
    function NewsActions() {
    }
    NewsActions.prototype.fetchFulfilled = function (data) {
        return {
            type: NewsActions.FETCH_FULFILLED,
            payload: data
        };
    };
    NewsActions.prototype.fetchLoader = function (loader) {
        return {
            type: NewsActions.FETCH_LOADER,
            payload: loader
        };
    };
    NewsActions.prototype.fetchError = function (error) {
        return {
            type: NewsActions.FETCH_ERROR,
            payload: error
        };
    };
    return NewsActions;
}());
NewsActions.FETCH_FULFILLED = 'WATCHLIST:NEWS:FETCH_FULFILLED';
NewsActions.FETCH_LOADER = 'WATCHLIST:NEWS:FETCH_LOADER';
NewsActions.FETCH_ERROR = 'WATCHLIST:NEWS:FETCH_ERROR';
exports.NewsActions = NewsActions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL3N0YXRlL25ld3MuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0lBQUE7SUF5QkEsQ0FBQztJQXBCQyxvQ0FBYyxHQUFkLFVBQWUsSUFBd0I7UUFDckMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQyxlQUFlO1lBQ2pDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN4QixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsV0FBVyxDQUFDLFlBQVk7WUFDOUIsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBb0I7UUFDN0IsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQyxXQUFXO1lBQzdCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBekJBLEFBeUJDO0FBeEJRLDJCQUFlLEdBQUcsZ0NBQWdDLENBQUM7QUFDbkQsd0JBQVksR0FBRyw2QkFBNkIsQ0FBQztBQUM3Qyx1QkFBVyxHQUFHLDRCQUE0QixDQUFDO0FBSHZDLGtDQUFXIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL3N0YXRlL25ld3MuYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVycm9ySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdGF0ZS9hcGkuc3RhdGUnO1xuaW1wb3J0IHsgTmV3c0RhdGFJbnRlcmZhY2UgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIE5ld3NBY3Rpb25zIHtcbiAgc3RhdGljIEZFVENIX0ZVTEZJTExFRCA9ICdXQVRDSExJU1Q6TkVXUzpGRVRDSF9GVUxGSUxMRUQnO1xuICBzdGF0aWMgRkVUQ0hfTE9BREVSID0gJ1dBVENITElTVDpORVdTOkZFVENIX0xPQURFUic7XG4gIHN0YXRpYyBGRVRDSF9FUlJPUiA9ICdXQVRDSExJU1Q6TkVXUzpGRVRDSF9FUlJPUic7XG5cbiAgZmV0Y2hGdWxmaWxsZWQoZGF0YTpOZXdzRGF0YUludGVyZmFjZVtdKTpBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBOZXdzQWN0aW9ucy5GRVRDSF9GVUxGSUxMRUQsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIGZldGNoTG9hZGVyKGxvYWRlcjpib29sZWFuKTpBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBOZXdzQWN0aW9ucy5GRVRDSF9MT0FERVIsXG4gICAgICBwYXlsb2FkOiBsb2FkZXJcbiAgICB9O1xuICB9XG5cbiAgZmV0Y2hFcnJvcihlcnJvcjpFcnJvckludGVyZmFjZSk6QWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogTmV3c0FjdGlvbnMuRkVUQ0hfRVJST1IsXG4gICAgICBwYXlsb2FkOiBlcnJvclxuICAgIH07XG4gIH1cbn1cbiJdfQ==