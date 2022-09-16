import { Component, OnInit }    from '@angular/core';
import { MatDialog }            from '@angular/material/dialog';
import { catchError, of }       from 'rxjs';
import { Course }               from 'src/interfaces/curse';
import { CoursesService }       from 'src/services/courses.service';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];
  showLoading: boolean = false;

  constructor(
    private _courseService: CoursesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._courseService.getCourses()
      .pipe(
        catchError(()=> {
          this.showLoading = false;
          this.openDialog('Erro ao carregar cursos.')
          return of([]);
        })
      )
      .subscribe(
        courses => {
          this.courses = courses;
          this.showLoading = false;
        }
      );
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      // width: '250px',
      data: message,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
