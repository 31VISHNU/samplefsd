var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (value) {
        this.items.push(value);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    };
    Stack.prototype.isEmpty = function () {
        if (this.items.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stack;
}());
var s = new Stack();
s.push(5);
s.push(6);
console.log(s.isEmpty());
console.log("".concat(s.items));
var s2 = new Stack();
s2.push('A');
s2.push('B');
s2.pop();
console.log("".concat(s2.items));
