const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const ranButton = document.querySelector('button.ran-button');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowFruits = ['apple', 'Apricot', 'avocado', 'banana', 'bilberry', 'blackberry', 'blackcurrant', 'blueberry', 'boysenberry', 'currant', 'cherry', 'coconut', 'cranberry', 'cucumber', 'custard apple', 'damson', 'date', 'dragonfruit', 'durian', 'elderberry', 'feijoa', 'fig', 'gooseberry', 'grape', 'raisin', 'grapefruit', 'guava', 'honeyberry', 'huckleberry', 'jabuticaba', 'jackfruit', 'jambul', 'juniper berry', 'kiwifruit', 'kumquat', 'lemon', 'lime', 'loquat', 'longan', 'lychee', 'mango', 'mangosteen', 'marionberry', 'melon', 'cantaloupe', 'honeydew', 'watermelon', 'miracle fruit', 'mulberry', 'nectarine', 'nance', 'olive', 'orange', 'clementine', 'mandarine', 'tangerine', 'papaya', 'passionfruit', 'peach', 'pear', 'persimmon', 'plantain', 'plum', 'pineapple', 'pomegranate', 'pomelo', 'quince', 'raspberry', 'salmonberry', 'rambutan', 'redcurrant', 'salak', 'satsuma', 'soursop', 'star fruit', 'strawberry', 'tamarillo', 'tamarind', 'yuzu']

function search(str) {
	let result = [];
	for(let fruit of fruits){
		if(fruit.toLowerCase().includes(str)){
			result.push(fruit)
		}
	}
	if(result.length > 8){
		let final = (result.length) - 8;
		result.splice(8, final)
	}
	return result;
}

function searchHandler(e) {
	let inputVal = input.value.toLowerCase();
	const results = search(inputVal);
	return showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	if(inputVal !== ''){
		if(!suggestions.firstChild){
			for(let f1 of results){
				const fruitSuggest1 = document.createElement('li');
				fruitSuggest1.setAttribute('class', 'suggestions');
				fruitSuggest1.setAttribute('id', f1);
				const bText1 = highlightText(inputVal, f1);
				fruitSuggest1.innerHTML = bText1;
				suggestions.append(fruitSuggest1);
			}	
		}
		else{
			while(suggestions.firstChild){
				suggestions.removeChild(suggestions.lastChild);
			}
			for(let f2 of results){
				const fruitSuggest2 = document.createElement('li');
				fruitSuggest2.setAttribute('class', 'suggestions');
				fruitSuggest2.setAttribute('id', f2);
				const bText2 = highlightText(inputVal, f2);
				fruitSuggest2.innerHTML = bText2;
				suggestions.append(fruitSuggest2);
			}	
		}
	}
	else {
		while(suggestions.firstChild){
			suggestions.removeChild(suggestions.lastChild);
		}
	}
}

function highlightText(val, fru){
	let rStr = fru;
	let subrStr = val;
	return rStr.replace(subrStr, '<b>' + subrStr + '</b>');
	/*let subrStr1 = val;
	let subrStr2 = '';
	let subrStr3 = '';
	let finalStr = '';
	if(val.length = 1){
		subrStr2 = val.toUpperCase();
		if(rStr.includes(subrStr2)){
			finalStr = rStr.replace(subrStr2, '<b>' + subrStr2 + '</b>');
		}
		else if(rStr.includes(subrStr1)){
			finalStr = rStr.replace(subrStr1, '<b>' + subrStr1 + '</b>');
		}
	}
	else{
		subrStr3 = val.charAt(0).toUpperCase() + val.slice(1);
		if(rStr.includes(subrStr3)){
			finalStr = rStr.replace(subrStr3, '<b>' + subrStr3 + '</b>');
		}
		else if(rStr.includes(subrStr1)){
			finalStr = rStr.replace(subrStr1, '<b>' + subrStr1 + '</b>');
		}
	}
	console.log(finalStr);
	return finalStr;*/
}

function useSuggestion(e) {
	input.value = e.target.getAttribute('id');
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.lastChild);
	}
}

function ranSelect(){
	let ranIndex = Math.floor(Math.random() * fruits.length);
	let selFruit = fruits[ranIndex];
	if(suggestions.firstChild){
		while(suggestions.firstChild){
			suggestions.removeChild(suggestions.lastChild);
		}
	}
	input.value = selFruit;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
ranButton.addEventListener('click', ranSelect);