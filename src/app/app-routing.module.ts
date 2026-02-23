import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./shared/components/users/user-dashboard/user-dashboard.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { UserDetailsComponent } from "./shared/components/users/user-details/user-details.component";
import { ProductDashboardComponent } from "./shared/components/products/product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./shared/components/products/product-form/product-form.component";
import { ProductDetailsComponent } from "./shared/components/products/product-details/product-details.component";


const appRoutes : Routes = [
    {
        path : 'users',
        component : UserDashboardComponent
    },
    {
        path : '',
        redirectTo : 'users',
        pathMatch : 'full'
    },
    {
        path : 'users/addUser',
        component : UserFormComponent
    },
    {
        path : 'users/:id',
        component : UserDetailsComponent
    },
    {
        path : 'users/:id/edit',
        component : UserFormComponent
    },
    {
        path : 'products',
        component : ProductDashboardComponent
    },
    {
        path : 'products/addProduct',
        component : ProductFormComponent
    },
    {
        path : 'products/:productId',
        component : ProductDetailsComponent
    },
    {
        path : 'products/:productId/edit',
        component : ProductFormComponent
    }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}