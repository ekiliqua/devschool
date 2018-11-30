import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'devschool-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent {

  reactiveProfileForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastNames: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) { }

}
