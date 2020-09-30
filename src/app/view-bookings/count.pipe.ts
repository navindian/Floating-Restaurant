import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value<5){
      return "less than five plates"
    }else if(value>5){
      return "more than five plates"
    }else{
      return "five plates"
    }
  }

}
