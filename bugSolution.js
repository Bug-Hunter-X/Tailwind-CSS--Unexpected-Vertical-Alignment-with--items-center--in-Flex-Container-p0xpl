```javascript
// SomeComponent.js
<div className="flex items-start">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me
  </button>
  <p className="ml-4">Some text</p>
</div>
```
By changing `items-center` to `items-start`, the items are aligned to the start of the cross axis (vertically in this case), fixing the unexpected vertical alignment.