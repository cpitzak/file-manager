import { Component, OnInit, Inject, HostListener, Output, EventEmitter } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { GenericDialogData } from "./model/generic-dialog-data";
import { Router } from "@angular/router";

@Component({
  selector: "app-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.css"],
})
export class GenericDialogComponent implements OnInit {
  // so that we can convert <a href> to act like <a routerLink> for [innerHTML]=""
  // as a result, any anchor elements in this components template will behave like that
  // Watch for clicks in our component
  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    if (event.target instanceof HTMLAnchorElement) {
      // Prevent page from reloading
      event.preventDefault();
      const target = <HTMLAnchorElement>event.target;
      // Navigate to the path in the link
      this.router.navigate([target.pathname]);
      // close this dialog
      this.closed.emit();
      this.dialogRef.close();
    }
  }

  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GenericDialogData,
    private dialogRef: MatDialogRef<GenericDialogComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
