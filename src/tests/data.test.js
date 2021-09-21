const mockContactData = require('../mockData/contact.json');

test("mockContactData must be an array", () => {

    const expected = true
    const result = Array.isArray(mockContactData);

    expect(result).toEqual(expected)
    expect(typeof mockContactData).toEqual("object")
    expect(typeof mockContactData).not.toEqual("number")
    expect(typeof mockContactData).not.toEqual("string")
})

test("mockContactData must be have a length of ten", () => {

    const expected = 10;
    const result = mockContactData.length;

    expect(result).toEqual(expected)
    expect(mockContactData).toHaveLength(expected)
})

test("mockContactData must have the correct properties", () => {
    const firstObj = mockContactData[0];

    expect(firstObj).toHaveProperty("id")
    expect(firstObj).toHaveProperty("firstname")
    expect(firstObj).toHaveProperty("lastname")
    expect(firstObj).toHaveProperty("phoneNumber")
    expect(firstObj).toHaveProperty("email")
    expect(firstObj).toHaveProperty("avatar")
    expect(firstObj).not.toHaveProperty("abc")
})
