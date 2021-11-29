import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'post/:id',
    component: ViewComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'create',
    component: EditComponent,
  },
];

@NgModule({
  declarations: [EditComponent, ViewComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class PostModule {}
