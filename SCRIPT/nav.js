
const drawerIcon = document.getElementById('#drawerIcon');

drawerIcon.addEventListener("click", () => {
    if (drawerIcon.classList.contains("closed")) {
        drawerIcon.classList.remove("closed");
        drawerIcon.classList.add("open");
    } else if (drawerIcon.classList.contains("open")) {
        drawerIcon.classList.remove("open");
        drawerIcon.classList.add("closed");
    }
});

/*

What's done here ?

The methord document.getElementById('#drawerIcon') of the object document returns an object. The object is stored in a 
variable as an instance. The object variable is called by its contains() methord to check its value. An if..else selects the 
code block that changes its value form open to closed or from closed to open.

Why use addEventListener() methord ?

The addEventListener() methord is used as an standard function call for handeling events tor that object. 
This function also allows for other part of the script to be responsive.

Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#an_example_handling_a_click_event

*/