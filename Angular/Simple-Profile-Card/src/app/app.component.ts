import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Bob Smith'
  email: string = 'bob@user.com'
  message: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, aperiam.'
}
