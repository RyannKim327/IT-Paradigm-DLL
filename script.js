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
	const text = _("#description").textContent
	let iteration = 0
	function runner(){
		if(iteration < text.length){
			_("#description").textContent += text[iteration]
			iteration++
			setTimeout(runner, 25)
		}else{
			const buttons = _("#buttons")
			const joiner = document.createElement("button")
			const contactus = document.createElement("button")

			joiner.textContent = "Join Now!"
			contactus.textContent = "Contact Us"

			contactus.onclick = () => {
				scroller("#contact")
			}

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


_("#description").textContent = ""

document.body.onscroll = () => {
	console.log(document.documentElement.scrollTop)
}