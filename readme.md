Usage

Use <lazy-load></lazy-load> to lazy images
You can set your custom style using styling property on the component
<lazy-load styling="height:250px; width:350px;"></lazy-load>

To set image url use src Prop
<lazy-load src="/*Path to Image*/"></lazy-load>

To give a color to the div before loading image use the initcolor property
<lazy-load initcolor="#eee"></lazy-load>

By default image is set using the image tag to set image as background image in div set property bg=true
<lazy-load bg=true></lazy-load>


Example setting as background image
<lazy-load styling="height:350px; width:235px; background-size:contain;" initcolor="#eee" bg=true src="https://images.unsplash.com/photo-1496714123687-7e9494065e0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92f146eff6d9ac129b4c280fe695c99e&auto=format&fit=crop&w=634&q=80"></lazy-load>


Example setting as img tag
<lazy-load styling="height:250px; width:350px;" initcolor="#eee" src="https://images.unsplash.com/photo-1513834162622-bcd164ad6a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ce96e06e157ef835873719b681c40ae&auto=format&fit=crop&w=1050&q=80"></lazy-load>



