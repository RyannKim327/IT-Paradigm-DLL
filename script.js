const _ = (element) => {
	return document.querySelector(element)
}

function scroller(id){
	_(id).scrollIntoView({
		behavior: "smooth"
	}, true)
}

function gotoLink(url){
	location.href = url
}

window.onload = () => {
	const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non turpis in odio gravida pretium. Vestibulum eros dui, iaculis varius vestibulum sed, commodo at ex. Ut felis augue, viverra ac mi in, interdum tincidunt nulla. Etiam nec elit a dolor facilisis facilisis. Curabitur et faucibus dolor, eu fermentum massa."
	let iteration = 0
	function runner(){
		if(iteration < text.length){
			_("#description").textContent += text[iteration]
			iteration++
			setTimeout(runner, 7)
		}else{
			const buttons = _("#buttons")
			const joiner = document.createElement("button")
			const contactus = document.createElement("button")

			joiner.textContent = "Join Now!"
			contactus.textContent = "Contact Us"

			joiner.id = "joinButton"
			contactus.id = "contactButton"

			joiner.classList.add("clickBait")
			contactus.classList.add("clickBait")

			buttons.appendChild(joiner)
			buttons.appendChild(contactus)
		}
	}
	runner()
}


document.body.onscroll = () => {
	console.log(document.body.scrollTop)
}