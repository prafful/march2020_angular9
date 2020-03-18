import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FamilyComponent } from './myfamily/family/family.component';
import { GrandparentComponent } from './myfamily/grandparent/grandparent.component';
import { FatherComponent } from './myfamily/father/father.component';
import { MotherComponent } from './myfamily/mother/mother.component';
import { ChildComponent } from './myfamily/child/child.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FamilyComponent,
    GrandparentComponent,
    FatherComponent,
    MotherComponent,
    ChildComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
