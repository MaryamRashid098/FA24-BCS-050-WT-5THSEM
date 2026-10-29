# Midterm - Web Technologies (CSC336)

**Name:** <Maryam Rashid>
**Roll number:** FA24-BCS-050
**N** = 50
**BP** = 650px
**H** = 350 -> accent colour hsl(350, 70%, 45%)
**K** = 5

## Files changed
- PROJECT-HudaBeauty/index.html - added shop by categorg menu card, the cart icon replaced with badge
- PROJECT-HudaBeauty/style.css - added mega-menu. cart styles and form styles
- PROJECT-HudaBeauty/script.js - logic of adding things to cart. made array 
- PROJECT-HudaBeauty/checkout.html - this is a new page - checkout. 
- PROJECT-HudaBeauty/product.html, product-brush.html - "add to bag" links to script.js and the checkout page. 

## Task 1 - Mega-menu
I added a "Shop by Category" item to the navbar. From 650px up, a full-width absolutely positioned panel with 5 columns opens on hover or keyboard focus (:hover and :focus-within), using visibility so the links can't be tabbed to while closed. Below 650px the same 5 groups appear as a details/summary accordion inside the hamburger menu. I did it this way so it works with no JavaScript, doesn't push content down, and sits above the page with z-index.

## Task 2 - Checkout form
I created checkout.html with two fieldsets (Contact, Delivery), labels joined with for/id, a phone pattern 03XX-XXXXXXX, and a date limited with min/max (29 Oct 2026 to 18 Dec 2026, N = 50 days). Errors use :user-invalid, so nothing is red on page load. CSS Grid puts the fieldsets side by side with labels on the left from 650px up, and one column below that. The submit button is full width.

## Task 3 - Cart
script.js reads each card's name and price, pushes the item into a cart array, and calls a render() function that updates the badge, the mini-cart list and the total (calculated with reduce()). Remove deletes the item and re-renders. Each product can be added 4 times ((50 mod 4) + 2); after that its button shows "Limit reached" and is disabled until one is removed.

## AI tools used
Claude