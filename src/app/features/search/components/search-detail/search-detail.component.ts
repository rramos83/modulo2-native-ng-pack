import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService, Item } from '../../../../core/services/search.service';

@Component({
  selector: 'ns-search-detail',
  templateUrl: './search-detail.component.html'
})
export class SearchDetailComponent {
  item?: Item;

  constructor(private route: ActivatedRoute, private svc: SearchService) {
    const id = Number(this.route.snapshot.params['id']);
    const found = this.svc.getAll().find(i => i.id === id);
    this.item = found;
  }
}
