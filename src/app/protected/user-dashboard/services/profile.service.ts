import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDashboardModule } from '../user-dashboard.module';

@Injectable()
  export class ProfileService implements OnDestroy {
  
    constructor(private http: HttpClient) {
        console.log('instanciado!');
    }

    ngOnDestroy() {
        console.log('se destruye!')
    }
  }
  