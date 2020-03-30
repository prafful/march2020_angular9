import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumberspipe'
})

export class SortnumberspipePipe implements PipeTransform {

  //value -> actual value of template variable!
  //args  -> parameter passed to the custom pipe!
  transform(value: number[], args?: string): any {
    console.log(value);
    console.log(value.sort());
    console.log(args);
    //custom logic to implement behaviour of custom pipe!
    if(args === 'asc'){
        return value.sort(function(a,b){
          return a-b
        })
    }

    if(args === 'dsc'){
        return value.sort(function(a,b){
          return b-a
        })
    }

    return value.sort(function(a,b){
      return a-b
    })


  }

}