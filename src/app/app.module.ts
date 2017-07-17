import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickablelistComponent } from './clickablelist.component';
import { AddUserComponent } from './add.component';
import { UpdateUserComponent } from './update.component';
import { SearchUserComponent } from './search.component';
import { DeleteUserComponent } from './delete.component';
import {UpdatePopupComponent} from './popupedit.component';
import { UpdateUserServicePopup } from './popupedit.service';
import {HttpModule} from "@angular/http";


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent,ClickablelistComponent,AddUserComponent,UpdateUserComponent ,SearchUserComponent ,DeleteUserComponent,UpdatePopupComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
