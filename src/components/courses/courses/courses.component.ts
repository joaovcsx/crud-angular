import { Component, OnInit }  from '@angular/core';
import { Curse }              from 'src/interfaces/curse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Curse[] = [
    { db_id: '1', name: 'Angular', category: 'font-end'}
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
