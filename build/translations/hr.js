(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1","Block quote":"Blok citat",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Choose heading":"Odaberite naslov",Downloadable:"Moguće preuzeti","Dropdown toolbar":"Traka padajućeg izbornika","Edit link":"Uredi vezu","Editor toolbar":"Traka uređivača",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6",Italic:"Ukošeno",Link:"Veza","Link URL":"URL veze",Next:"Sljedeći","Numbered List":"Brojčana lista","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici",Paragraph:"Paragraf",Previous:"Prethodni",Redo:"Ponovi","Rich Text Editor, %0":"Rich Text Editor, %0",Save:"Snimi","Show more items":"Prikaži više stavaka",Strikethrough:"Precrtano","This link has no URL":"Ova veza nema URL",Underline:"Podcrtavanje",Undo:"Poništi",Unlink:"Ukloni vezu"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));