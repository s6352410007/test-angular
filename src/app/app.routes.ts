import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'about', component: AboutMeComponent },
    { path: 'home', component: HomeComponent },
];

@NgModule ({

    imports: [RouterModule.forChild(routes) ,CommonModule],
    exports: [RouterModule]
})


export class AppRoutingModule {}