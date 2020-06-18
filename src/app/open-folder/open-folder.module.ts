import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenFolderComponent } from './open-folder.component';


@NgModule({
  declarations: [OpenFolderComponent],
  imports: [
    CommonModule
  ],
  exports: [OpenFolderComponent]
})
export class OpenFolderModule { }
