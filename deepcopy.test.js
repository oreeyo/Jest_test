// DeepCopy Test
/*
Given-When-Then 패턴
 각 테스트 케이스에서 "Given"은 초기 상태 또는 입력을 설정하고, 
 "When"은 작업 또는 동작을 수행하며, 
 "Then"은 예상 결과를 확인함.
*/

const copyObject = require("./deepcopy");

describe('deepCopy Suite', () => {
    test("원시자료형 테스트", () => {
        // given
        const original = 95;
        // when
        const copied = copyObject(original);
        // then
        expect(copied).toBe(original);
    });

    test("null 테스트", () => {
        // given
        const original = null;
        // when
        const copied = copyObject(original);
        // then
        expect(copied).toBeNull();
    })

    test("undefined", () => {
        // given
        const original = undefined;
        // when
        const copied = copyObject(original);
        // then
        expect(copied).toBeUndefined()
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


