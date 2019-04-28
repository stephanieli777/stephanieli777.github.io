/** @param {string} color **/
function setBackgroundColor(color) {
document.getElementById("container").style.backgroundColor = color;

}


function lilacButtonClicked() {
setBackgroundColor('#B6BDF9')
}
document.getElementById("btn-lilac").onclick = lilacButtonClicked;


function pinkButtonClicked() {
setBackgroundColor('#F84671')
}
document.getElementById("btn-pink").onclick = pinkButtonClicked;


function blueButtonClicked() {
setBackgroundColor('#30B8E2')
}
document.getElementById("btn-blue").onclick = blueButtonClicked;


/*------------------------------------------------------------------*/


/** @param {string} lightboxID **/
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
unhideLightbox("dog1")
document.getElementById('dog1').classList.remove('hidden');
}
document.getElementById("dog-1").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("dog2")
	document.getElementById('dog2').classList.remove('hidden');
}
document.getElementById("dog-2").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("dog3")
	document.getElementById('dog3').classList.remove('hidden');
}
document.getElementById("dog-3").onclick = unhideLightbox3;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
document.getElementById(lightboxID).classList.add('hidden');
}
document.getElementById("lightbox-overlay").onclick = closeLightbox;


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
