//// [classIsSubtypeOfBaseType.ts]
class Base<T> {
    foo: T;
}

class Derived extends Base<{ bar: string; }> {
    foo: {
        bar: string; baz: number; // ok
    }
}

class Derived2 extends Base<{ bar: string; }> {
    foo: {
        bar?: string; // error
    }
}

//// [classIsSubtypeOfBaseType.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
    }
    return Derived2;
})(Base);
