({
	example : function(component, event, helper) {
		var auraCmp = component.find('my-div');
        var domElement = auraCmp.getElement();
        alert('The framework created an aura:html component for my div!');
	}
})