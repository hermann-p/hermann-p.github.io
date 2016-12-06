---
layout: post
title: "The beauty of building a React website with ClojureScript and reagent"
date: 2016-12-06
description: Because React is so verbose...
comments: false
tags:
- react
- reagent
---

# The React framework

Some time ago Facebook's React framework brought some exciting
innovations to web development. Its users could define a page's layout
and components exactly and link the content to variables. Whenever
scripts would modify the variable's content the page would
automagically reflect those changes -- with some rad performance
tweaks under the hood.

If you are some strange alien being and have never heard of React
before, you should stop, use a search engine of your choice and do
some reading, it's definitely worth the time.

So, end blog post now, right? Well, not exactly.

# What's more to say?

Ok, now some really oppinionanted statement. React does a terrific
job, but writing React web pages is really verbose, error-prone and,
to be honest, sucks. You need to define components in a mixture of
HTML- JavaScript and React-specific code syntax, create rendering
functions for each element and then directly modify the elements
accessed by those components. Alltogether, tode becomes a mess (though
far less than doing all those page content modifications by hand,
admittedly).

That's why I started to use [reagent, a React wrapper for
ClojureScript](https://github.com/reagent-project/reagent) to do any
real work on web pages. It allows you to define content in a special
flavour of atoms, create components using hiccup syntax (used by many
of CLJS's web modules), and render those components to any part of the
webpage you like. There are more sophisticated wrappers for React,
some of them being far closer to the original React, but to create web
pages reagent is all one really needs.

# The obligatory todo-list

Creating a todo list is every reactive web framework's favourite
example, so I'll do one too, to show how easy it can be done in CLJS
and reagent.

First things first, I created a new figwheel project and added the
current versions of reagent and dommy to the dependencies (dommy
just because I'm a lazy typer and don't want do type "(aget
(js/document.selectElementById ID) 0)" over and over.

Then I modified the auto-generated index.html file by inserting a div
with the todo-list:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div id="app">
          <h2>ToDo:</h2>
          <input type="text" id="input-text"></input>
          <button id="add-item-button">Hinzufügen</button>
          <div id="list-container"></div>
        </div>
        <script src="js/compiled/todo.js" type="text/javascript"></script>
      </body>
    </html>

Last thing I added two import statements and eight lines of code to core.cljs:

    (ns todo.core
      (:require [reagent.core :as r]
                [dommy.core :refer [listen! sel1]]))
    
    ;; template-generated stuff for figwheel live development
    (enable-console-print!)
    
    (defn on-js-reload []
      ;; optionally touch your app-state to force rerendering depending on
      ;; your application
      ;; (swap! app-state update-in [:__figwheel_counter] inc)
      )
    
    ;; task list code
    (def tasklist (r/atom [])) ; empty atom
    
    (defn todo-component []
      [:ul (for [item-text @tasklist]               ; loop through elements of tasklist
             ^{:key item-text} [:li item-text])])   ; create list item for each el
    
    (r/render-component [todo-component] (sel1 :#list-container))
    (listen! (sel1 :#add-item-button)
             :click (fn [_]
                      "Function that receives and ignores event object"
                      (swap! tasklist   ; modify tasklist atom
                             conj       ; append an element
                             (.-value (sel1 :#input-text))))) ; === document.getElementById("input-text").value

Et voilá. Compiled with the "min" flag, this code transpiles to a single 296kb source file (gzipped 80k) containing the page script as well as all required functions from React and dommy.

<iframe src="/playground/todo/index.html"></iframe>
