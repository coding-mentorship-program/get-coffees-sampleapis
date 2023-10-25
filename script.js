// https://api.sampleapis.com/coffee/hot

const allCoffees = document.getElementById('all-coffees')

fetch('https://api.sampleapis.com/coffee/hot')
	.then(response => response.json())
	.then(data => {
		// show the data we received from API
		console.log(data)

		// iterate over an array

		data.forEach(eachItem => {
			// print out eachItem
			console.log(eachItem)
      
      // construct html element
			let htmlItem = `<div>
        <img src='${eachItem.image}' style='width:200px' >
        <div>
          <h3>${eachItem.title}</h3>
            <p>${eachItem.description}</p>
        </div>
      </div>`

			const element = document.createElement('div')
			element.innerHTML = htmlItem
			allCoffees.appendChild(element)
		})
	})
	.catch(err => console.log(err))
