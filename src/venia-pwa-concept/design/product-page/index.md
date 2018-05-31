---
title: Product page
---

{: .bs-callout .bs-callout-info}
**Note:**
This design specification is still in development.
If have any feedback or would like to join the PWA conversation, please join our [Slack] channel.

## Page

![Offline notification bar]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/offline-notification-bar.png %}){:width="400px"}

**Page states:**

* Refresh
* Offline
* Revisit
* Cached
* Inventory sync

## Header 

![Header menu collapsed without cart item]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/header-menu-collapsed-without-cart-item.png %}){:width="400px"}

![Header menu collapsed with cart item]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/header-menu-collapsed-with-cart-item.png %}){:width="400px"}

**Page states:**

* **Refresh** - loads a cached version

**Mobile interactions:**

* **Scroll up** - The Header turns into an icon with the menu/logo.
  When tapped, the header expands.
* **Scroll down** - The purchase bar sticks to the bottom of the screen.
* **Page refresh** - TBD

## Title bar

![Title bar]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/title-bar.png %}){:width="400px"}

**Visual specifications:**

The title is allowed to wrap and become two lines.
If it is longer than two lines, it is clipped and append with an ellipsis.

The price is vertically centered in the bar.

**Page states:**

* **Refresh** - loads a cached version
**Mobile interactions:**

* **Scroll up** - Component disappearts from the top on scroll and appended to the "Add to cart" bar.
* **Scroll down** - Not visible until the user scrolls to the top of the page.
* **Page referesh** - TBD

## Image carousel

![Image carousel]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/image-carousel.png %}){:width="400px"}

**Mobile interactions:**

* **Swipe** - Moves the carousel image to the right or left based on swipe direction
* **Zoom** - When user clicks the *Zoom* icon, a new screen shows up with an enlarged image.
* **Tap arrow** - Moves the carousel image to the right or left based on arrow direction.
  Disabled left or right arrow indicates the beginning or end of the carousel.

**Additional desktop interactions:**

* **Click** - TBD
* **Click + Drag** - Zoom

## Add to wishlist

![Add to wishlist]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/add-to-wishlist.png %}){:width="400px"}
![Added to wishlist]({{ site.baseurl }}{%link venia-pwa-concept/design/product-page/images/added-to-wishlist.png%}){:width="400px"}

**Mobile interactions:**

* **Item added indicator** - On tap, the heart icon grows slightly as it fills with color before returning to its original size.
* **Item removed indicator** - On tap, the heart icon shrinks slightly as the fill color disappears before returning to its original size.
* **Add to wishlist prompt when out of stock** - A message bar that asks if the user would like to add the product to the wishlist.
  This message appears for currently unavailable products when the user selects that specific product configuration(i.e. size, color, etc.) or lands on the Product page from a search.
* **Add wishlist items to cart** - A message bar on the checkout screen/full shopping cart view that asks if the user would like to add wishlist items to the cart before checking out.
  User can opt to disable this notification on subsequent visits.

## Share

![Add to wishlist]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/add-to-wishlist.png %}){:width="400px"}

**Mobile interactions:**

* TBD

## Size selector

![Size selector]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/size-selector.png %}){:width="400px"}

**Mobile interactions:**

* **Unavailable indicator** - Unavailable sizes are marked with an 'X' on the size listing
* **Selection** - On tap, the color reverses on the size listing and becomes black with white text
* **Selection removal** - On tap, the color reverses to become white with black borders and black text

**Desktop interactions:**

* **Hover** - TBD

## Color selector

![Color selector]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/color-selector.png %}){:width="400px"}
![Color selector]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/color-selector2.png %}){:width="400px"}

**Mobile interactions:**

* **Unavailable indicator** - Unavailable colors are marked with an 'X" on the color swatch
* **Selection** - On tap, a checkmark appears on the swatch along with a tooltip that displays the color name.
  The tooltip disappears in a short amount of time.
* **Selection removal** - On tap, the checkmark is removed from the color swatch.

## Label selector

![Label selector]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/label-selector.png %}){:width="400px"}

**Visual specifications:**

It is 1/2 the height of the square selector.
The width adjusts to fit the text with a fixed internal padding.

**Mobile interactions:**

* **Unavailable indicator** - Indicated with an 'X' on the size listing
* **Selection** - On tap, the color reverses and the size listing becomes black with white text
* **Selection removal** - On tap, the color reverses and becomes whit with black border and black text 

## Quantity selector

![Quantity selector]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/quantity-selector.png %}){:width="400px"}

**Mobile interactions:**

* **Unavailable indicator** - If the current product configuration is unavailable, the quantity selector field is disabled.
* **Selection** - If the user selects a quantity before they configure a product, a message appears indicating that they need to choose a configuration before selecting a quantity.
  
  This field can be a standard drop-select or an open numeric field that summons the numerals keyboard for number entries.
* **Selection removal** - Values reset to the default quantity of 1 when configuration parameters are removed or the item is deleted fomr the mini-cart.

## Quantity sync bar


![Quantity selector updating]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/quantity-selector-updating.png %}){:width="400px"}
![Quantity selector updated]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/quantity-selector-updated.png %}){:width="400px"}

**Page states:**

* **First load** - As the page loads, the bar loads with the current quantity
* **Offline** - The bar turns gray, but the most recent quantity is still shown.
* **Reload** - When the page come back online or reloaded by the user, the bar has a spinner that indicates it is syncing and updating the quantity.
* **Cached** - On revisits, the bar has a spinner that indicates it is syncing and updating the quantity.

## Product description


![Product description]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/product-description.png %}){:width="400px"}

**Visual specifications:**

Displayed using formatted text.

## Recommended carousel

![Recommended products carousel]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/recommended-products-carousel.png %}){:width="400px"}

**Mobile interactions:**

* **Swipe** - Pulls in the images 3 at a time
* **Arrow tap** - Pulls in images one at a time.
  Disabled arrows indicate the beginning or end of the list.
* **Thumbnail tap** - Navigates the user to the Product page of the selected product

## Add to cart

![Add to cart (1)]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/atc-purchase-bar1.png %}){:width="400px"}
![Add to cart (2)]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/atc-purchase-bar2.png %}){:width="400px"}
![Add to cart (3)]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/atc-purchase-bar3.png %}){:width="400px"}

**Mobile interactions:**

* **Add item** - Button switches to an outline state with a load indicator while the item is being added.
  When the item is added, an animated checkmark replaces the load indicator and the button is re-filled with the initial color.

  The interaction completes with the appearance of a notification/indicator on the header shopping cart icon with the number of items added.
* **Remove item** - An item is removed by deleting it from the mini/shopping cart.
* **Add another item with different configuration** - When the user changes an item parameter, such as size,color, or quantity, the button changes from the checkmark state to the "Add to Cart" original state.

## Buy now / Buy with

![Buy now]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/atc-purchase-bar1.png %}){:width="400px"}

**Mobile interactions:**

* **Tap** - Navigates the user away from the PD page and into the purchase flow

## Footer

![Footer]({{ site.baseurl }}{% link venia-pwa-concept/design/product-page/images/footer-full.png %}){:width="400px"}

**Mobile interactions:**

* **Expanded footer** - appears at the bottom of every page and is reached by scrolling to the bottom
* **Minimal footer** - Appears inside the main menu for access at all times


[Slack]: https:/magentocommeng.slack.com/messages/C71HNKYS2