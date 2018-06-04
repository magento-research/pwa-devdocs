---
title: Quantity sync bar component
---

![Quantity selector updating]({{ site.baseurl }}{% link venia-pwa-concept/images/quantity-selector-updating.png %}){:width="400px"}
![Quantity selector updated]({{ site.baseurl }}{% link venia-pwa-concept/images/quantity-selector-updated.png %}){:width="400px"}

## Page states

* **First load** - As the page loads, the bar loads with the current quantity
* **Offline** - The bar turns gray, but the most recent quantity is still shown.
* **Reload** - When the page come back online or reloaded by the user, the bar has a spinner that indicates it is syncing and updating the quantity.
* **Cached** - On revisits, the bar has a spinner that indicates it is syncing and updating the quantity.
