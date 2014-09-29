document.getElementById('hid').style.display='none';

function checkForm() {
    if (document.getElementById('text').value!='' || document.getElementById('digital').value!='' || document.getElementById('dating').value!='') 
        return true;
    else return false;
};


function datePropisRU(){ // функция дата прописью




}



function translateEN(){
        if (checkForm()==true) {  //проверка Chekform перед выполнением функции
            var text=document.getElementById('text').value;
            var transl=new Array(); // массив по Е.Н. Тамарченко
                transl['а']='a';
                transl['б']='b';
                transl['в']='v';
                transl['г']='g';
                transl['д']='d';
                transl['е']='e';
                transl['ё']='yo';
                transl['ж']='zh';
                transl['з']='z';
                transl['и']='i';
                transl['й']='y';
                transl['к']='k';
                transl['л']='l';
                transl['м']='m';
                transl['н']='n';
                transl['о']='o';
                transl['п']='p';
                transl['р']='r';
                transl['с']='s';
                transl['т']='t';
                transl['у']='u';
                transl['ф']='f';
                transl['х']='kx';
                transl['ц']='ts';
                transl['ч']='ch';
                transl['ш']='sh';
                transl['щ']='shсh';
                transl['ъ']='"';
                transl['ы']='y\'';
                transl['ь']='\'';
                transl['э']='e\'';
                transl['ю']='yu';
                transl['я']='ya';

                var result=''; // строка возврата
            	var kk=''; // переменная счетчик буквы в слове
            	kk=0; 
            	var backsymbol=''; // переменная прдыдущей буквы. Устанавливается значение при условии Е И О 
            	var currentsymbol=''; // текущий символ
            	text=text.toLowerCase(); // преобразование строки во все буквы строчные (маленькие) :))
            		switch (text.charAt(0)) {
						case 'е':
						result=result+"ye" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'и':
						result=result+"i" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'о':
						result=result+"o" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
						break; }
					           			
				text=text.toLowerCase();  // преобразование строки во все буквы строчные (маленькие) :))
            	for(i=kk;i<text.length;i++) // перебор всех букв
            		{
            			currentsymbol=text.charAt(i); // присваивание переменной значение текущего символа
            			if (currentsymbol=='е') { // начало цикла для "e"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'а' : case 'о' : case 'ю' : case 'у' :case 'э' :case 'е' :case 'ы' :case 'я' : case 'ь' :case 'ъ' : case 'и' : // тут перечисляем все условия для буквы Е (гласные + ь, ъ)
											currentsymbol='ye'; // если 'е' стоит после гласных и ь ъ то выводится 'ye'
											result+=currentsymbol;
									break;
									default:
										result+='e';} //
								}			
						else if (currentsymbol=='и') { // начало цикла для "и"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы И ( ь, ъ)
											currentsymbol='ie'; // если 'И' стоит после ь ъ то выводится 'ie'
											result+=currentsymbol;
									break;
										default:
										result+='i'; }
								}			
						else if (currentsymbol=='о') { // начало цикла для "о"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы О ( ь, ъ)
											currentsymbol='yo'; // если 'О' стоит после ь ъ то выводится 'yo'
											result+=currentsymbol;
									break;
										default:
										result+='o'; }
								}			
						
						else {
            					if(transl[text[i]]!=undefined) // если это не Е И О то выводится буква соответствующая массиву
            						result+=transl[text[i]]; 
            					else { result+=text[i]; }
							}
            			
            			
                } // конец перебора всех букв
            	result=result.toUpperCase(); // преобразование строки во все буквы прописные
            if (result!='') {
                document.getElementById('transtextp').innerHTML=result;
                document.getElementById('hid').style.display='';
            } 
			
        } // Проверка checkForm
        else document.getElementById('transtextp').innerHTML='Заполните одно из полей!';
                document.getElementById('hid').style.display='';
};