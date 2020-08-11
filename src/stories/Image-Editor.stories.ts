import { MyButtonComponent } from './../app/my-button/my-button.component';
import { MyImageComponent } from './../app/my-image/my-image.component';
import { ImageEditorComponent } from './../app/image-editor/image-editor.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { withKnobs, object, text } from '@storybook/addon-knobs';


export default {
  title: 'My Image Editor',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [MyImageComponent, MyButtonComponent, ImageEditorComponent],
      imports: [CommonModule],
    }),
    withKnobs
  ],
};


export const Blurred = () => ({
  component: ImageEditorComponent,
  props: {
    url: 'https://m.pumpernickelpress.com/DSN/wwwpumpernickelpresscom/Commerce/ProductImages/lg1_002371.jpg',
    alt: 'Zion Logo'
  },
});


export const Contrast = () => ({
  component: ImageEditorComponent,
  props: {
    url: 'https://m.pumpernickelpress.com/DSN/wwwpumpernickelpresscom/Commerce/ProductImages/lg1_002371.jpg',
    alt: 'Zion Logo',
    filter: text('filter', 'contrast(150%)')
  },
});


export const Any = () => ({
  component: ImageEditorComponent,
  props: {
    url: 'https://m.pumpernickelpress.com/DSN/wwwpumpernickelpresscom/Commerce/ProductImages/lg1_002371.jpg',
    alt: 'Zion Logo',
    filter: text('filter', 'sepia(100%) brightness(150%)'),
    buttonStyle: object('buttonStyle', {
      display: 'inline-block',
      padding: '0.7em 1.4em',
      margin: '0 0.3em 0.3em 0',
      borderRadius:'0.15em',
      boxSizing: 'border-box',
      textDecoration:'none',
      textTransform:'uppercase',
      fontWeight:400,
      color:'#FFFFFF',
      backgroundColor: '#3369ff',
      boxShadow: 'inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17)',
      textAlign:'center',
      position:'relative'
    })
  },
});