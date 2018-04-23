import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe {
  constructor(private sanitizer: DomSanitizer) {}
  private transform(url: string): object {
return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
