import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathserviceService {

  localPI:number = 3.14

  scores: number[] = [21, 31, 41]

  message(){
    return "Hello From Math Service!!!!"
  }

  constructor() { }
}
