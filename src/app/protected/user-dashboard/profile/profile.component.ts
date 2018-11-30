import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UnSubscriptionHandler } from 'src/app/core/utilities/unsubscription.handler';

@Component({
  selector: 'devschool-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent extends UnSubscriptionHandler {

  _subscription: Subscription;

  reactiveProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService) {
    super();
    this.reactiveProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required]
    });

    this._subscription = this.reactiveProfileForm.valueChanges
      .pipe(
        takeUntil(this.componentDestroyed),
        map(formChanges => formChanges.name))
      .subscribe(
        nameList => {
          console.log(nameList);
        }
      );
  }

  onSubmit(): void {
    console.log('submitted!');

    setTimeout(() => {
      this.reactiveProfileForm.setValue({
        name: 'Arturo',
        lastNames: 'Aguado'
      });

      setTimeout(() => {

        // Error
        // this.reactiveProfileForm.setValue({
        //   lastNames: 'Aguado Arnold'
        // });

        // Set only one property.
        this.reactiveProfileForm.patchValue({
          lastNames: 'Aguado Arnold'
        });

      }, 10000);
    }, 10000);
  }
}
