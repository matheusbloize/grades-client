export interface StudentInfoHomePage {
  name: string;
  photo: string;
  color: string;
}

export interface StudentInfoStudentPage {
  name: string;
  age: number;
  subject: string;
  points: [number, number, number, number, number, number];
}

export interface StudentGradeInterface {
  name: string;
  gradePoints: [number, number, number, number, number, number];
  averageGrade: number;
  addedByTeacher: boolean;
}
