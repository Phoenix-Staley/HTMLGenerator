const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Has default properties", () => {
        it("should have 'Sarah' as a name property", () => {
            const expected = "Sarah";

            const testEmp = new Engineer("Sarah", 0, "", "");

            expect(testEmp.name).toEqual(expected);
        });

        it("should have a default id of 24", () => {
            const expected = 24;

            const testEmp = new Engineer("", 24, "", "");

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of 'fake@example.com'", () => {
            const expected = "fake@example.com";

            const testEmp = new Engineer("", 0, "fake@example.com", "");

            expect(testEmp.email).toEqual(expected);
        });

        it("should have a default github username of 'Sarah-Jones'", () => {
            const expected = "Sarah-Jones";

            const testEmp = new Engineer("", 0, "", "Sarah-Jones");

            expect(testEmp.github).toEqual(expected);
        })

        // it("should be able to change it's values", () => {
        //     const expected = {
        //         name: "Test Name",
        //         id: 2,
        //         email: "test@fakeEmail.com",
        //         github: "test-username"
        //     };

        //     const testEmp = new Engineer();
        //     testEmp.name = "Test Name";
        //     testEmp.id = 2;
        //     testEmp.email = "test@fakeEmail.com";
        //     testEmp.github = "test-username";

        //     expect(testEmp).toEqual(expected);
        // })

        it("should return 'Engineer' with the getRole method", () => {
            const expected = "Engineer";

            const testEmp = new Engineer();

            expect(testEmp.getRole()).toEqual(expected);
        })
    });
});