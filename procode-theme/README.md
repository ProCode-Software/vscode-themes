# procode-theme README

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

-   Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
-   Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
-   Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## Sample Code

```javascript
const element = document.querySelector(".body")
const elementNames = ["preloader", "searchBar"]

elementNames.forEach((type, index) => {
	const newElement = document.createElement("div")
	newElement.className = type
	newElement.tabIndex = 1 + index
	element.append(elementNames)
})
```

> [!NOTE]
> I love this

> This is a blockquote

---
Sep

<pre>
It's another one
	I can use tabs safely
</pre>

## For more information

-   [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
-   [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
