# Class 32 Reading

Redux middleware is curry that you put onto your action to make it taste it better. If there's a function in your dish, the curry expldoes with `dispatch()` and `getState()` spices. Otherwise, it remains its usual action flavor.

We gotta think with API data because you'll often want to grab data from an external API rather than hold it in memory or locally. As we've seen from previous labs, APIs can be punks and not return responses when you want, so you have to wait for them to be finish using async or promise curry. Nom nom nom!

Instead of custom homemade curry, we're using commercialized `redux-thunk`.

[Return to Index](index.md)
