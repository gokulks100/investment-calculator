import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    UserComponent
  ],
  imports:[
    FormsModule,
    CommonModule
  ],
  exports:[
    UserComponent
  ],
  providers:[

  ]
})

export class UserInputModule{

}
