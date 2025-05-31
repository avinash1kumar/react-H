## learning react
to reload in vs code type re / reload in search bar of vs code


Lecture:- 06 {Virtual Dom and Fibre and reconcilliation}
# Virtaual Dom
- it is not use today
- it is an old concept of react, but asked in interview.

## Use of createRoot Method
- it create a DOM just like browser have , it compare main dom and the dom we create and update only those that is updated in ui

* but browser remove total DOM and reload All DOM again and this is called Page reload that's why loading icon come on browser

### 03Taiwind Props
* In react we write className for class because class is a reserbe keyword
      ``` <h1 className="bg-red-500 text-amber-600"> <span className="text-blue-600">Tail</span>wind Test </h1> ```

## Props 
- Props make components reusable

-  we are making a card components so insted of writting the code for that card in App.jsx file make a seperate file for that card components and call/user card component function in App.jsx file. By doing this means by making a seperate card component file you can use that card whenever you want just call that card component function , By doing this no nead to write code for card again and again. 

- But here main problem come is when you are using same card code to create other card but you see both card have same name and every thing is same but you want to change name or any thing then here comes use of { PROPS }

- Props is an Obeject