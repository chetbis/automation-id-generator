import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IdDirective } from './id/id.directive';
import { IdPipe } from './id/id.pipe';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FocusInputElementDirective } from './focus.directive';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IdDirective, IdPipe, ReactiveFormsModule, NgIf, FocusInputElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly taskInput = new FormControl<string>('', { validators: [Validators.required] });
  readonly editInput = new FormControl<string>('', { validators: [Validators.required]});
  readonly toggleAll = new FormControl<boolean>(false);

  private readonly todoService = inject(TodoService);
  readonly todos = this.todoService.todos;

  /**
   * Adds a task
   */
  addTodo() {
    if (this.taskInput.invalid) return;
    this.todoService.addTodo(this.taskInput.value ?? '');
    this.taskInput.setValue('');
  }

  /**
   * Updates todo items
   * @param taskId
   * @returns 
   */
  updateTodo(taskId: string) {
    if (this.editInput.invalid) return;
    this.todoService.updateTodo(taskId, this.editInput.value ?? '');
  }


  /**
   * Removes editor
   */
  removeEditor() {
    this.todoService.removeEditor();
  }


  /**
   * Removes all the completed tasks
   */
  clearCompletedTasks() {
    this.todoService.clearCompletedTasks();
  }

  /**
   * Toggles completed state of all the tasks
   */
  toggleCompleteAll() {
    this.todoService.toggleCompleteAll(this.toggleAll?.value ?? false);
  }


  /**
   * Sets editing state of a task
   * @param id 
   */
  editTodoItem(task: Todo) {
    this.editInput.setValue(task.value);
    this.todoService.editTodoItem(task.id);
  }

  /**
   * Toggles completed state of a task
   * @param id task id
   */
  toggleTodo(id: string) {
    this.todoService.toggleTodo(id);
  }

  /**
   * Removes a task
   * @param id task to remove
   */
  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }
}
