const { generateDeterministicPartitionKey } = require("../../utils/generateDeterministicPartitionKey");
const {
  DEFAULT_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH
} = require("../../constants");

describe("generateDeterministicPartitionKey", () => {
  it("should return DEFAULT_PARTITION_KEY as partitionKey when event is undefined.", () => {
    const partitionKey = generateDeterministicPartitionKey();
    expect(partitionKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it("should return DEFAULT_PARTITION_KEY as partitionKey when event is null.", () => {
    const partitionKey = generateDeterministicPartitionKey(null);
    expect(partitionKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it("should return DEFAULT_PARTITION_KEY as partitionKey when event is false.", () => {
    const partitionKey = generateDeterministicPartitionKey(false);
    expect(partitionKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it("should return hashed key when event is defined but partitionKey key is absent in it.", () => {
    const partitionKey = generateDeterministicPartitionKey({});
    expect(partitionKey).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  it("should return stringified partitionKey when event is defined and partitionKey is valid but of type number.", () => {
    const partitionKey = generateDeterministicPartitionKey({ partitionKey: 123 });
    expect(partitionKey).toBe("123");
  });

  it("should return partitionKey when event is defined and partitionKey is valid and of type string.", () => {
    const partitionKey = generateDeterministicPartitionKey({ partitionKey: "123" });
    expect(partitionKey).toEqual("123");
  });

  it("should return doubly hashed partition key of length smaller than MAX_PARTITION_KEY_LENGTH when hashed key length exceeds MAX_PARTITION_KEY_LENGTH.", () => {
    const partitionKey = generateDeterministicPartitionKey({
      key: "0123456789".repeat(50000)
    });
    expect(partitionKey.length <= MAX_PARTITION_KEY_LENGTH).toBeTruthy();
    expect(partitionKey).toBe(
      "d6319c7d1985dd6f413a07799faba6d71c4b9e1b372a0766fb9f71b1e388cb5d804eef8f8a89a7e400438c50d8f4eb8c30bcfcc3a0894c6a8b2efb9f2c3f4fac"
    );
  });

  it("should return stringified partition key when event is defined and partitionKey value is of object type.", () => {
    const partitionKey = generateDeterministicPartitionKey({
      partitionKey: { key: "0123456789" }
    });
    expect(partitionKey).toBe('{"key":"0123456789"}');
  });

  it("should return hashed partitionKey when event value is of type string.", () => {
    const partitionKey = generateDeterministicPartitionKey("123456789");
    expect(partitionKey).toBe(
      "64b84b5dfdc445fe5b27b4472e10838f5b89447250267f516cfad5caaafac620a474493f7ae43059ce93e131ed1e36f911930a198359a6bea56c909b9d9d3861"
    );
  });
});
