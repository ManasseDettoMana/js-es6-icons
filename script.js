/**
 *  Milestone 1
    Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

    Milestone 2
    Coloriamo le icone per tipo

    Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */


const vettoreIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let box_container = document.getElementById('box_container');

const types = getTypes(vettoreIcone,"type");
const selezione = document.getElementById("selezione");

addOptions(types,selezione);



// vettoreIcone.forEach((element)=>{
// 	let {name,prefix,type,family} = element;

// 	box_container.innerHTML += 
//  	`
// 	<div class="box mb-5 me-4 d-flex flex-column justify-content-center align-items-center">
// 		<i class="${family} ${prefix}${name} icons_size "></i>
// 		<div class="mt-2">
// 			<h3>${name}</h3>
// 		</div>
//  	</div>
//  	`;
// });


function getTypes(array, proprieta){

	const types = [];

	array.forEach((element) => {
		if(!types.includes(element[proprieta])){
			types.push(element[proprieta]);
		}
	});
	return types;
}

function addOptions(options,select){
	options.forEach((element)=>{
		select.innerHTML += `<option value="${element}">${element}</option>`;
	});

}



// selezione.addEventListener('change', function(){
	
// });

