import { registerElement } from '@nativescript/angular';

// Registro del elemento PullToRefresh (plugin community)
registerElement(
  'PullToRefresh',
  () => require('@nativescript-community/ui-pulltorefresh').PullToRefresh
);
