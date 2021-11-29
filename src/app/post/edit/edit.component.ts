import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'Редактирование' + (this.title ? ': ' + this.title : '')
    );
  }
  notes: { text: string; date: string }[] = [];
  text: string = '';
  date: string = new Date().toLocaleString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  title: string = '';
  ngOnInit(): void {}
  addNote() {
    this.notes.push({
      text: '',
      date: new Date().toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
    });
  }
}
