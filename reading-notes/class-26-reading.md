# Class 26 Reading

1. What does a component’s lifecycle refer to?

   It seems to refer to the phases that each component goes through: mounting, updating, and unmounting.

2. Why are functional components preferred over class components?

   Functional components reduce the amount of code needed in a component by allowing us to use hooks.

3. What is wrong with the following code?

   ```
   import React, {useState, useEffect} from 'react';

   function MyComponent(props) {
     const [count, setCount] = useState(0);

     function changeCount(e) {
       setCount(e.target.value);
     }

     let renderedItems = []

     for (let i = 0; i < count; i++) {
       useEffect( () => {
         console.log('component mount/update');
       }, [count]);

       renderedItems.push(<div key={i}>Item</div>);
     }

     return (<div>
         <input type='number' value={count} onChange={changeCount}/>
         {renderedItems}
       </div>);
   }
   ```

   This code is using hooks within a for loop. I believe hooks are only allowed to be used at the top level of a function.

[Return to Index](index.md)
