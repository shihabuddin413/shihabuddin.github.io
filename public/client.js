import axios from 'axios'

var myCodeMirror = CodeMirror.fromTextArea (document.getElementById("code"), {
			value: "def myScript():\n\treturn 'Hello World'\n",
			mode: {
				name:"python",
				version: 3,
				singleLineStringErrors:false
			},
			lineNumbers: true,
			indentUnit: 4,
			matchBrackets: true,
			// theme: 'duotone-light'
		});

saveBtn = document.querySelector('.save')

saveBtn.addEventListener('click',  (e)=>{
	e.preventDefault();
    axios({
        url : "http://localhost:3000/save",
        method : "GET",
        // params: 
        // headers: 
    }).then(response=>{
        console.log(response)   
    })
})

window.onload = function(){
	var oTextarea = document.getElementById("code");
    var oParent = oTextarea.parentNode;
    // oTextarea.style.width = (oParent.scrollWidth - 30) + "px";
    oTextarea.style.height = (oParent.scrollHeight - 30) + "px";
}


var beReposition = function(){
	scr = window.innerWidth
	FixHeight = window.innerHeight
	console.log(scr)

	if (scr <= 1020 && scr > 720){
		myCodeMirror.setSize("92%", `${FixHeight-150}px`)
	}
	
	else if (scr <= 720 && scr > 600){
		myCodeMirror.setSize("97%", `${FixHeight-130}px`)
	}
	else if(scr <= 600){
		myCodeMirror.setSize("98%", `${FixHeight-120}px`)
	}
	else{
		myCodeMirror.setSize("80%", `${FixHeight-300}px`)
	}
}


window.onresize=function (){
	console.log('Got onresize')
	beReposition();
}

beReposition();