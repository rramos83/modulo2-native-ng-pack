import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  subtitle: string;
  category?: string;
  fav?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private counter = 100;
  private categories = ['General', 'Trabajo', 'Estudio', 'Personal'];

  private data: Item[] = [
    { id: 1, title: 'Angular NativeScript', subtitle: 'App móvil', category: 'Estudio' },
    { id: 2, title: 'Comprar víveres', subtitle: 'Mercado del sábado', category: 'Personal' },
    { id: 3, title: 'Revisar Tarea CCC301', subtitle: 'Pilas y Colas', category: 'Estudio' },
  ];

  getAll(): Item[] {
    return this.data.slice();
  }

  random(): Item {
    const id = ++this.counter;
    const cat = this.categories[Math.floor(Math.random() * this.categories.length)];
    return { id, title: 'Elemento #' + id, subtitle: 'Generado aleatoriamente', category: cat };
  }
}
