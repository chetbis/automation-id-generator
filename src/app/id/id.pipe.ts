import { Pipe, PipeTransform, inject } from '@angular/core';
import { ID_PREFIX } from './id-prefix.token';
import { ID_GENERATOR } from './id-generator.token';

@Pipe({
  name: 'id',
  standalone: true,
})
export class IdPipe implements PipeTransform {
  private readonly getId = inject(ID_GENERATOR);
  private readonly prefix = inject(ID_PREFIX);

  transform(testId: string) {
    return this.getId(this.prefix, testId);
  }
}
