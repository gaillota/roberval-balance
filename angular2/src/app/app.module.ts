import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {BalanceComponent} from './components/balance.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    BalanceComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
