import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-run-rule',
  templateUrl: './run-rule.component.html',
  styleUrls: ['./run-rule.component.css']
})
export class RunRuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCheck(event: MatCheckboxChange) {

  }

}
