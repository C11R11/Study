import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponentComponent } from "./new-component/new-component.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgFor, NewComponentComponent]
})
export class AppComponent {
  title = 'Test Change Title';
  options = ['first', 'second'];
}
