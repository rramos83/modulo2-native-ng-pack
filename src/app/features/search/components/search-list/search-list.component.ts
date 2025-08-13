import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { action } from '@nativescript/core/dialogs';
import { SearchService, Item } from '../../../../core/services/search.service';
import { Toasty } from '@triniwiz/nativescript-toasty'; // fallback toast package if @nativescript/toast not available
import { isAndroid, View } from '@nativescript/core';

@Component({
  selector: 'ns-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {
  term = '';
  items: Item[] = [];
  filtered: Item[] = [];

  constructor(private svc: SearchService, private nav: RouterExtensions) {
    this.items = this.svc.getAll();
    this.filtered = this.items.slice();
  }

  onSearchChange() {
    const q = this.term.toLowerCase().trim();
    this.filtered = this.items.filter(i =>
      i.title.toLowerCase().includes(q) || i.subtitle.toLowerCase().includes(q));
  }

  // PullToRefresh event
  onRefresh(e: any) {
    setTimeout(() => {
      this.items.unshift(this.svc.random());
      this.onSearchChange();
      try {
        new Toasty({ text: 'Listado actualizado' }).show();
      } catch {}
      e.object.refreshing = false;
    }, 600);
  }

  pickCategory(item: Item) {
    action({
      title: 'Seleccionar categoría',
      cancelButtonText: 'Cancelar',
      actions: ['General', 'Trabajo', 'Estudio', 'Personal']
    }).then(sel => {
      if (sel && sel !== 'Cancelar') {
        item.category = sel;
        try {
          new Toasty({ text: 'Categoría: ' + sel }).show();
        } catch {}
      }
    });
  }

  toggleFav(args: any, item: Item) {
    const view = args.object as View;
    item.fav = !item.fav;
    view.animate({ rotate: 360, duration: 300 })
      .then(() => { view.rotate = 0; });
  }

  open(item: Item) {
    this.nav.navigate(['/search', item.id]);
  }
}
