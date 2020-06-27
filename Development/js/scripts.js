// السؤال الأول
// 1
const name="بتول ";
// 2
let age=16;
// 3 and 4
console.log("انا "+ name +" "+ "وعمري "+ age)
// 5 and 6
let fivexage = 5*age;
console.log(fivexage);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = ["القراءه" + " " + " عزف الموسيقى" + " " + " البرمجه "]

// 2
hobbies.push(16)
hobbies[3] = 16 
console.log(hobbies)
console.log(hobbies.length)
// 3
hobbies.pop()
console.log(hobbies)
// 4
let student = {
track: "مسار الويب ",
 language:"JavaScript"
}
// 5
student["TA's"] = ["نانسي ","موضي ","حسين ","رهف "]
console.log(student)
console.log(student.track)
console.log(student["track"])
// 6
console.log(student["TA's"][0])
// 7

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayHello"] =function() {console.log("مرحبا ")}
student["age"] =function() {
    age*= 5;
    console.log("age ")}

console.log(student)

// 2
student["sayHello"]()
student["age"]()
// console results => console.png
