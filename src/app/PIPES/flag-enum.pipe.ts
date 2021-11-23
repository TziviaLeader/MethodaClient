import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flagEnum'
})
export class FlagEnumPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value){
      switch(value){
        case 1:return "Init"
        case 2:return "Orphan"
        case 4:return "Final"
        case 5:return "Init | Final"
        case 6:return "Orpha | Final"
        case 8:return ""

      }
    }
   
    return null;
  }

}
