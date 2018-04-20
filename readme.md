<h3>Usage</h3>

Copy dist folder into your project directory. and in the ```<head>``` tag of the ```html``` document place  ```<script src="dist/imageloader.js"></script>```.

or <br><br>Run
```
$ npm i @veerajshenoy/imageloader
```
and  include 
```
<script src="node_modules/@veerajshenoy/imageloader/dist/imageloader.js"></script>
```
in the ```head``` tag of your ```html``` file.
<br><br>
<b>Lazy Loading</b>

Use <lazy-load></lazy-load> tag to lazy load images.<br>
You can set your custom style using styling property on the component
```
<lazy-load styling="height:250px; width:350px;"></lazy-load>
```

To set image url use src prop
```
<lazy-load src="/*Path to Image*/"></lazy-load>
```

To give a color to the div before loading image use the initcolor property
```
<lazy-load initcolor="#eee"></lazy-load>
```

By default image is set using the image tag, to set image as a background image in div, set property bg=true
```
<lazy-load bg=true></lazy-load>
```


Example setting as background image
```
<lazy-load styling="height:350px; width:235px; background-size:contain;" initcolor="#eee" bg=true src="https://images.unsplash.com/photo-1496714123687-7e9494065e0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92f146eff6d9ac129b4c280fe695c99e&auto=format&fit=crop&w=634&q=80"></lazy-load>
```


Example setting as image as img tag
```
<lazy-load styling="height:250px; width:350px;" initcolor="#eee" src="https://images.unsplash.com/photo-1513834162622-bcd164ad6a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ce96e06e157ef835873719b681c40ae&auto=format&fit=crop&w=1050&q=80"></lazy-load>
```

<br><br>
<b>Progressive Loading</b><br><br>
Use <p-loader></p-loader> tag to progressively load images.<br>
You can set your custom style using styling property on the component
```
<p-loader styling="height:250px; width:350px;"></p-loader>
```

To set image url use src Prop
```
<p-loader src="/*Path to Image*/"></p-loader>
```

To give a color to the div before loading image use the initcolor property
```
<p-loader initcolor="#eee"></p-loader>
```

By default image is set using the image tag to set image as background image in div set property bg=true
```
<p-loader bg=true></p-loader>
```

Set a low resolution image using lowres property, set a high resultion image using highres property
```
<p-loader bg=true lowres="https://f4.bcbits.com/img/0008736837_10.jpg" highres="https://upload.wikimedia.org/wikipedia/commons/1/16/AsterNovi-belgii-flower-1mb.jpg"
  styling="height: 100px; width: 200px; background-size:cover;" initcolor="#eee"></p-loader>
  ```

Providing both properties is unnecessay, any single property will readily load the image.

Feel free to use it in any of your projects.






<br>
<h3>License</h3>
Copyright 2018 Veeraj Shenoy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
