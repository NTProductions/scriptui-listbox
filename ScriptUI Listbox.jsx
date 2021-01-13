// ScriptUI Listboxes
var counter = 0;

var window = new Window("palette", "Listbox", undefined);
window.orientation = "column";
var listBox = window.add("listbox", undefined, []);
listBox.selection = 0;
listBox.size = [70, 60];

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var addButton = buttonGroup.add("button", undefined, "+");
addButton.size = [25, 25];
var minusButton = buttonGroup.add("button", undefined, "-");
minusButton.size = [25, 25];

addButton.onClick = function () {
        counter++;
        listBox.add("item", "Item_"+counter.toString());
    }

minusButton.onClick = function() {
        if(listBox.selection != null) {
        counter--;
        listBox.remove(listBox.selection);
            }
    }

window.center();
window.show();