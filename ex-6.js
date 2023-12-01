// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let textLength = companyName.length;

for (let i = 0; i < textLength; i++) {
  reversedCompanyName += companyName[textLength - i - 1];
}

console.log(reversedCompanyName);
