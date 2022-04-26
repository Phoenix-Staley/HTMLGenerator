const classes = require("../lib/employee");

describe("Employee", () => {
    describe("Has default properties", () => {
        it("should have '' as a name property", () => {
            const expected = "";

            const testEmp = new classes.Engineer();

            expect(testEmp.name).toEqual(expected);
        });

        it("should have a default id of 0", () => {
            const expected = 0;

            const testEmp = new classes.Engineer();

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of ''", () => {
            const expected = "";

            const testEmp = new classes.Engineer();

            expect(testEmp.email).toEqual(expected);
        });

        it("should have a default github username of ''", () => {
            const expected = "";

            const testEmp = new classes.Engineer();

            expect(testEmp.github).toEqual(expected);
        })

        it("should be able to change it's values", () => {
            const expected = {
                name: "Test Name",
                id: 2,
                email: "test@fakeEmail.com",
                github: "test-username"
            };

            const testEmp = new classes.Engineer();
            testEmp.name = "Test Name";
            testEmp.id = 2;
            testEmp.email = "test@fakeEmail.com";
            testEmp.github = "test-username";

            expect(testEmp).toEqual(expected);
        })

        it("should return 'Engineer' with the getRole method", () => {
            const expected = "Engineer";

            const testEmp = new classes.Engineer();

            expect(testEmp.getRole()).toEqual(expected);
        })
    });
});