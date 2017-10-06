var globalAny = global;
var LocalStorageMock = /** @class */ (function () {
    function LocalStorageMock() {
        this.store = {};
    }
    LocalStorageMock.prototype.clear = function () {
        this.store = {};
    };
    LocalStorageMock.prototype.getItem = function (key) {
        return this.store[key];
    };
    LocalStorageMock.prototype.setItem = function (key, value) {
        this.store[key] = value.toString();
    };
    LocalStorageMock.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    return LocalStorageMock;
}());
globalAny.localStorage = new LocalStorageMock;
