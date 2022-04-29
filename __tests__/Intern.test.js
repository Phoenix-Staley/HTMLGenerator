const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Has default properties", () => {
        it("should have 'Sarah' as a name property", () => {
            const expected = "Sarah";

            const testEmp = new Intern("Sarah", 0, "", "");

            expect(testEmp.name).toEqual(expected);
        });

        it("should have a default id of 42", () => {
            const expected = 42;

            const testEmp = new Intern("", 42, "", "");

            expect(testEmp.id).toEqual(expected);
        });

        it("should have a default email of 'fake@example.com'", () => {
            const expected = "fake@example.com";

            const testEmp = new Intern("", 0, "fake@example.com", "");

            expect(testEmp.email).toEqual(expected);
        });

        it("should have a default school of 'UW'", () => {
            const expected = "UW";

            const testEmp = new Intern("", 0, "", "UW");

            expect(testEmp.school).toEqual(expected);
        });

        // it("should be able to change it's values", () => {
        //     const expected = {
        //         name: "Test Name",
        //         id: 2,
        //         email: "test@fakeEmail.com",
        //         school: "Brainville University"
        //     };

        //     const testEmp = new Intern();
        //     testEmp.name = "Test Name";
        //     testEmp.id = 2;
        //     testEmp.email = "test@fakeEmail.com";
        //     testEmp.school = "Brainville University";

        //     expect(testEmp).toEqual(expected);
        // });

        it("should return 'Engineer' with the getRole method", () => {
            const expected = "Intern";

            const testEmp = new Intern("", 0, "", "");

            expect(testEmp.getRole()).toEqual(expected);
        });
    });
});