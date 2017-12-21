"use strict";
var utils = require("utils/utils");
var LocateAddress = (function () {
    function LocateAddress() {
    }
    LocateAddress.prototype.available = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    LocateAddress.prototype.locate = function (options) {
        return new Promise(function (resolve, reject) {
            var addr = "";
            if (options.address) {
                addr = options.address;
            }
            else if (options.lat && options.lng) {
                addr = options.lat + "," + options.lng;
            }
            //utils.openUrl("http://maps.apple.com/maps?q=" + encodeURIComponent(addr)
            utils.openUrl("maps:q=" + (options.address ? encodeURIComponent(addr) : addr));
            resolve();
        });
    };
    return LocateAddress;
}());
exports.LocateAddress = LocateAddress;
//# sourceMappingURL=locate-address.js.map