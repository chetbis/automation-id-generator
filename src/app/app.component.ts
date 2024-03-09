import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdDirective } from './id/id.directive';
import { IdPipe } from './id/id.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IdDirective, IdPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test_app';
}
