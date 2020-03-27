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
import { HomeComponent } from './spa/home/home.component';
import { ContactComponent } from './spa/contact/contact.component';
import { TeamComponent } from './spa/team/team.component';
import { LeadershipComponent } from './spa/team-child-routes/leadership/leadership.component';
import { MarketingComponent } from './spa/team-child-routes/marketing/marketing.component';
import { ResearchComponent } from './spa/team-child-routes/research/research.component';
import { TrainingComponent } from './spa/team-child-routes/training/training.component';
import { DonotexistComponent } from './spa/donotexist/donotexist.component';
import { StructureComponentNgFor } from './directive/structure/structurengfor.component';
import { SampledirectiveComponent } from './directive/sampledirective/sampledirective.component';
import { StructurengifComponent } from './directive/structurengif/structurengif.component';
import { StructurengswitchcaseComponent } from './directive/structurengswitchcase/structurengswitchcase.component';


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
    TestComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    LeadershipComponent,
    MarketingComponent,
    ResearchComponent,
    TrainingComponent,
    DonotexistComponent,
    StructureComponentNgFor,
    SampledirectiveComponent,
    StructurengifComponent,
    StructurengswitchcaseComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
