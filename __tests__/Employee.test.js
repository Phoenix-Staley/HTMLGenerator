const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Has default properties", () => {
        it("should have 'Sarah' as a name property", () => {
            const expected = "Sarah";

            const testEmp = new Employee("Sarah", 0, "");

            expect(testEmp.name).toEqual(expected);
        });

        it("should have an id of 52", () => {
            const expected = 52;

            const testEmp = new Employee("", 52, "");

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of 'fake@example.com'", () => {
            const expected = "fake@example.com";

            const testEmp = new Employee("", 0, "fake@example.com");

            expect(testEmp.email).toEqual(expected);
        });

        // it("should be able to change it's values", () => {
        //     const expected = {
        //         name: "Test Name",
        //         id: 2,
        //         email: "test@fakeEmail.com"
        //     };

        //     const testEmp = new Employee("Test Name", 2, "test@fakeEmail.com");
        //     testEmp.name = "Test Name";
        //     testEmp.id = 2;
        //     testEmp.email = "test@fakeEmail.com";

        //     expect(testEmp).toEqual(expected);
        // });

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