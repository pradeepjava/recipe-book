import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recpie-edit',
  templateUrl: './recpie-edit.component.html',
  styleUrls: ['./recpie-edit.component.css']
})
export class RecpieEditComponent implements OnInit {
id:number;
editMode=false;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.id=  +params['id'];
    this.editMode=params['id']!=null?true:false;
    console.log(this.editMode)
    })
  }

}
