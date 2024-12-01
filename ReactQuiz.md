```bash
   npm create vite@latest
   cd project-name
   npm install
   npm run dev
```

1. Where does react put all of the elemets I create in jsx when i call `root.render()` method ?
All the elements i render get put inside the div with  the id of "root" in index.html file or whatever element i will choose


2. What would show up in my console if i were to run this line of code :
```javascript
 console.log(<h1>HELLO WORLD!</h1>);
```
 

this will result as a object! unlike creating an html element in vanilla JavaScript dom, what get created from jsx we have in our recat code is a plain js object that react will use to fill in the view 

3. What is wrong with this code :

```javascript
root.render(
    <h1>hey h1 here</h1>
    <p>hey p here</p>
)
```

This is an error  in react jsx syntax cause jsx expects us to return only one element from an component

```javascript
root.render(
   <div> <h1>hey h1 here</h1>
    <p>hey p here</p></div>
)
```

4. What does it mean for something to be "declarative" instead of "imperative" :
declarative is more often just tell or describe what to do not explaining each instruction how and why. while imperaitve is when we have to instruct every single thing manually.

5. what does it mean for something to be composable ?
we can break large things down into smaller so easy to built and debug and low code complexity

6. What is react component ?
a function that returns a react elemetnts.