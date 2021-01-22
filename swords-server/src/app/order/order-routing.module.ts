import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { InformationComponent } from './information/information.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreditMemosComponent  } from './credit-memos/credit-memos.component';
import { ShipmentsComponent} from './shipments/shipments.component';
import { CommentsHistoryComponent } from './comments-history/comments-history.component';
import { TransactionsComponent } from './transactions/transactions.component';

import { from } from 'rxjs';
const routes: Routes = [
 { path: '', component: OrderComponent ,
 children:[
  {path:'',component:InformationComponent},
  {path:'infomation',component:InformationComponent},
  {path:'invoice',component:InvoicesComponent},
  {path:'creditmemos',component: CreditMemosComponent},
  {path:'shipments',component: ShipmentsComponent},
  {path:'commenthistory',component:CommentsHistoryComponent},
  {path:'transactions',component:TransactionsComponent},
]
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
