import { Component, Input, HostBinding } from '@angular/core';
import { Attachment } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'payment-plan-card',
  template: `
    <table class="k-card-body table">
      <tr>
        <th>{{ plan.title }}</th>
        <td>{{ plan.subtitle }}</td>
      </tr>
    </table>
  `
})
export class PaymentPlanCardComponent {
  @Input()
  public plan: Attachment;

  @HostBinding('class.k-card')
  public cssClass = true;
}
