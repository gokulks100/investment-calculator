import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user/userinput.module";


@NgModule({

  declarations:[
    AppComponent , HeaderComponent ,InvestmentResultsComponent
  ],
  imports:[
    FormsModule,BrowserModule,UserInputModule
  ],
  providers:[

  ],
  bootstrap:[
    AppComponent
  ]
})


export class AppModule{

}
