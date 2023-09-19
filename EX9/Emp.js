var Employee = /** @class */ (function () {
    function Employee(name, basicPay) {
        this.name = name;
        this.basicPay = basicPay;
    }
    Employee.prototype.calculatePay = function () {
        var tax = 0.1;
        var medicalAllowance = 500;
        var grossSalary = this.basicPay + medicalAllowance;
        var netSalary = grossSalary - (grossSalary * tax);
        return netSalary;
    };
    return Employee;
}());
var employee1 = new Employee("Vishnu", 1000000);
console.log("Employee Name: ".concat(employee1.name));
console.log("Basic Salary: ".concat(employee1.basicPay));
console.log("Net Salary: ".concat(employee1.calculatePay()));
