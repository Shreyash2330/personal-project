import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';


// @Pipe({
//   name: 'sqrt'
// })
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, PipeTransform{

  
  transform(val: number): number {
    return Math.sqrt(val);
  }


title = 'Nandini';
  dateToday: string ="";
  todaydate = new Date();
  myjson = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


  constructor() {}
   
  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
  }
}
