const contactData = require('../mockData/contact.json');

test("contactData must be an array", () => {

    const expected = true
    const result = Array.isArray(contactData);

    expect(result).toEqual(expected)
    expect(typeof contactData).toEqual("object")
    expect(typeof contactData).not.toEqual("number")
    expect(typeof contactData).not.toEqual("string")
})

test("contactData must be have a length of ten", () => {

    const expected = 10;
    const result = contactData.length;

    expect(result).toEqual(expected)
    expect(contactData).toHaveLength(expected)
})

test("contactData must have the correct properties", () => {
    const firstObj = contactData[0];

    expect(firstObj).toHaveProperty("id")
    expect(firstObj).toHaveProperty("firstname")
    expect(firstObj).toHaveProperty("lastname")
    expect(firstObj).toHaveProperty("phoneNumber")
    expect(firstObj).toHaveProperty("email")
    expect(firstObj).toHaveProperty("avatar")
    expect(firstObj).not.toHaveProperty("abc")
})
