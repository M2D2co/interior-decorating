import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularPerformance } from './angular-performance.decorator';
import { environment } from '../environments/environment.development';

@AngularPerformance(!environment.production)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  constructor() {
    console.log('+ Constructed')
  }

  ngOnInit() {
    console.log('+ ngOnInit')
  }
}
