interface Task {
  title: string;
  done: boolean;
  category: Category;
}

type Category = "work" | "life" | "education" | "sport";
