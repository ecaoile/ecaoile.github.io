# Class 31 Reading

I'm a bit slow on the reading because I wasn't sure if the reading was going to be updated. Rather than coming up with a silly analogy, I'll show what I did for lab 31 since I'm already done with it.

Here was my original implementation of one mega reducer when I started off lab 31 without reading carefully what the main topic of the lab was:

```
const reducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'ADD_TO_CART':
      if (action.payload.stock) {
        action.payload.stock--;
        const prevCartObj = newState.cart.get(action.payload._id);
        newState.cart.set(action.payload._id, {
          ...(prevCartObj || action.payload),
          quantity: (prevCartObj ? prevCartObj.quantity : 0) + 1,
        });
      }
      newState.cartCount++;
      break;
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'INCREMENT_ITEM':
      for (const product of newState.products) {
        if (action.payload._id === product._id) {
          if (product.stock) {
            product.stock--;
            newState.cart.set(action.payload._id, {
              ...action.payload,
              quantity: action.payload.quantity + 1,
            });
            newState.cartCount++;
          }
          break;
        }
      }
      break;
    case 'DECREMENT_ITEM':
      if (action.payload.quantity === 1) {
        newState.cart.delete(action.payload._id);
      } else {
        newState.cart.set(action.payload._id, {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        });
      }

      for (const product of newState.products) {
        if (product._id === action.payload._id) {
          product.stock++;
          break;
        }
      }
      newState.cartCount--;
      break;
    case 'DELETE_FROM_CART':
      newState.cart.delete(action.payload._id);
      for (const product of newState.products) {
        if (product._id === action.payload._id) {
          product.stock += action.payload.quantity;
          break;
        }
      }
      newState.cartCount -= action.payload.quantity;
      break;
    default:
      break;
  }

  return newState;
};
```

Pretty crazy, huh? Well, you can tell that this is already turning into a huge mess. I ended up modularizing this logic by dividing this one reducer into several reducers/stores: `categoryStore`, `cartStore`, and `productStore`. At first, I was a little annoyed by having to do this refactor, but it might sense since having one giant reducer is pretty ridiculous.

Anyway, I'm not going to eat up space by showing 3 more reducers, but I definitely broke it up into smaller chunks. The downside is that I had to use a lot of boilerplate code, but the upside is that I can worry about manipulating cart state in only `cartStore` and worry about updating a product in `productStore.`

[Return to Index](index.md)
