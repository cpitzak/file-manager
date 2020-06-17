import { TaskManager } from "./task-manager";
import { Task } from "./task";
import { DeleteTask } from "./delete-task";
import { MoveTask } from "./move-task";

describe('Task Manager', () => {
  let taskManager: TaskManager;
  beforeEach(() => { taskManager = new TaskManager(); });

  it('#add should add only unique tasks', () => {
    const moveTask: Task = new MoveTask();
    const deleteTask: Task = new DeleteTask();

    expect(taskManager.tasks.length).toBe(0);

    taskManager.add(moveTask);
    expect(taskManager.tasks.length).toBe(1);

    taskManager.add(deleteTask);
    expect(taskManager.tasks.length).toBe(2);

    expect(taskManager.add(undefined)).toBe(false);
    expect(taskManager.add(null)).toBe(false);
    expect(taskManager.tasks.length).toBe(2);

    expect(taskManager.add(deleteTask)).toBe(false);
    expect(taskManager.add(deleteTask)).toBe(false);
    expect(taskManager.add(moveTask)).toBe(false);
    expect(taskManager.add(deleteTask)).toBe(false);
    expect(taskManager.add(moveTask)).toBe(false);
    expect(taskManager.add(moveTask)).toBe(false);

    expect(taskManager.tasks.length).toBe(2);
  });

  it('#remove should task correctly', () => {
    const moveTask: Task = new MoveTask();
    const deleteTask: Task = new DeleteTask();

    taskManager.add(moveTask);
    taskManager.add(deleteTask);


    // invalid remove
    expect(taskManager.remove(undefined)).toBe(undefined);
    expect(taskManager.remove(null)).toBe(undefined);

    // valid remove
    expect(taskManager.remove(moveTask)).toBe(moveTask);
    expect(taskManager.tasks.length).toBe(1);

    // invalid remove
    expect(taskManager.remove(moveTask)).toBe(undefined);
    expect(taskManager.tasks.length).toBe(1);

    // valid remove
    expect(taskManager.remove(deleteTask)).toBe(deleteTask);
    expect(taskManager.tasks.length).toBe(0);

    // invalid remove
    expect(taskManager.remove(deleteTask)).toBe(undefined);
    expect(taskManager.tasks.length).toBe(0);
  });

  it('#findIndex should return -1 with undefined', () => {
    expect(taskManager.findIndex(undefined)).toBe(-1);
  });

  it('#findIndex should return -1 with null', () => {
    expect(taskManager.findIndex(null)).toBe(-1);
  });

  it('#findIndex should return correct index', () => {
    const moveTask: Task = new MoveTask();
    const deleteTask: Task = new DeleteTask();
    taskManager.add(moveTask);
    taskManager.add(deleteTask);
    expect(taskManager.findIndex(deleteTask)).toBe(1);
    expect(taskManager.findIndex(moveTask)).toBe(0);
  });

});
