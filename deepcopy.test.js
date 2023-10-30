const copyObject = require("./deepcopy");

describe('deepCopy Suite', () => {
    test("원시자료형 테스트", () => {
        const original = 95;
        const copied = copyObject(original);
        expect(copied).toBe(original);
    });

    test("null 테스트", () => {
        expect(copyObject(null)).toBeNull()
    })

    test("undefined", () => {
        expect(copyObject(undefined)).toBeUndefined()
    })

    test("Date Obj test", () => {
        const original = new Date("1995-03-21");
        const copied = copyObject(original);
        expect(copied).toEqual(original);
    })

    test("RegExp Obj test", () => {
        const original = new RegExp(/ab+c/g);
        const copied = copyObject(original);
        expect(copied).toEqual(original);
    })

    test("Set Obj test", () => {
        const original = new Set([1, 2, 3]);
        const copied = copyObject(original);
        expect(copied).toEqual(original);
    })

    test("Map Obj test", () => {
        const original = new Map([["kim", 1995], ["James", '????']]);
        const copied = copyObject(original);
        expect(copied).toEqual(original);
    })

    test("general Obj test", () => {
        const original = {
            name: 'kim',
            birthdate: new Date('1995-03-21'),
            pattern: /ab+c/g,
            numbers: new Set([1, 2, 3]),
            data: new Map([
                ['key1', 'value1'],
                ['key2', 'value2']
            ])
        }

        const copied = copyObject(original);
        expect(copied).toEqual(original);
    })
})


