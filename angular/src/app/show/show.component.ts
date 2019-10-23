import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Show } from './show';
import { ShowService } from './show.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  show = {} as Show;
  shows: Show[] = [];
  data: any;

  constructor(private _showService: ShowService) { }

  ngOnInit() {
    this.show.type = "-1";
    this.getShows();
  }

  getShows() {
    this._showService.getShows().subscribe( data => {
      console.log( data );
      this.shows = data.data;
      console.log(this.shows.length);
    });
  }

  saveShow(form: NgForm) {
    if (this.show.id !== undefined) {
      this._showService.updateShow(this.show).subscribe(() => {
        this.clearForm(form);
      });
    } else {
      this._showService.saveShow(this.show).subscribe(() => {
        this.clearForm(form);
      })
    }
  }

  deleteShow(show: Show) {
    this._showService.deleteShow(show).subscribe(() => {
      this.getShows();
    });
  }

  editShow(show: Show) {
    this.show = {...show};
  }

  clearForm(form: NgForm) {
    this.getShows();
    form.resetForm();
    this.show = {} as Show;
    this.show.type = "-1";
  }

}
