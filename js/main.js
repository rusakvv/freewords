document.getElementById('hid').style.display='none';

function checkForm() {
    if (document.getElementById('text').value!='' || document.getElementById('digital').value!='' || document.getElementById('dating').value!='') 
        return true;
    else return false;
};


function translateEN(){
        if (checkForm()==true) {  //проверка Chekform перед выполнением функции
            var text=document.getElementById('text').value;
            var transl=new Array();
                transl['А']='A';     transl['а']='a';
                transl['Б']='B';     transl['б']='b';
                transl['В']='V';     transl['в']='v';
                transl['Г']='G';     transl['г']='g';
                transl['Д']='D';     transl['д']='d';
                transl['Е']='E';     transl['е']='e';
                transl['Ё']='Yo';    transl['ё']='yo';
                transl['Ж']='Zh';    transl['ж']='zh';
                transl['З']='Z';     transl['з']='z';
                transl['И']='I';     transl['и']='i';
                transl['Й']='Y';     transl['й']='y';
                transl['К']='K';     transl['к']='k';
                transl['Л']='L';     transl['л']='l';
                transl['М']='M';     transl['м']='m';
                transl['Н']='N';     transl['н']='n';
                transl['О']='O';     transl['о']='o';
                transl['П']='P';     transl['п']='p';
                transl['Р']='R';     transl['р']='r';
                transl['С']='S';     transl['с']='s';
                transl['Т']='T';     transl['т']='t';
                transl['У']='U';     transl['у']='u';
                transl['Ф']='F';     transl['ф']='f';
                transl['Х']='KX';     transl['х']='kx';
                transl['Ц']='TS';     transl['ц']='ts';
                transl['Ч']='Ch';    transl['ч']='ch';
                transl['Ш']='Sh';    transl['ш']='sh';
                transl['Щ']='SHCH';   transl['щ']='shсh';
                transl['Ъ']='"';     transl['ъ']='"';
                transl['Ы']='Y\'';   transl['ы']='y\'';
                transl['Ь']='\'';    transl['ь']='\'';
                transl['Э']='E\'';   transl['э']='e\'';
                transl['Ю']='Yu';    transl['ю']='yu';
                transl['Я']='Ya';    transl['я']='ya';

                var result=''; // строка возврата
            	var kk='';
            	kk=0;
            	var backsymbol=''; // переменная прдыдущей буквы. Устанавливается значение при условии Е И О 
            	var lt=''	;
            	var currentsymbol='';
            	lt=text.charAt(0); // проверка значения первой буквы Е или И
            		if (lt=='Е') {
            			result=result+"Ye" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            			lt='';}
            			

            	for(i=kk;i<text.length;i++) // перебор всех букв
            		{
            			currentsymbol=text.charAt(i); // присваивание переменной значение текущего символа
            			if (currentsymbol=='е') { // начало цикла для "e"
            				backsymbol=text.charAt(i-1); // считывается 
            					switch (backsymbol){
            						case 'а' : case 'о' : case 'ю' : case 'у' :case 'э' :case 'е' :case 'ы' :case 'я' : case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы Е (гласные + ь, ъ)
            							currentsymbol='ye'; // если 'е' стоит после гласных и ь ъ то выводится 'ye'
            					break;}
            						result+=currentsymbol; //
            				}			
            			else {
            					if(transl[text[i]]!=undefined) 
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