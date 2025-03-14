export interface ClassroomTask {
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

const classroomTasks: ClassroomTask[] = [
  {
    title: "Write a report on the history of HTML",
    description: "Write a comprehensive report on the history of HTML, including its evolution and key milestones.",
    dueDate: new Date(2023, 1, 15),
    completed: false
  },
  {
    title: "Complete the online quiz",
    description: "Attempt the online quiz on HTML to demonstrate your knowledge.",
    dueDate: new Date(2023, 1, 16),
    completed: false
  },
  {
    title: "Read the chapter on CSS",
    description: "Read and understand the chapter on CSS from the classroom textbook.",
    dueDate: new Date(2023, 1, 17),
    completed: false
  }
];
