import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurengfor',
  templateUrl: './structurengfor.component.html',
  styleUrls: ['./structurengfor.component.css']
})
export class StructureComponentNgFor implements OnInit {


  services = ['OBB', 'Zoom', 'Uber', 'Rider', 'Ola', 'AP Taxi', 'Lexi', 'Ranny']

  friends = [ 
              {
                id:1,
                location:'Chennai',
                name:'Pia',
                score:7
              },
              {
                id:2,
                location:'Chennai',
                name:'Oka',
                score:8
              },
              {
                id:6,
                location:'Bengaluru',
                name:'Kia',
                score:10
              },
              {
                id:8,
                location:'Tokyo',
                name:'Yuko',
                score:9
              }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
