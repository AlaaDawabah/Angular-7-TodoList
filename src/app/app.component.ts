import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragAnDdrop';
  todos = [{
    name : 'React',
    category : 'web Development'
  }, {
    name : 'Ionic',
    category : 'Mobile Development'
  }, {
    name : 'Node js',
    category : 'BackEnd Developement'
  }];

  completed = [{
    name : 'Angular7',
    category : 'FrontEnd Developmnet'
  }, {
    name : 'Sass',
    category : 'Stylying'
  }];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray (event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
