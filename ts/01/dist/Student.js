"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.check = function () {
        Object.keys(Student).forEach(function (value) {
            console.log(value);
        });
        console.log("check");
    };
    return Student;
}());
exports.Student = Student;
