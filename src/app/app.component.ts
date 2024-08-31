import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ApiServiceService} from './api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
  profileForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })

  constructor(private apiService: ApiServiceService) {
  }

  onSubmit() {
    this.apiService.addUser(this.profileForm.value).subscribe((response) => {
      alert(`Form Submitted \n ${response["username"]}`);
      this.profileForm.reset()
    });
  }

  get first_name() {
    return this.profileForm.get('first_name');
  }

  get last_name() {
    return this.profileForm.get('last_name');
  }

  get email() {
    return this.profileForm.get('email');
  }

}
