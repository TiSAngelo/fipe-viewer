import { Fipe } from './../model/placeholder.model';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  fipe = new Fipe;
  erro = false;
  sucesso = false;

  constructor(private crudService: CrudService) {

  }

  ngOnInit() { }

  getter() {
    this.crudService.getFipe().subscribe((data: Fipe) => {
      this.fipe = data;
      this.sucesso = true;

    }, (error: any) => {
      this.erro = true;
      console.log("ERROU CARALHO!", error)
    });
  }

  closeFipe() {
    this.sucesso = false
  }

}
