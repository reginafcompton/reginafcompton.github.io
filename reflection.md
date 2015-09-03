<em>What did you learn about CSS padding, borders, and margin by doing this challenge?
What did you learn about CSS positioning?
What aspects of your design did you find easiest to implement? What was most difficult?
What did you learn about adding and formatting elements with CSS in this challenge?</em>

I closely watched J. Ky Marsh's presentation on responsive design and Twitter, which encouraged me to really contemplate the capabilities of CSS. I did not use "Atomic" tags, as he suggests, but I did start to think about my website as a series of rows and columns. I used a "row" class in my website (to encase the <header>, <main>, and <footer> tags). The CSS for my row class is basic: padding 0, margin 0, width 100%, display: block, and float: left. The width setting requires the row to fill the entire page, and the display setting translates the element as a block, wherein no other elements can sit next to it. The "float" property makes the row responsive – I do not quite understand how or why, but it seems to work. (Mysteries. Miracles.) For columns, I used Marsh's calculations, i.e., twelve "span" classes, each with a percentage width.

A significant part of the development process was crafting the header. I used the float property to position the two divs (logo and nav, left and right, respectively). I used an unordered list to organize the elements in my nav bar: I removed the bullet points with the "list-style" property, and I made the list items sit next to each other with the float property. (I believe that you can also use "display: inline-block" to get similar results.) Frustratingly, the nav items do not seem to be perfectly responsive: in a smaller window, they do not stack nicely, one on-top-of-the-other.

The rest of the site came together without too much struggle or homicidal rage. I learned how to add a "box-shadow," which adds some depth to the page. In addition, I learned to track my reusable classes: the <a> tag appears throughout my site, so I included in the CSS a standard style for this.

View my site here!
<a href="https://github.com/reginafcompton/reginafcompton.github.io/">HERE</a>
