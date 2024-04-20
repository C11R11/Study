import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formtest.component.html',
  styleUrl: './formtest.component.css',
})
export class FormtestComponent {
  textA = 'insert value A';
  textB: string = 'insert value B';
}
