const { hash, compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (pass, hashedPass) => {
  const isValid = await compare(pass, hashedPass);
  return isValid;
};

const generateToken = (data) => {
  const token = sign({ ...data }, process.env.JWT_PRIVATE_KEY, {
    algorithm: "HS256",
    expiresIn: "24h",
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const tokenData = verify(token, process.env.JWT_PRIVATE_KEY);
    return tokenData;
  } catch (err) {
    return false;
  }
};

module.exports = { hashPassword, generateToken, verifyPassword, verifyToken };
