// Activity 3
// Latasha Mallory
// 01.19.2012
// Term:  1201

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function()); {
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementsByID(x);
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats() {
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectOp = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "option");
		for(var i=0, j=listOption.length); i<j; i++); {
			var makeOption = document.createElement('option');
			var optText = listOption[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectOp.appendChild(makeSelect);
	};
	
	//Find value of selected radio button.
	function getSelectedRadio() {
		var radios = document.forms[0].favorite;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			favoriteValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue() {
		if($('add').value{
			favoriteValue = "Yes";
		}else{
			favoriteValue = "No";
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('songForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('add').style.display = "inline";
				break;
			case "off":
				$('songForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('add').style.display = "none";
				$('option').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function storeData() {
		var id             = Math.floor(Math.random()*1000000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio();
		getCheckboxValue();
		var item            = {};
			item.option     = ["Option:", $('option').value];
			item.aname      = ["Artist Name:", $('aname').value];
			item.alname     = ["Album Name:", $('alname').value];
			item.sname      = ["Song Name:", $('sname').value];
			item.favorite   = ["Is this one of your favorites?:", favoriteValue];
			item.add        = ["Add song to playlist", $('add').value];
			item.like       = ["Like Rating", $('like').value];
			item.date       = ["Date Created", $('date').value];
			item.notes      = ["Notes", $('notes').value];
		//Save data into Local Storage:  Use Stringify to convert object to a string.
		localStorage.setOption(id, JSON.stringify(option));
		alert("Song Saved!");
	}
	
	function getData() {
		toggleControls("on");
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
	}
	
	function getData() {
		//Write data from Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute(("id", "option");
		var makeList - document.createElement('ul');
		makeDiv.appendChild(makeOption);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeop = document.createElement('option');
			var linksoption = document.createElement('option');
			makeOption.appendChild(makeop);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from local storage value back to an object by using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubOption = document.createElement('ul');
			makeop.appendChild(makeSubOption);
			for(var x in obj){
				var makeSubop = document.createElement('option');
				makeSubOption.appendChild(makeSubli);
				var optSubText = obj[x][0]+" "+obj[x][1];
				makeSubop.innerHTML = optSubText;
				makeSubOption.appendChild(linksoption);
			}
			makeItemLinks(localStorage.key(i), linksoption); //create edit/delete buttons
		}
	}
	
	//Create edit/delete links for stored items when displayed.
	function makeItemLinks(key){
		//add edit single item link
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Song";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksoption.appendChild(editLink);
		
		//add line break
		var breakTag = document.createElement('br');
		linksOp.appendChild(breakTag);
		
		var deleteLink = document.createElement('a')'
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Song";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksoption.appendChild(deleteLink);
	}
	
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There's no data to clear.")
		}else{
			localStorage.clear();
			alert("All songs are deleted!");
			window.location.reload();
			return false;
		}
	}
	
	//Variable defaults
	makeCats();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('save song');
	save.addEventListener("click", storeData);