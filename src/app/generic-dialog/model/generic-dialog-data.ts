export interface GenericDialogData {
  title: string;
  acceptButton: {
    enabled: boolean;
    focus?: boolean;
    text?: string;
  };
  rejectButton: {
    enabled: boolean;
    focus?: boolean;
    text?: string;
  };
  innerHtml: string;
}
