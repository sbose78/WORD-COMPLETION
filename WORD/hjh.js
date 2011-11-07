

function count_words()
{
	alert(dict_words.length);
}

function getSuggestions(word)
{
	var suggested_words=new Array();
	var i=0,j=0;
	for(i=0;i<dict_words.length;i++)
	{
		var str=dict_words[i];
		if(word.toLowerCase().indexOf(str.toLowerCase()) == 0)
		{	
			suggested_words[i]=str;
		}		
	
	}
	return suggested_words;
	
	
}