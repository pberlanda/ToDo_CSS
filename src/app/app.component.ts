import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  filter: 'all' | 'active' | 'done' = 'all';

  // elementi hard coded
  allItems = [
    { description: 'Imparare angular', done: true },
    { description: 'Condividere il progetto', done: true} ,
    { description: 'Farlo funzionare', done: true },
    { description: 'Superare il modulo', done: true },
  ]

  get items()  {
    if (this.filter === 'all') {
      return this.allItems;
    }

    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  removeAll() {
    this.allItems = [];
  }

}
