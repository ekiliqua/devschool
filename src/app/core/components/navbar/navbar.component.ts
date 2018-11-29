import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../models';
import { CartService } from '../../services/cart.service';

interface AvailablePath {
  id: string;
  path: string;
}

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
  public availablePaths: AvailablePath[];
  public cartLength: number;

  // inputs

  // outputs

  constructor(private cartService: CartService) {
    this.availablePaths = this.getAvailablePaths();

    this.subscription = this.cartService.getItems()
      .pipe(
        map((items: CartItem[]) =>
          items.map(i => i.quantity).reduce((acc, quantity) => acc + quantity, 0)
        )
      )
      .subscribe(totals => this.cartLength = totals);
  }

  private getAvailablePaths(): AvailablePath[] {
    return [
      { id: 'welcome', path: 'welcome' },
      { id: 'items_list', path: '/p/items' },
      { id: 'cart', path: '/p/cart' }
    ];
  }

}
