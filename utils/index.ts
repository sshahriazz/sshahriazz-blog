const bcrypt = require("bcrypt");
const saltRounds = 10;

let password = "JK223@#DSIRJLKJSFLSIJ";
let hashpass = "";

export const hashPassword = async (saltRound: number, password: string) => {
  const generateSalt = bcrypt.genSalt(saltRound, (err: any, salt: any) => {
    return salt;
  });
  console.log(generateSalt);

  return generateSalt;
};
