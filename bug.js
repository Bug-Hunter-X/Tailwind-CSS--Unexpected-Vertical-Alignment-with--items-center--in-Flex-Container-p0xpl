```javascript
// SomeComponent.js
<div className="flex items-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me
  </button>
  <p className="ml-4">Some text</p>
</div>
```
This code snippet intends to create a button with some text next to it. However, due to the default flexbox behavior of `items-center`, it might produce unexpected visual results. The text will be vertically centered, potentially leading to an awkward layout, particularly if the button's height changes due to padding or other styles.