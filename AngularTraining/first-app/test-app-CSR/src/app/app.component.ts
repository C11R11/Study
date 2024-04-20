import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormtestComponent } from "./formtest/formtest.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgFor, FormtestComponent]
})
export class AppComponent {
  title = 'Test Change Title';
  options = ['first', 'second'];
}
