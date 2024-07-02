"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (pin) {
        return this.pin === pin ? true : false;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer("John Doe", "3579");
try {
    assert.equal(typeof customer.getName, "function");
    console.info("\x1b[32m", "Test 1 passed: customer.getName is a function", "\x1b[0m", "\n");
}
catch (error) {
    console.error("\x1b[31m", "Test 1 failed:", error, "\x1b[0m", "\n");
}
try {
    assert.equal(typeof customer.verifyPinInput, "function");
    console.info("\x1b[32m", "Test 2 passed: customer.verifyPinInput is a function", "\x1b[0m", "\n");
}
catch (error) {
    console.error("\x1b[31m", "Test 2 failed:", error, "\x1b[0m", "\n");
}
try {
    assert.equal(customer.getName(), "John Doe");
    console.info("\x1b[32m", "Test 3 passed: customer.getName() returns 'John Doe'", "\x1b[0m", "\n");
}
catch (error) {
    console.error("\x1b[31m", "Test 3 failed:", error, "\x1b[0m", "\n");
}
try {
    assert.ok(customer.verifyPinInput("3579"));
    console.info("\x1b[32m", "Test 4 passed: customer.verifyPinInput('3579') returns true", "\x1b[0m");
}
catch (error) {
    console.error("\x1b[31m", "Test 4 failed:", error, "\x1b[0m");
}
