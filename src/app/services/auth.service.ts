import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authState = new BehaviorSubject(false);

  constructor(private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  private checkToken() {
    this._authState.next(true);
  }

  public isAuthenticated() {
    return this._authState.value;
  }

  public get authState() {
    return this._authState;
  }
}
