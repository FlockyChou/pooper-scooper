# Pooper Scooper
> A Dog Online Utility

A hand-written bullshit userscript to make life a bit easier.

* The main purpose of this script is to declutter (hence the name) and streamline.
* The design principle of this script is to be as minimal and unintrusive as possible, both to the user and the website.
  * This means features should not be making additional page requests for functionality.

You will need to download a userscript browser extension like [ViolentMonkey](https://github.com/Violentmonkey/Violentmonkey) to use this.

---

## Features

### Tower
* Declutters the page by adding a "Hide Unused?" checkbox to hide unequipped items.
  * Note: This currently breaks when exiting a tower since the URL does not change. I need to probably add a retrigger to the "Leave the Tower" button or something.

### Shops - Cozy Cocoa Bookstore
* Greys out books that have been read by any one of your dogs.
  * Note: You will need to visit your book collection page after installing this script, where that information will be cached.

---

## Things I Want to Add
* Making your active dog more obvious when feeding, reading, etc. since their display order is different on desktop vs mobile.
* Adding the book check on all stores and collections.