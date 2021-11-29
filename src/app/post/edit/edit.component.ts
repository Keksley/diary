import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor() {}
  notes: { text: string; date: Date }[] = [];
  text: string = '';
  ngOnInit(): void {}
  addNote() {
    this.notes.push({ text: '', date: new Date() });
  }
}
