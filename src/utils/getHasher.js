const crypto = require("crypto");

const getHasher = (algorithm = "sha3-512") => {
  const hasher = crypto.createHash(algorithm);
  return (data, digest = "hex") => hasher.update(data).digest(digest);
};

module.exports = getHasher;