var articles = document.querySelectorAll ('article');

for (var i = 0; i < articles.length; i++) {
	(function(){
var logo = articles[i].querySelector('.logo');
var minor = articles[i].querySelector('.minor');
var content = articles[i].querySelector('.minor img');
var height = content.clientHeight;


logo.addEventListener('click', function(){
	if(minor.classList.contains('active')) {
		minor.style.height = '0px';
		minor.classList.remove('active');
	} else {
		minor.style.height = height + 'px';
		minor.classList.add('active');
	}
	
	})

})()

}