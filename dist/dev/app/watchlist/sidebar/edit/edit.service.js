"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditService = (function () {
    function EditService() {
    }
    EditService.prototype.getOrder = function (list, deleted) {
        var order = [];
        if (list) {
            var children = list.nativeElement.getElementsByTagName('li');
            for (var i = 0; i < children.length; i++) {
                if (deleted.indexOf(children[i].id) === -1) {
                    order.push(children[i].id);
                }
            }
            children = null;
        }
        return order;
    };
    EditService.prototype.getDragOptions = function () {
        return {
            moves: function (el, container, handle) {
                return handle.className.indexOf('mp-drag') !== -1;
            }
        };
    };
    return EditService;
}());
exports.EditService = EditService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9lZGl0L2VkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7SUFzQkEsQ0FBQztJQXJCQyw4QkFBUSxHQUFSLFVBQVMsSUFBZSxFQUFFLE9BQWdCO1FBQ3hDLElBQUksS0FBSyxHQUFZLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxRQUFRLEdBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7WUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxLQUFLLEVBQUUsVUFBVSxFQUFVLEVBQUUsU0FBaUIsRUFBRSxNQUFjO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLGtDQUFXIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9lZGl0L2VkaXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEVkaXRTZXJ2aWNlIHtcbiAgZ2V0T3JkZXIobGlzdDpFbGVtZW50UmVmLCBkZWxldGVkOnN0cmluZ1tdKTpzdHJpbmdbXSB7XG4gICAgbGV0IG9yZGVyOnN0cmluZ1tdID0gW107XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGxldCBjaGlsZHJlbjphbnkgPSBsaXN0Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGVsZXRlZC5pbmRleE9mKGNoaWxkcmVuW2ldLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgICBvcmRlci5wdXNoKGNoaWxkcmVuW2ldLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICBnZXREcmFnT3B0aW9ucygpOmFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdmVzOiBmdW5jdGlvbiAoZWw6RWxlbWVudCwgY29udGFpbmVyOkVsZW1lbnQsIGhhbmRsZTpFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lLmluZGV4T2YoJ21wLWRyYWcnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
