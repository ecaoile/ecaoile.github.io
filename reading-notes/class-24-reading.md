# Class 24 Reading

1.  Why do we not need more .html pages in a multi-page React app?

    `React-router-dom` allows us to create a switch state of sorts of which components to render based on the browser URL.

2.  If we wanted a component to show up on every page, where would we put it and why?

    It looks like you'd put it inside the <BrowserRouter /> and outside a <Route />. The React router package exposes the BrowserRouter component, so it looks like we need to use that no matter what. The Routh components are what are unique to a particular page.

3.  What does props.children contain?

    It contains custom child content. Anytime a component has content between its opening and closing tags, React automatically populates this key value.

    For something like this:

    ```
    function Section(props) {
      return (<section className='section-bleed'>
        <div className='centered-container'>
          <img className='section-header-image' src={props.image}/>
          {props.children}
        </div>
      </section>);
    }
    ```

    We can populate the props.children like so:

    ```
    <Section image='http://xyz.png'>
      <p>My Section Content</p>
    </Section>
    <Section image='http://abc.png'>
      <ul>
        <li>My list item</li>
      </ul>
    </Section>
    ```

    This allows us to have resulting HTML looking like this:

    ```
    <section class='section-bleed'>
      <div class='centered-container'>
        <img class='section-header-img' src='http://xyz.png'/>
        <p>My Section Content</p>
      </div>
    </section>

    <section class='section-bleed'>
      <div class='centered-container'>
        <img class='section-header-img' src='http://xyz.png'/>
        <ul>
          <li>My list item</li>
        </ul>
      </div>
    </section>
    ```

    In this example, have props.children represented as a p element once and another time as a list (ul and li elements). It's magic.

[Return to Index](index.md)
