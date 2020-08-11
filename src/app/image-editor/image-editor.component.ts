import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {
  @Input() url;
  @Input() alt;
  @Input() buttonStyle;
  @Input() filter;

  private style: object;
  private buttonLabel = 'Apply Filter';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.buttonLabel == 'Apply Filter') {
      if (this.filter) {  
        this.style = {
          filter: this.filter
        }
      } else {
        this.style = {
          filter: 'blur(5px)'
        }
      }
      this.buttonLabel = 'Back to normal'
    } else {
      this.style = {
      }
      this.buttonLabel = 'Apply Filter'
    }

  }

}
