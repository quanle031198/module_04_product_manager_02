import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
//   {
//   path: 'product/list',
//   component: ProductListComponent
// }, {
//   path: 'product/create',
//   component: ProductCreateComponent
// }, {
//   path: 'product/edit/:id',
//   component: ProductEditComponent
// }, {
//   path: 'product/delete/:id',
//   component: ProductDeleteComponent
// },
{
  path: 'product',
  loadChildren:() => import('./product/product.module').then(module => module.ProductModule)
},
{
  path: 'category',
  loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
