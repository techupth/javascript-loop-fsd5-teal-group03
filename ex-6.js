// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// เปลี่ยนค่าตั้งต้นให้ลบลำดับindexเพิ่มเริ่มจากหลังสุด กำหนดเงื่อนไขให้หยุดลูปเมื่อถึงindex0 โดยchangeจะลบลงเรื่อยๆเป้นการย้อนกลับ
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);
