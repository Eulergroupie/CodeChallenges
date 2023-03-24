/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);

  console.log(validatePIN("1") === false ? "Pass" : "Wrong output for '1'");
  console.log(validatePIN("12") === false ? "Pass" : "Wrong output for '12'");
  console.log(validatePIN("123") === false ? "Pass" : "Wrong output for '123'");
  console.log(validatePIN("12345") === false ? "Pass" : "Wrong output for '12345'");
  console.log(validatePIN("1234567") === false ? "Pass" : "Wrong output for '1234567'");
  console.log(validatePIN("-1234") === false ? "Pass" : "Wrong output for '-1234'");
  console.log(validatePIN("1.234") === false ? "Pass" : "Wrong output for '1.234'");
  console.log(validatePIN("-1.234") === false ? "Pass" : "Wrong output for '-1.234'");
  console.log(validatePIN("00000000") === false ? "Pass" : "Wrong output for '00000000'");


  console.log(validatePIN("a234") === false ? "Pass" : "Wrong output for 'a234'");
  console.log(validatePIN(".234") === false ? "Pass" : "Wrong output for '.234'");


  console.log(validatePIN("1234") === true ? "Pass" : "Wrong output for '1234'");
  console.log(validatePIN("0000") === true ? "Pass" : "Wrong output for '0000'");
  console.log(validatePIN("1111") === true ? "Pass" : "Wrong output for '1111'");
  console.log(validatePIN("123456") === true ? "Pass" : "Wrong output for '123456'");
  console.log(validatePIN("098765") === true ? "Pass" : "Wrong output for '098765'");
  console.log(validatePIN("000000") === true ? "Pass" : "Wrong output for '000000'");
  console.log(validatePIN("123456") === true ? "Pass" : "Wrong output for '123456'");
  console.log(validatePIN("090909") === true ? "Pass" : "Wrong output for '090909'");