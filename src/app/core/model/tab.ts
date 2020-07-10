import { Task } from "./task/task";

export interface Tab {
  taskName: string;
  editsOn?: boolean;
  initialTask?: Task;
}
