	var cat1 = "A";	var cat2 = "B";	var cat3 = "C";	var cat4 = "D"; var cat5 = "E";
    var matrizTest = new Array(cat1, cat1, cat2, cat4, cat1, cat3, cat2, cat4, cat2, cat3, cat1, cat2, cat4, cat3, cat4);
		
		function comprobarRadio(matriz){
		
			var numeroRespuestasOK=0;
			var numeroRespuestasKO=0;
			var solucion = document.getElementById("solucion");
			var tablaResultados ="<table border='0'>";
			var contador =0; filas=0;
			
			for(j=0; j< matriz.length; j++){
			contador=0;
			var radios = document.getElementsByName(j+1);
				for(i=0; i< radios.length;i++){
					if (radios[i].checked){
					var valor =  radios[i].value;
						if(valor == matriz[j]) {
						tablaResultados+= "<tr><td><font color=\"#009900\">&nbsp;&nbsp;"+ (j+1) +". Respuesta correcta</td></font></tr>";
						numeroRespuestasOK++;
						break;
						}else {
						tablaResultados+= "<tr><td><font color=\"#FF0000\">&nbsp;&nbsp;"+ (j+1) +". Respuesta incorrecta</td></font></tr>";
						numeroRespuestasKO++;
						break;
						}
					} else {
						contador=contador+1;
					}
				}
//				alert(radios.length);
//				alert(contador);
				if (contador == radios.length) {
						tablaResultados+= "<tr><td><font color=\"#808080\">&nbsp;&nbsp;"+ (j+1) +". Respuesta en Blanco</td></font></tr>";
				}
			
			}
			tablaResultados+="</table>"	
			var numeroRespuestasNulas=matriz.length - (numeroRespuestasOK + numeroRespuestasKO);
			var porcentajeAcierto = Math.round(numeroRespuestasOK/matrizTest.length*100);
			tablaResultados+="<b><p style=\"margin-left:0px;\"><font color=\"#005599\" size=10>Nota: </b></font>";
			if (porcentajeAcierto == 100) {
				tablaResultados+="<b><font color=\"#CCCC00\" size=10>"+ porcentajeAcierto+" pts</b></font>&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\">";
			}
			else if (porcentajeAcierto <= 99 && porcentajeAcierto >= 80) {
				tablaResultados+="<b><font color=\"#009900\" size=10>"+ porcentajeAcierto+" pts</b></font>&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\"><img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\">";
			}
			else if (porcentajeAcierto <= 79 && porcentajeAcierto >= 60) {
				tablaResultados+="<b><font color=\"#FF8000\" size=10>"+ porcentajeAcierto+" pts</b></font>&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"img/../../../check.png\" style=\"height:3%; width: 8%;\">";
			}
			else {
				tablaResultados+="<b><font color=\"#FF0000\" size=10>"+ porcentajeAcierto+" pts</b></font>";
			}	
			
			solucion.innerHTML = tablaResultados;
	}