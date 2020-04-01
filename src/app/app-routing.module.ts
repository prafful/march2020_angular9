import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './spa/home/home.component';
import { ContactComponent } from './spa/contact/contact.component';
import { TeamComponent } from './spa/team/team.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FamilyComponent } from './myfamily/family/family.component';
import { LeadershipComponent } from "./spa/team-child-routes/leadership/leadership.component";
import { MarketingComponent } from './spa/team-child-routes/marketing/marketing.component';
import { ResearchComponent } from './spa/team-child-routes/research/research.component';
import { TrainingComponent } from "./spa/team-child-routes/training/training.component";
import { DonotexistComponent } from './spa/donotexist/donotexist.component';
import {  StructureComponentNgFor } from './directive/structure/structurengfor.component';
import { SampledirectiveComponent } from './directive/sampledirective/sampledirective.component';
import { StructurengifComponent } from './directive/structurengif/structurengif.component';
import { StructurengswitchcaseComponent } from './directive/structurengswitchcase/structurengswitchcase.component';
import { AllpipesComponent } from './pipes/allpipes/allpipes.component';
import { InbuiltpipesComponent } from "./pipes/inbuiltpipes/inbuiltpipes.component";
import { CustompipesComponent } from './pipes/custompipes/custompipes.component';
import { AllformsComponent } from './forms/allforms/allforms.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';


const routes: Routes = [
                {
                  path:'',
                  redirectTo:'home',
                  pathMatch:'full'
                },
                {
                   path:'home',
                   component:HomeComponent
                },
                {
                  path:'contact',
                  component:ContactComponent
                },
                {
                  path:'team',
                  component:TeamComponent,
                  children:[
                    {
                      path:'',
                      redirectTo:'leader',
                      pathMatch:'full'
                    },
                    {
                      path:'leader',
                      component:LeadershipComponent
                    },
                    {
                      path:'market',
                      component: MarketingComponent
                    },
                    {
                      path:'research',
                      component:ResearchComponent
                    },
                    {
                      path:'training',
                      component:TrainingComponent
                    }
                  ]
                },
                {
                  path:'first',
                  component:FirstComponent
                },
                {
                  path:'second',
                  component:SecondComponent
                },
                {
                  path:'family',
                  component:FamilyComponent
                },
                {
                  path:'directive',
                  component:SampledirectiveComponent,
                  children:[
                    {
                      path:'ngfor',
                      component:StructureComponentNgFor
                    },
                    {
                      path:'ngif',
                      component:StructurengifComponent
                    },
                    {
                      path:'ngswitchcase',
                      component:StructurengswitchcaseComponent
                    }
                  ]
                },
                {
                  path:'pipes',
                  component:AllpipesComponent,
                  children:[
                    {
                      path:'inbuiltpipe',
                      component:InbuiltpipesComponent
                    },
                    {
                      path:'custompipe',
                      component:CustompipesComponent
                    }
                  ]
                },
                {
                  path:'allforms',
                  component:AllformsComponent,
                  children:[
                    {
                      path:'template',
                      component:TemplateComponent
                    },
                    {
                      path:'reactive',
                      component:ReactiveComponent
                    }
                  ]
                },
                {
                  path:'**',
                  component:DonotexistComponent

                }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
