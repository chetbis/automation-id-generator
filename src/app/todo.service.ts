import { Injectable, signal } from '@angular/core';

export type Todo = {
  id: string;
  value: string;
  isCompleted: boolean;
  isEditing: boolean;
};

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly todosWritable = signal<Todo[]>([]);
  readonly todos = this.todosWritable.asReadonly();

  /**
   * Adds a task
   */
  addTodo(task: string) {
    this.todosWritable.update((todos) => {
      return [
        ...todos,
        {
          id: crypto.randomUUID(),
          isCompleted: false,
          value: task,
          isEditing: false,
        },
      ];
    });
  }

  /**
   * Updates todo items
   * @returns
   */
  updateTodo(taskId: string, newValue: string) {
    this.todosWritable.update((todos) => {
      const index = todos.findIndex((val) => val.id === taskId);

      if (index > -1) {
        todos[index] = {
          ...todos[index],
          isEditing: false,
          value: newValue,
        };
      }

      return todos;
    });
  }

  /**
   * Removes editor
   * @param taskId
   */
  removeEditor() {
    this.todosWritable.update((todos) => {
      return todos.map((val) => ({ ...val, isEditing: false }));
    });
  }

  /**
   * Removes all the completed tasks
   */
  clearCompletedTasks() {
    this.todosWritable.update((todos) =>
      todos.filter((val) => !val.isCompleted)
    );
  }

  /**
   * Toggles completed state of all the tasks
   */
  toggleCompleteAll(isCompleted: boolean) {
    this.todosWritable.update((todos) => {
      return todos.map((val) => ({
        ...val,
        isCompleted,
      }));
    });
  }

  /**
   * Sets editing state of a task
   * @param id
   */
  editTodoItem(taskId: string) {
    this.todosWritable.update((todos) => {
      return todos.map((val) => ({
        ...val,
        isEditing: val.id === taskId,
      }));
    });
  }

  /**
   * Toggles completed state of a task
   * @param id task id
   */
  toggleTodo(id: string) {
    this.todosWritable.update((todos) => {
      const index = todos.findIndex((val) => val.id === id);

      if (index > -1) {
        todos[index] = {
          ...todos[index],
          isCompleted: !todos[index].isCompleted,
        };
      }

      return todos;
    });
  }

  /**
   * Removes a task
   * @param id task to remove
   */
  removeTodo(id: string) {
    this.todosWritable.update((todos) => todos.filter((val) => val.id !== id));
  }
}
