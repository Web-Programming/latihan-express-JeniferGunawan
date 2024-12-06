import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
        title: 'Detail Page'
    },
    {
        path:'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path:'login',
        component: LoginComponent,
        title: 'Login Page'
    }

];