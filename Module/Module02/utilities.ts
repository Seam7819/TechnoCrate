{
    type Student = {
    id: number;
    name: string;
    gpa: number;
    phone: number;
}

// Create a type that only has id and gpa
type IdGPA = Pick<Student, "id" | "gpa">;

// Create another type that only has name
type StudentName = Pick<Student, "name">;

// Create object of IdGPA type
let student1: IdGPA = {id: 101, gpa: 2.6};
console.log(student1);

// Create object of StudentName type
let student2: StudentName = {name: "Peter Parker"};
console.log(student2);

type Student = {
    id: number;
    name: string;
    gpa: number;
    phone: number;
}

// Create a type that doesn't have id
type NoId = Omit<Student, "id">;

// Create another type that doesn't have gpa and phone
type IdName = Omit<Student, "gpa" | "phone">;

// Create object of NoId type
let student1: NoId = {name: "Peter Parker", gpa: 4, phone: 5786389};
console.log(student1);

// Create object of IdName type
let student2: IdName = {id: 103, name: "Gwen Stacy"};
console.log(student2);
}