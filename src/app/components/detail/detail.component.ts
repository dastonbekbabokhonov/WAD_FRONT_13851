import { Component, Input } from '@angular/core';
import { Users } from '../../../interfaces/users.interface';
import { Workout } from '../../../interfaces/workout.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = ''
  
  detailIter: any;
  description: string = '';
  workoutIter!: any;
  workoutDesc: string = '';
  
  ngOnChanges() {
    this.detailIter = Object.entries(this.detail)
    if (this.detail && this.detail.workout) {
      this.workoutIter = Object.entries(this.detail.workout);
      this.workoutDesc = this.detail.description
    }
  }
}
