import { classroom } from './classroom';

const teacher = {
name: 'John Doe',
age: 42,
subject: 'Math'
}

const student1 = {
name: 'Jane Doe',
age: 19,
subject: 'Math'
}

const student2 = {
name: 'Bob Smith',
age: 25,
subject: 'Science'
}

const classroom1 = new classroom(teacher);
classroom1.addStudent(student1);
classroom1.addStudent(student2);