const crypto = require("crypto");

const getHasher = require("../../utils/getHasher");

describe("getHasher", () => {
  it("should return a sha3-512 hasher function when the algorithm parameter is not passed.", () => {
    const hasher = getHasher();
    const key = "test";
    const hashedValue = hasher(key);
    expect(hasher).toBeInstanceOf(Function);
    expect(hashedValue).toBe(crypto.createHash("sha3-512").update(key).digest("hex"));
  });

  it("should return sha256 hasher function when passed input param to getHasher is 'sha256' and disgest to hasher is 'base64'.", () => {
    const hasher = getHasher('sha256');
    const key = "test";
    const hashedValue = hasher(key, 'base64');
    expect(hasher).toBeInstanceOf(Function);
    expect(hashedValue).toBe(crypto.createHash("sha256").update(key).digest("base64"));
  });
});

