import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
