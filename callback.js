console.log('welcome to the callback function');
const students= [
    {name:'Ashu',subject:'Javascript'},
    {name:'Rohan',subject:'Java'},
    {name:'ankit',subject:'Optional'}

]
function enrollStudent(student,callback) {
    setTimeout(function(){
        students.push(student);
       // console.log('student has been enrolled');
        callback();
    },1000);
}
function getStudents(){
    setTimeout(function(){
        let str='';
        students.forEach(function(student){
            str+=`<li><b> ${student.name}</b></li>`;
            str+=`- ${student.subject}`
        });
        document.getElementById('students').innerHTML=str;
       // console.log('Student have been fetched');
    },3000);
}
let newStudent={name: 'Sonia',subject: 'Python'};
let newStudent1={name: 'Rohit',subject: 'R'};
let newStudent2={name: 'Sohan',subject: 'Golang'};
enrollStudent(newStudent,getStudents);
enrollStudent(newStudent1,getStudents);
enrollStudent(newStudent2,getStudents);