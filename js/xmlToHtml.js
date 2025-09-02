function xml2html() {
	if (window.XMLHttpRequest)
	  {// codigo para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	  }
	else
	  {// codigo para IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","../datos/facturacion.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	document.write("<H1>Nuestros Clientes</H1>");
	document.write("<table border=1 style='color:red'><tr><th>Fecha</th><th>Cliente</th><th>Servicio</th><th>Valor Servicio</th></tr>");
	var x = xmlDoc.getElementsByTagName("Factura");
	for (i=0;i<x.length;i++)
	  { 
	  document.write("<tr><td>");
	  document.write(x[i].getElementsByTagName("Fecha")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("Servicio")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("ValorTotal")[0].childNodes[0].nodeValue);
	  document.write("</td></tr>");
	  }
	document.write("</table>");
}