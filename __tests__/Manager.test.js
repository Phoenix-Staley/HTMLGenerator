const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Has default properties", () => {
        it("should have '' as a name property", () => {
            const expected = "";

            const testEmp = new Manager();

            expect(testEmp.name).toEqual(expected);
        });

        it("should have a default id of 0", () => {
            const expected = 0;

            const testEmp = new Manager();

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of ''", () => {
            const expected = "";

            const testEmp = new Manager();

            expect(testEmp.email).toEqual(expected);
        });

        it("should have a default school of ''", () => {
            const expected = 0;

            const testEmp = new Manager();

            expect(testEmp.officeNum).toEqual(expected);
        });

        it("should be able to change it's values", () => {
            const expected = {
                name: "Test Name",
                id: 2,
                email: "test@fakeEmail.com",
                officeNum: 265
            };

            const testEmp = new Manager();
            testEmp.name = "Test Name";
            testEmp.id = 2;
            testEmp.email = "test@fakeEmail.com";
            testEmp.officeNum = 265;

            expect(testEmp).toEqual(expected);
        });

        it("should return 'Engineer' with the getRole method", () => {
            const expected = "Manager";

            const testEmp = new Manager();

            expect(testEmp.getRole()).toEqual(expected);
        });
    });
});