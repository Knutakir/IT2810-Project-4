const Util = require('../util');

test('sort name, ascending', () => {
    const result = Util.createSortingObject('name', 1);
    const expectedResult = {mountain: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort country, ascending', () => {
    const result = Util.createSortingObject('country', 1);
    const expectedResult = {mainCountry: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort rating, ascending', () => {
    const result = Util.createSortingObject('rating', 1);
    const expectedResult = {rating: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort height, ascending', () => {
    const result = Util.createSortingObject('height', 1);
    const expectedResult = {metres: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort height, descending', () => {
    const result = Util.createSortingObject('height', -1);
    const expectedResult = {metres: -1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort type not defined, defaults to height, ascending', () => {
    const result = Util.createSortingObject(undefined, 1);
    const expectedResult = {metres: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort type is empty string, defaults to height, ascending', () => {
    const result = Util.createSortingObject('', 1);
    const expectedResult = {metres: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort type is invalid string, defaults to height, ascending', () => {
    const result = Util.createSortingObject('this_is_invalid', 1);
    const expectedResult = {metres: 1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort height, order not defined, defaults to descending', () => {
    const result = Util.createSortingObject('height', undefined);
    const expectedResult = {metres: -1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort height, order is empty string, defaults to descending', () => {
    const result = Util.createSortingObject('height', '');
    const expectedResult = {metres: -1};

    expect(result).toStrictEqual(expectedResult);
});

test('sort height, order is invalid string, defaults to descending', () => {
    const result = Util.createSortingObject('height', 'this_is_invalid');
    const expectedResult = {metres: -1};

    expect(result).toStrictEqual(expectedResult);
});