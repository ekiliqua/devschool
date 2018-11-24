import { Component, OnInit, EventEmitter, AfterViewChecked, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'devschool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Utils

  // variables privadas
  private subscription: Subscription;

  // variables publicas
  public links: string[];
  public cartLength: number;

  // inputs

  // outputs


  @Input() selected;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();;

  constructor(private cartService: CartService) {
    this.links = ['welcome', 'items/list', 'cart/show'];

    this.subscription = this.cartService.getItems().pipe(
      map((items: CartItem[]) => {
        return items.map(i => i.quantity).reduce((acc, quantity) => acc + quantity, 0);
      }
      )).subscribe(totals => this.cartLength = totals);
   }

  public select(link: string): void {
    this.selectedChange.emit(link);
  }

}