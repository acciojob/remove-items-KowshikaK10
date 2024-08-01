
function removeColor() {
	let clickedElement=document.getElementById('colorSelect');
	let index=clickedElement.selectedIndex;
	if(index>-1){
		clickedElement.remove(index)
	}
}