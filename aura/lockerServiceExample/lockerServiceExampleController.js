({
	handleClick : function(component, event, helper) {
    	alert('Button clicked!');
    },
    
    example1 : function(component, event, helper) {
        // 1. Try to modify DOM of a component in a different namespace
        var button = document.getElementsByClassName('slds-button')[0]; // Returns undefined
        button.innerHTML = 'Label Changed';
    },
    example2 : function(component, event, helper) {
        // 2. Try to modify DOM of a component in a different namespace (continued)
        var button = component.find('my-button').getElement(); // Throws exception
        button.innerHTML = 'Label Changed';
    },
    example3 : function(component, event, helper) {
        // 3. Try to modify DOM of a component in the same namespace
        var childComponent = component.find('child-component').getElement(); // Works fine
        childComponent.innerHTML = 'Inner HTML changed!';
    }
})