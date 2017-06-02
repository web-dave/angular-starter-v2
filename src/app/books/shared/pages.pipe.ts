import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${args}: ${value}`;
  }

}
