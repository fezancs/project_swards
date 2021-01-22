import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from'./dashboard/dashboard.component';
const routes: Routes = [
  {path: '', component:DashboardComponent},
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admindashboard', loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindashboardModule),
   canLoad:[AuthGuard] },
  { path: 'catalogproduct', loadChildren: () => import('./catalogproduct/catalogproduct.module').then(m => m.CatalogproductModule) },
  { path: 'relatedproducts', loadChildren: () => import('./relatedproducts/relatedproducts.module').then(m => m.RelatedproductsModule) },
  { path: 'upsells', loadChildren: () => import('./upsells/upsells.module').then(m => m.UpsellsModule) },
  { path: 'crosssells', loadChildren: () => import('./crosssells/crosssells.module').then(m => m.CrosssellsModule) },
  { path: 'newslettersubscribers', loadChildren: () => import('./newslettersubscribers/newslettersubscribers.module').then(m => m.NewslettersubscribersModule) },
  { path: 'onlinecustomers', loadChildren: () => import('./onlinecustomers/onlinecustomers.module').then(m => m.OnlinecustomersModule) },
  { path: 'managecustomers', loadChildren: () => import('./managecustomers/managecustomers.module').then(m => m.ManagecustomersModule) },
  { path: 'manageorders', loadChildren: () => import('./manageorders/manageorders.module').then(m => m.ManageordersModule) },
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'bestsellers', loadChildren: () => import('./bestsellers/bestsellers.module').then(m => m.BestsellersModule) },
  { path: 'popular', loadChildren: () => import('./popular/popular.module').then(m => m.PopularModule) },
  { path: 'productreviews', loadChildren: () => import('./productreviews/productreviews.module').then(m => m.ProductreviewsModule) },
  { path: 'hotsales', loadChildren: () => import('./hotsales/hotsales.module').then(m => m.HotsalesModule) },
  { path: 'blogreviews', loadChildren: () => import('./blogreviews/blogreviews.module').then(m => m.BlogreviewsModule) },
  { path: 'specialproducts', loadChildren: () => import('./specialproducts/specialproducts.module').then(m => m.SpecialproductsModule) },
  { path: 'managecategory', loadChildren: () => import('./managecategory/managecategory.module').then(m => m.ManagecategoryModule) },
  { path: 'managesubcategory', loadChildren: () => import('./managesubcategory/managesubcategory.module').then(m => m.ManagesubcategoryModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
