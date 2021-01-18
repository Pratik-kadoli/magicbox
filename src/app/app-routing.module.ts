import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { ColumnExampleComponent } from './pages/column-example/column-example.component';
import { HomeComponent } from './pages/home/home.component';
import { RowExampleComponent } from './pages/row-example/row-example.component';


const routes: Routes = [
  {
    path : '',
    component : LayoutFullComponent,
    children : [
      {
        path : '',
        component : HomeComponent
      },
    ],
  },
  {
    path : '',
    component : LayoutSideComponent,
    children : [
      {
        path : 'row-example',
        component : RowExampleComponent
      },
      {
        path : 'column-example',
        component : ColumnExampleComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
