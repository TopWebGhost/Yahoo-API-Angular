"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var header_state_1 = require("./header.state");
var index_1 = require("./index");
var initialState = new header_state_1.HeaderInitialState();
exports.headerReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var payload = _a.payload, type = _a.type;
    switch (type) {
        case index_1.HeaderActions.ACTIVATE_SEARCH:
            return state.set(index_1.HeaderStateKeys.SearchActive, payload);
        case index_1.HeaderActions.CHANGE_SEARCH:
            return state.set(index_1.HeaderStateKeys.Search, payload);
        case index_1.HeaderActions.CHANGE_SIDEBAR:
            return state.set(index_1.HeaderStateKeys.Sidebar, payload);
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL3N0YXRlL2hlYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0NBQW9EO0FBQ3BELGlDQUlpQjtBQUVqQixJQUFNLFlBQVksR0FBd0IsSUFBSSxpQ0FBa0IsRUFBMEIsQ0FBQztBQUU5RSxRQUFBLGFBQWEsR0FDeEIsVUFBQyxLQUF5QyxFQUFFLEVBQXVCO0lBQWxFLHNCQUFBLEVBQUEsb0JBQXlDO1FBQUcsb0JBQU8sRUFBRSxjQUFJO0lBQ3hELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDYixLQUFLLHFCQUFhLENBQUMsZUFBZTtZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxLQUFLLHFCQUFhLENBQUMsYUFBYTtZQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRCxLQUFLLHFCQUFhLENBQUMsY0FBYztZQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvc2hhcmVkL2hlYWRlci9zdGF0ZS9oZWFkZXIucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFjdGlvblJlZHVjZXIsXG4gIEFjdGlvblxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBIZWFkZXJJbml0aWFsU3RhdGUgfSBmcm9tICcuL2hlYWRlci5zdGF0ZSc7XG5pbXBvcnQge1xuICBIZWFkZXJBY3Rpb25zLFxuICBIZWFkZXJTdGF0ZUtleXMsXG4gIEhlYWRlclN0YXRlSW50ZXJmYWNlXG59IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6SGVhZGVyU3RhdGVJbnRlcmZhY2UgPSBuZXcgSGVhZGVySW5pdGlhbFN0YXRlKCkgYXMgSGVhZGVyU3RhdGVJbnRlcmZhY2U7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJSZWR1Y2VyOkFjdGlvblJlZHVjZXI8SGVhZGVyU3RhdGVJbnRlcmZhY2U+ID1cbiAgKHN0YXRlOkhlYWRlclN0YXRlSW50ZXJmYWNlID0gaW5pdGlhbFN0YXRlLCB7cGF5bG9hZCwgdHlwZX06IEFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBIZWFkZXJBY3Rpb25zLkFDVElWQVRFX1NFQVJDSDpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChIZWFkZXJTdGF0ZUtleXMuU2VhcmNoQWN0aXZlLCBwYXlsb2FkKTtcbiAgICAgIGNhc2UgSGVhZGVyQWN0aW9ucy5DSEFOR0VfU0VBUkNIOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KEhlYWRlclN0YXRlS2V5cy5TZWFyY2gsIHBheWxvYWQpO1xuICAgICAgY2FzZSBIZWFkZXJBY3Rpb25zLkNIQU5HRV9TSURFQkFSOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KEhlYWRlclN0YXRlS2V5cy5TaWRlYmFyLCBwYXlsb2FkKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG4iXX0=