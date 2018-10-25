import React from 'react';

var defaultText = `___
*Want lo learn how to do pages like this yourself? Access* **[FreeCodeCamp](https://www.freecodecamp.org)** *and learn how to program in JavaScript*
___
Otherwise, just edit your text at left, considering the examples showed off:
___

# Title 1
## Subtitle 2
### Subsubtitle 3
#### Subsubsubtitle 4
##### Subsubsubsubtitle 5
###### Subsubsubsubsubtitle 6

## Text styles

**This is a bold text**

_This is an italic text_

~~Strikethrough your text~~

## Blockquotes

> You can input blockquotes
>> You can even create sublevels
>>> As many sublevels as you need!

## Lists

* This is a list of items
* You can even create sublists
  * That can be arranged by double spaces before the \`*\` mark
    * Again, this can be made in several levels
* And can reference it back properly!

### Ordered Lists

1. You can insert ordered lists
1. By starting every line with \`1.\`
1. It increments automatically.


## Code

\`this is considered\` inline code

To insert indented code, put four spaces before the code, like this:

    it renders the code automatically
    // even comments


For multiline code, you can even add \`\`\`

\`\`\`
Like this
\`\`\`

## Images

You can also add images like this:

![Hello Cthulhu](https://i.pinimg.com/236x/49/19/92/491992d5ed514a3f137d0c4a7639f9a7.jpg)

*Cthulhu fhtagn wanna be your friend!*`;


  var renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {var link = marked.Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a","<a target='_blank' ");
};

marked.setOptions({
    renderer: renderer
});

class Main extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      input: defaultText
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render()
  {
    return(
      ```<div class="main">
        <textarea id="editor" onChange={this.handleChange} value={this.state.input}></textarea>
         <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}>
          </div>
      </div>```
    );
  }
}

React.render(<Main />, document.getElementById('main'));
