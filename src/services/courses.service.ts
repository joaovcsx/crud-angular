import { Injectable }                          from '@angular/core';
import { Course }                              from 'src/interfaces/curse';
import { HttpClient }                          from '@angular/common/http'
import { delay, first, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/mocks/courses.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return new Observable<Course[]>(observer => {
      this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(), // Pegar apenas o primeiro 'first() ou take(1)'
        // delay(1000),
        tap(courses => console.log())
      )
      .subscribe(
        response => observer.next(response),
        error => observer.error(error)
      )
    })
  }
}
