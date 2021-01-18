import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutSideComponent } from './layout-side.component';
import { ColumnExampleComponent } from 'src/app/pages/column-example/column-example.component';
import { RowExampleComponent } from 'src/app/pages/row-example/row-example.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LayoutSideComponent, ColumnExampleComponent,RowExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class LayoutSideModule { }
