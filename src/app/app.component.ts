import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: [];
  selectedPage = '';
  @ViewChild('favDialog', { static: true }) favDialog: ElementRef;

  constructor(private listService: ListService) { }

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

}
