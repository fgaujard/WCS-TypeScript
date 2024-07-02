import * as assert from "assert";

class BankCustomer {
  private name: string;
  private pin: string;

  constructor(name: string, pin: string) {
    this.name = name;
    this.pin = pin;
  }

  getName() {
    return this.name;
  }

  verifyPinInput(pin: string) {
    return this.pin === pin ? true : false;
  }
}

// Tests

const customer = new BankCustomer("John Doe", "3579");

// TEST 1 : getName is a function

try {
  assert.equal(typeof customer.getName, "function");
  console.info(
    "\x1b[32m",
    "Test 1 passed: customer.getName is a function",
    "\x1b[0m",
    "\n"
  );
} catch (error) {
  console.error("\x1b[31m", "Test 1 failed:", error, "\x1b[0m", "\n");
}

// TEST 2 : verigyPinInput is a function

try {
  assert.equal(typeof customer.verifyPinInput, "function");
  console.info(
    "\x1b[32m",
    "Test 2 passed: customer.verifyPinInput is a function",
    "\x1b[0m",
    "\n"
  );
} catch (error) {
  console.error("\x1b[31m", "Test 2 failed:", error, "\x1b[0m", "\n");
}

// TEST 3 : getName return the name

try {
  assert.equal(customer.getName(), "John Doe");
  console.info(
    "\x1b[32m",
    "Test 3 passed: customer.getName() returns 'John Doe'",
    "\x1b[0m",
    "\n"
  );
} catch (error) {
  console.error("\x1b[31m", "Test 3 failed:", error, "\x1b[0m", "\n");
}

// TEST 4 : verifyPinInput return true

try {
  assert.ok(customer.verifyPinInput("3579"));
  console.info(
    "\x1b[32m",
    "Test 4 passed: customer.verifyPinInput('3579') returns true",
    "\x1b[0m"
  );
} catch (error) {
  console.error("\x1b[31m", "Test 4 failed:", error, "\x1b[0m");
}
