import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component'; 
import { ProductListComponent } from './product-list-component/product-list-component';
import { ParentComponent } from './parent/parent';
import { ChildComponent } from './child/child'; 
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';

const routes: Routes = [
  {path: 'binding-property', component: BindingPropertyComponent},
  {path: 'binding-class', component: BindingClassComponent},
  {path: 'binding-style', component: BindingStyleComponent},
  {path: 'binding-event', component: BindingEventComponent},
  {path: 'binding-two-way', component: BindingTwoWayComponent},
  {path: 'product-list-component', component: ProductListComponent},
    // Slide 73-79
  {path: 'component-interaction', component: ParentComponent},
  {path: 'product-dropdown-list', component: ProductDropdownListComponent},
  {path: 'product-list-call-service', component: ProductListCallServiceComponent},
  {path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
