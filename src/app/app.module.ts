import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { DisplayProductComponent } from './components/product/display-product/display-product.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/product/products/products.component';
import { HorizontalDisplayComponent } from './components/product/horizontal-display/horizontal-display.component';
import { VerticalDisplayComponent } from './components/product/vertical-display/vertical-display.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Search } from './models/search';
//import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddpassengersComponent } from './components/ticketbooking/addpassengers/addpassengers.component';
import { DisplayTicketComponent } from './components/ticketbooking/display-ticket/display-ticket.component';
import { BookingHistoryComponent } from './components/booking/booking-history/booking-history.component';
import { SearchflightComponent } from './product/searchflight/searchflight.component';
import { CheckflightComponent } from './checkflight/checkflight.component';
import { SearchinventoryComponent } from './components/product/searchinventory/searchinventory.component';
import { FlightComponent } from './components/product/flight/flight.component';
import { AddInventoryComponent } from './components/product/add-inventory/add-inventory.component';
import { NewproductComponent } from './components/product/newproduct/newproduct.component';
//import { SearchinventoryComponent } from './components/product/searchinventory/searchinventory.component';
//import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
//import { AddpassengersComponent } from './components/ticketbooking/addpassengers/addpassengers.component';
// import { FlightSearchComponent } from './Search/flight-search/flight-search.component';
// import { SearchComponent } from './search/search.component';
// import { SearchflightsComponent } from './components/Search/searchflights/searchflights.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    
    AddProductComponent,
    DisplayProductComponent,
    ProductsComponent,
    HorizontalDisplayComponent,
    VerticalDisplayComponent,
    //SearchComponent,
    BookingComponent,
    AddpassengersComponent,
    DisplayTicketComponent,
    BookingHistoryComponent,
    SearchflightComponent,
    CheckflightComponent,
    SearchinventoryComponent,
    FlightComponent,
    AddInventoryComponent,
    NewproductComponent
    //AddpassengersComponent
    // FlightSearchComponent,
    // SearchComponent,
    // SearchflightsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
