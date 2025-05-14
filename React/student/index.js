const mongoose = require('./db');
const employeeSchema = new mongoose.Schema({
    Emp_name: String,
    Ssn: Number,
    Address:String,
    Salary: Number,
    Gender:String,
    DOB:String,
    dept_id:Number,
    Super_ssn:Number
});
const Employee = mongoose.model('Employee', employeeSchema);
const newEmployee = new Employee({
    Emp_name:'Madan',
    Ssn: '016',
    Address:'Dharwad',
    Salary:25000,
    Gender:'Male',
    DOB:'02-06-1999',
    dept_id:'01',
    Super_ssn:'001'

});

newEmployee.save()
    .then(() => console.log('Employee added'))
    .catch((err) => console.error('Error adding employee:', err));
