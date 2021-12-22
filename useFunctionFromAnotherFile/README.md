# Use function from another file
This test is used to verify if it is possible to use a function that comes from another javascript file without exporting it and importing it into the file to be used.

Remembering that the function tested in the files is declared in the global scope of the file, and consequently in the global scope of the page. I don't know the result if the function used was within a scope, I'll probably do another test to check the possibility, but I'm sure it will fail.

#### File explanation
* **index.html:** Entry point for the javascript files used in the test;
* **index.css:** File (very simple) to improve the visualization of results (I just don't like to define styles inside the html file);
* **index.js:** Main file used for global function declarations;
* **test.js:** File used to test the possibility of using global functions in another file.