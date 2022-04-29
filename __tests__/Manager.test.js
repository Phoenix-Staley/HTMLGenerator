const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Has default properties", () => {
        it("should have 'Sarah' as a name property", () => {
            const expected = "Sarah";

            const testEmp = new Manager("Sarah", 0, "", 0);

            expect(testEmp.name).toEqual(expected);
        });

        it("should have an id of 176", () => {
            const expected = 176;

            const testEmp = new Manager("", 176, "", 0);

            expect(testEmp.id).toEqual(expected);
        });

        it("should have an email of 'fake@example.com'", () => {
            const expected = "fake@example.com";

            const testEmp = new Manager("", 0, "fake@example.com", 0);

            expect(testEmp.email).toEqual(expected);
        });

        it("should have an office number of 15", () => {
            const expected = 15;

            const testEmp = new Manager("", 0, "", 15);

            expect(testEmp.officeNum).toEqual(expected);
        });

        // it("should be able to change it's values", () => {
        //     const expected = {
        //         name: "Test Name",
        //         id: 2,
        //         email: "test@fakeEmail.com",
        //         officeNum: 265
        //     };

        //     const testEmp = new Manager();
        //     testEmp.name = "Test Name";
        //     testEmp.id = 2;
        //     testEmp.email = "test@fakeEmail.com";
        //     testEmp.officeNum = 265;

        //     expect(testEmp).toEqual(expected);
        // });

        it("should return 'Engineer' with the getRole method", () => {
            const expected = "Manager";

            const testEmp = new Manager();

            expect(testEmp.getRole()).toEqual(expected);
        });
    });
});