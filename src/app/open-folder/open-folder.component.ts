import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, Input } from "@angular/core";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;

@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements OnInit {
  @Input() inputWidth: number = 327;
  folderName: string = '';
  constructor() {}

  ngOnInit(): void {}

  onOpen() {
    const desktop: string = app.getPath("desktop");
    // console.log(shell.openItem(desktop));
    // console.log(app.getPath('userData'));
    const srcFolder: string[] | undefined = remote.dialog.showOpenDialogSync({
      defaultPath: desktop,
      properties: ["openDirectory"],
    });
    this.folderName = srcFolder?.length > 0 ? srcFolder[0] : '';
  }
}
