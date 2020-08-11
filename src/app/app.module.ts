import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyImageComponent } from './my-image/my-image.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyImageComponent,
    ImageEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
