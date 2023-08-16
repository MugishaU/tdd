# Checkout Kata

Write a program that implements a checkout system of a store.
This progam takes a set of products as a string (ABBDBBAC) representing the products in a basket,
and returns the total amount to pay. Each product has a fixed price, but some have special discounts.

Item | Price | Discount

A | 50 | 3 for 130

B | 30 | 2 for 45

C | 20 |

D | 15 |

### Example results:

AA = 100
AABCDADDCD = 260
AAABBBCCCDDD = 310
