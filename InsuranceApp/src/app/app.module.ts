import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
//import {AppRoutingModule} from './app-routing.module';
//import { AppRoutingModule } from './app-routing/app-routing.module';
import {ServisObjectService} from './servis-object.service';
import {HttpServiceService} from './http-service.service';
//import { CarouselModule } from 'angular4-carousel';
//import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
//import {AgmCoreModule} from '@agm/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { TripInsuranceComponent } from './trip-insurance/trip-insurance.component';
import { InfoTripComponent } from './info-trip/info-trip.component';
import { InfoCascoComponent } from './info-casco/info-casco.component';
import { InfoSportComponent } from './info-sport/info-sport.component';
import { InfoStambenoComponent } from './info-stambeno/info-stambeno.component';
import { BuyTripInsuranceComponent } from './buy-trip-insurance/buy-trip-insurance.component';
import { CostInsuranceTripComponent } from './cost-insurance-trip/cost-insurance-trip.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { BuyStambenoInsuranceComponent } from './buy-stambeno-insurance/buy-stambeno-insurance.component';
import { BuyCascoInsuranceComponent } from './buy-casco-insurance/buy-casco-insurance.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DataUsersComponent } from './data-users/data-users.component';
import { PayingComponent } from './paying/paying.component';
import { ResponseObjectComponent } from './response-object/response-object.component';


  const appRoutes: Routes = [

        {path:'', component:HomePageComponent},
        {path: 'about', component:AboutComponent},
        {path: 'tripInsurance', component: TripInsuranceComponent},
        {path: 'InfoTrip', component: InfoTripComponent},
        {path: 'InfoCasco', component: InfoCascoComponent},
        {path: 'InfoSport', component: InfoSportComponent},
        {path: 'InfoStambeno', component: InfoStambenoComponent},
        {path: 'BuyTrip', component: BuyTripInsuranceComponent},
        {path: 'CostInsuranceTrip', component: CostInsuranceTripComponent},
        {path: 'Policy', component: PolicyComponent},
        {path: 'Contact', component: ContactComponent},
        {path: 'Location', component: LocationComponent},
        {path: 'BuyStambeno', component:BuyStambenoInsuranceComponent},
        {path: 'DataUsers', component: DataUsersComponent},
        {path: 'Paying', component: PayingComponent}
        
        

  ];
  
  
  


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    TripInsuranceComponent,
    InfoTripComponent,
    InfoCascoComponent,
    InfoSportComponent,
    InfoStambenoComponent,
    BuyTripInsuranceComponent,
    CostInsuranceTripComponent,
    PolicyComponent,
    ContactComponent,
    LocationComponent,
    BuyStambenoInsuranceComponent,
    BuyCascoInsuranceComponent,
    DataUsersComponent,
    PayingComponent,
    ResponseObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
    //AppRoutingModule
    //CarouselModule

  ],
  providers: [ServisObjectService, HttpServiceService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
