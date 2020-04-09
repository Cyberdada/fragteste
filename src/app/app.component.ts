import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: [];
  selectedPage = '';
  closeResult = '';
  @ViewChild('favDialog', { static: true }) favDialog: ElementRef;

  constructor(private listService: ListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listService.get().subscribe(itm =>
      this.list = itm);
  }

  load(uri: string): void {
    this.listService.getFile(uri).subscribe(itm => {
      this.selectedPage = itm;
      this.favDialog.nativeElement.showModal();
    });
  }
  bootstrapLoad(uri: string, content: any): void {
    this.listService.getFile(uri).subscribe(itm => {
      this.selectedPage = itm;
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  }


