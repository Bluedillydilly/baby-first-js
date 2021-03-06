

let Table = function () {
	let table = document.createElement("table");
	return table;
}

let addCaption = function (table, name) {
	let tcap = table.createCaption();
	let tcapName = document.createTextNode(name);
	tcap.appendChild(tcapName);
}

let addHeaders = function (table, entry) {
	console.log("Entry: ", entry);
	let headers = table.createTHead()
	let row = headers.insertRow();
	for (let key in entry) {
		let th = document.createElement("th")
		let thText = document.createTextNode(key);
		th.appendChild(thText);
		row.appendChild(th);
	}
	table.appendChild(row);

}

// gets values of a dict
// list of values
let valuesOf = function(d){
	return Object.keys(d).map(function(k){return d[k]})
}

let Row = function (table, entry) {
	let row = table.insertRow();
	for ( var value in valuesOf(entry) ) {
		let cell = row.insertCell();
		let cellText = document.createTextNode(value);
		cell.appendChild(cellText);
	}
	return row;
}

let addRows = function (table, entries) {
	for (var entry in entries) {
		Row(table, entry);
	}
}


// data in the form of:
// [{ 'name':'Dylan', 'age':'20', ...  }, ...]
export function createTable (entries, name="table") {
	if (!entries) {
		//errorLog(createTable, "no valid table entries provided", "provided: "+entries);
	}
	else {
		console.log("Entries: ",entries);
	}
	let table = document.getElementsByClassName("genTable");
	// table caption
	addCaption(table, name);
	// create table headers
	addHeaders(table, entries[0]);
	// create table rows
	addRows(table, entries);
	// add the table to the document
	document.appendChild(table);
}