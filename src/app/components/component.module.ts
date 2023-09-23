import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentRoutingModule } from "./component-routing.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@NgModule(
    {
        declarations:[

  ],
        imports:[
            CommonModule,
            ComponentRoutingModule,
            ReactiveFormsModule,
            FormsModule
        ],
        providers:[],
        bootstrap:[ComponentModule]
    }
)
export class ComponentModule{ }