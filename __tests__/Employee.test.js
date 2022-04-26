const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Has default properties", () => {
        it("should have '' as a name property", () => {
            const expected = "";

            const testEmp = new Employee();

            expect(testEmp.name).toEqual(expected);
        });

        it("should have a default id of 0", () => {
            const expected = 0;

            const testEmp = new Employee();

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of ''", () => {
            const expected = "";

            const testEmp = new Employee();

            expect(testEmp.email).toEqual(expected);
        });

        it("should be able to change it's values", () => {
            const expected = {
                name: "Test Name",
                id: 2,
                email: "test@fakeEmail.com"
            };

            const testEmp = new Employee();
            testEmp.name = "Test Name";
            testEmp.id = 2;
            testEmp.email = "test@fakeEmail.com";

            expect(testEmp).toEqual(expected);
        });

        it("should return 'Employee' with the getRole method", () => {
            const expected = "Employee";

            const testEmp = new Employee();

            expect(testEmp.getRole()).toEqual(expected);
        });
    });

    // describe("Has functioning methods", () => {
    //     // it("should change name after using getName()", async () => {
    //     //     const expected = "Test Name";

    //     //     const testEmp = new classes.Employee();
    //     //     await testEmp.getName();

    //     //     expect(testEmp.name).toEqual(expected);
    //     // })

    //     it("should ")

    //     it("should return 'Employee'", () => {
    //         const expected = "Employee";

    //         const testEmp = new classes.Employee();
    //         const role = testEmp.getRole();

    //         expect(role).toEqual(expected);
    //     })
    // })
});