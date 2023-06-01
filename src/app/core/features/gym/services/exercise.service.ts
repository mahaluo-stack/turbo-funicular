import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }


  fetchExercises(muscleGroup: string): Observable<Array<ExerciseType>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.loadExercises(muscleGroup)[muscleGroup]);
        observer.complete();
      }, 1000);
    });
  }

  loadExercises(muscleGroup: string) {
    return {
      [muscleGroup]: require(`../../../../../assets/json/gym/exercises/${muscleGroup.toLowerCase()}-exercises.json`).default,
    };
  }
}
