console.log('Ok')

//Guardamos en una variable la url
const baseUrl = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('#app')

appNode.addEventListener('click',
	(evento)=>{
		if(evento.target.nodeName === 'H1'){
			appNode.append(document.createElement('h5'))
		}
	}
);



// API de Internacionalizacion
const formatPrice = (price) =>{
	const newPrice = new window.Intl.NumberFormat('en-EN',{
		style:'currency',
		currency:'USD'
	}).format(price)

	return newPrice
}

/*Usamos una web API, en este caso fetch*/
window.fetch(`${baseUrl}/api/avo`)

//Procesar respuesta y convertirla en JSON
.then((respuesta)=>respuesta.json())
// JSON → Data → Renderiza info browser
.then((respuestaJSON)=>{
	const allItems = []

	respuestaJSON.data.forEach((e,i)=>{
		const imagen = document.createElement('img')
		imagen.src = `${baseUrl}${e.image}`


		const title = document.createElement('h2')
		title.className="nameAvocado"
		title.textContent = e.name

		const price = document.createElement('p')
		price.className="descriptionAvo"
		price.textContent = e.price
		price.textContent = formatPrice(e.price);

		const subElem = document.createElement('div')
		subElem.append(title, price)
		subElem.className='description'

		const container = document.createElement('div')
		container.className = 'containAvo'
		container.append(imagen, subElem);
		allItems.push(container)
	})

	appNode.append(...allItems)

	console.log(respuestaJSON.data)
});

/*Agregando mas info desde JS*/
