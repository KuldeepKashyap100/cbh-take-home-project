const getHasher = require("./getHasher");
const {
  DEFAULT_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH
} = require("../constants");


const generateDeterministicPartitionKey = (event) => {
  const hasher = getHasher();
  let generatedPartitionKey = DEFAULT_PARTITION_KEY;

  if (event?.partitionKey) {
    generatedPartitionKey =
      typeof event.partitionKey === "string"
        ? event.partitionKey
        : JSON.stringify(event.partitionKey);
  }

  if (event && !event.partitionKey) {
    const serializedEvent = JSON.stringify(event);
    generatedPartitionKey = hasher(serializedEvent);
  }

  return generatedPartitionKey.length > MAX_PARTITION_KEY_LENGTH
    ? hasher(generatedPartitionKey)
    : generatedPartitionKey;
};

exports.generateDeterministicPartitionKey = generateDeterministicPartitionKey;
