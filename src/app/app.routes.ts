import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductPageComponent } from './product-page/product-page.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    // { path: 'home', component: AppComponent },
    { path: 'shop', component: ProductPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
