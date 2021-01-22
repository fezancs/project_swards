import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { InformationComponent } from './information/information.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreditMemosComponent } from './credit-memos/credit-memos.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CommentsHistoryComponent } from './comments-history/comments-history.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OrderheaderComponent } from './orderheader/orderheader.component';


@NgModule({
  declarations: [OrderComponent, InformationComponent, InvoicesComponent, CreditMemosComponent, ShipmentsComponent, CommentsHistoryComponent, TransactionsComponent, OrderheaderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
