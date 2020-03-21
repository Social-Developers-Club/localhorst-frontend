import { Component, Input, HostBinding } from '@angular/core';
import { Attachment } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'quote-card',
  template: `
    <div class="k-card-body">
        <dl class="row">
          <dt class="col-sm-5">Type:</dt>
          <dd class="col-sm-7">{{ quote.title }}</dd>

          <dt class="col-sm-5">Car Model:</dt>
          <dd class="col-sm-7">{{ quote.subtitle }}</dd>
        </dl>
      </div>
    `
})
export class QuoteCardComponent {
  @Input()
  public quote: Attachment;

  @HostBinding('class.k-card')
  public cssClass = true;
}
