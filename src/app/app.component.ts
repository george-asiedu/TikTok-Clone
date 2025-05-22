import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastModule, ToasterPosition } from 'ng-angular-popup';
import {Store} from "@ngrx/store";
import {selectAuthFeature} from "./auth/state/auth.selector";
import {genericData} from "./constants";
import {authActions} from "./auth/state/auth.actions";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public toastPosition = ToasterPosition.TOP_RIGHT;
  private store = inject(Store);
  private state = this.store.selectSignal(selectAuthFeature);
  private key = genericData.storageKey;

  @HostListener('window:beforeunload', ['$event'])
  public beforeUnloadHandler() {
    const storageValue = JSON.stringify(this.state());
    localStorage.setItem(this.key, storageValue);
  }

  ngOnInit() {
    const persistedState = localStorage.getItem(this.key);
    if(persistedState) {
      const storeData = JSON.parse(persistedState);
      this.store.dispatch(authActions.getAuthData({data: storeData}))
    }
    localStorage.removeItem(this.key);
  }
}
