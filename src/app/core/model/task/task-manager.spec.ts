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

    expect(taskManager.size()).toBe(0);

    taskManager.add(moveTask);
    expect(taskManager.size()).toBe(1);

    taskManager.add(deleteTask);
    expect(taskManager.size()).toBe(2);

    taskManager.add(undefined);
    expect(taskManager.size()).toBe(2);

    taskManager.add(deleteTask);
    taskManager.add(deleteTask);
    taskManager.add(deleteTask);
    taskManager.add(moveTask);
    taskManager.add(deleteTask);
    taskManager.add(moveTask);
    taskManager.add(moveTask);

    expect(taskManager.size()).toBe(2);
  });

  it('#remove should task correctly', () => {
    const moveTask: Task = new MoveTask();
    const deleteTask: Task = new DeleteTask();

    taskManager.add(moveTask);
    taskManager.add(deleteTask);


    // invalid remove
    expect(taskManager.remove(undefined)).toBe(false);

    // valid remove
    expect(taskManager.remove(moveTask)).toBe(true);
    expect(taskManager.size()).toBe(1);

    // invalid remove
    expect(taskManager.remove(moveTask)).toBe(false);
    expect(taskManager.size()).toBe(1);

    // valid remove
    expect(taskManager.remove(deleteTask)).toBe(true);
    expect(taskManager.size()).toBe(0);

    // invalid remove
    expect(taskManager.remove(deleteTask)).toBe(false);
    expect(taskManager.size()).toBe(0);
  });

});
