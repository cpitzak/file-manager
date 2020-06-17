import { TaskManager } from "./task-manager";
import { Task } from "./task";
import { DeleteTask } from "./delete-task";
import { MoveTask } from "./move-task";

describe('Task Manager', () => {
  let taskManager: TaskManager;
  beforeEach(() => { taskManager = new TaskManager(); });

  it('#add should add only unique tasks', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

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

    // duplicate should not be added
    const moveTask2: Task = new MoveTask('A');
    taskManager.add(moveTask2);
    taskManager.add(moveTask2);
    taskManager.add(moveTask2);
    expect(taskManager.size()).toBe(2);
  });

  it('#add should not add duplicate by name, same reference', () => {
    const name: string = 'A';
    const moveTask1: Task = new MoveTask(name);
    // duplicate should not be added
    taskManager.add(moveTask1);
    taskManager.add(moveTask1);
    expect(taskManager.size()).toBe(1);
  });

  it('#add should not add duplicate by name, different reference', () => {
    const name: string = 'A';
    const moveTask1: Task = new MoveTask(name);
    // duplicate should not be added
    const moveTask2: Task = new MoveTask(name);
    taskManager.add(moveTask1);
    taskManager.add(moveTask2);
    taskManager.add(moveTask1);
    taskManager.add(moveTask2);
    expect(taskManager.size()).toBe(1);
  });

  it('#add should add same name different instances', () => {
    const name: string = 'A';
    const moveTask: Task = new MoveTask(name);
    const deleteTask: Task = new DeleteTask(name);
    taskManager.add(moveTask);
    taskManager.add(deleteTask);
    expect(taskManager.size()).toBe(2);
  });

  it('#add should add same name different instances but not duplicate add', () => {
    const name: string = 'A';
    const moveTask: Task = new MoveTask(name);
    const deleteTask: Task = new DeleteTask(name);
    taskManager.add(moveTask);
    taskManager.add(moveTask);
    taskManager.add(moveTask);
    taskManager.add(deleteTask);
    taskManager.add(deleteTask);
    taskManager.add(deleteTask);
    expect(taskManager.size()).toBe(2);
  });

  it('#remove should not be true for removing undefined', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    taskManager.add(deleteTask);

    // invalid remove
    expect(taskManager.remove(undefined)).toBe(false);
    expect(taskManager.size()).toBe(2);
  });

  it('#remove should not be true for removing null', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    taskManager.add(deleteTask);

    // invalid remove
    expect(taskManager.remove(null)).toBe(false);
    expect(taskManager.size()).toBe(2);
  });

  it('#remove should remove task', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    taskManager.add(deleteTask);

    expect(taskManager.remove(moveTask)).toBe(true);
    expect(taskManager.size()).toBe(1);

    expect(taskManager.contains(moveTask)).toBe(false);
    expect(taskManager.contains(deleteTask)).toBe(true);

    expect(taskManager.remove(deleteTask)).toBe(true);
    expect(taskManager.size()).toBe(0);

  });

  it('#remove should not remove duplicate task', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    taskManager.add(deleteTask);

    expect(taskManager.remove(moveTask)).toBe(true);
    expect(taskManager.size()).toBe(1);
    expect(taskManager.remove(moveTask)).toBe(false);
    expect(taskManager.size()).toBe(1);

    expect(taskManager.remove(deleteTask)).toBe(true);
    expect(taskManager.size()).toBe(0);
    expect(taskManager.remove(deleteTask)).toBe(false);
    expect(taskManager.size()).toBe(0);
  });

  it('#findIndex should not find an index with undefined', () => {
    expect(taskManager.findIndex(undefined)).toBe(-1);
  });

  it('#findIndex should not find an index with null', () => {
    expect(taskManager.findIndex(null)).toBe(-1);
  });

  it('#findIndex should not find index of different instance with same name', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    expect(taskManager.findIndex(deleteTask)).toBe(-1);
  });

  it('#findIndex should find index of task in set with duplicate names different instances', () => {
    const moveTask: Task = new MoveTask('A');
    const deleteTask: Task = new DeleteTask('A');

    taskManager.add(moveTask);
    taskManager.add(deleteTask);
    expect(taskManager.findIndex(deleteTask)).toBe(1);
  });

});
