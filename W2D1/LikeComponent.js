"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(LikeCount, active) {
        this.LikeCount = LikeCount;
        this.active = active;
    }
    LikeComponent.prototype.onClick = function () {
        if (this.active)
            return --this.LikeCount;
        else
            return ++this.LikeCount;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
