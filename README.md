# Replace 3rd party directive with only basic functions

Recently, I got a requirement to enhance a directive in our product. 
As a Professional Service fork, obviously I don't have the access to modify the OOTB directive of the product. 
It is to me more like a 3rd-party library. 
Furthermore, the version of AngularJS is pretty old that we don't have any fancy modern function to utilize.
Luckily, I finally came up with the solution described in this sample to replace the OOTB directive with my custom directive dynamically with only basic functions of AngularJS.
Below are some key steps:
* First of all, create a directive with the exact same name as the 3rd party directive. This directive will "hijack" the 3rd party directive. In another word, both the 3rd party directive and this custom directive will be invoked when AngularJS detects the corresponding element tag in DOM.
* This custom directive needs to do the following several things:
 1. Create a new scope.
 2. Dynamically create and compile another custom directive that we want to use for replacing the OOTB directive with the new scope.
 3. Replace the OOTB directive with the newly created custom directive.

This solution works for me in our project. If you found any concern about it, please share your idea. Thanks.
