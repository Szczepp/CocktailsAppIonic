import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () =>
          import('./tabs/tabs.page').then((c) => c.TabsPage),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
