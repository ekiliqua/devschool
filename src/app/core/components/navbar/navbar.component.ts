import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CartItem } from '../../models';
import { CartService } from '../../services/cart.service';
import { UnSubscriptionHandler } from '../../utilities/unsubscription.handler';

interface AvailablePath {
  id: string;
  path: string;
}

@Component({
  selector: 'devschool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends UnSubscriptionHandler implements OnInit {

  // Utils

  // variables privadas

  // variables publicas
  public availablePaths: AvailablePath[];
  public cartLength: number;

  // inputs

  // outputs

  constructor(private cartService: CartService) {
    super();
    console.log('constructor NavbarComponent');
    this.availablePaths = this.getAvailablePaths();

    this.cartService.getItems()
      .pipe(
        takeUntil(this.componentDestroyed),
        map((items: CartItem[]) =>
          items.map(i => i.quantity).reduce((acc, quantity) => acc + quantity, 0)
        )
      )
      .subscribe(totals => this.cartLength = totals);
  }

  
  ngOnInit() {
    console.log('onInit NavbarComponent');
  }


  private getAvailablePaths(): AvailablePath[] {
    return [
      { id: 'welcome', path: 'welcome' },
      { id: 'items_list', path: '/p/items' },
      { id: 'cart', path: '/p/cart' }
    ];
  }

}
