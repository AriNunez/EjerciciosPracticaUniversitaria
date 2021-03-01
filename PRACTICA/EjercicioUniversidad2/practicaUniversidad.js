/*3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza*/

function probarEjercicio()
{
	var tipoMascota;
	var razaPerro;
	var razaGato;
	var razaPajaro;
	var razaOtro;
	var edadPerro;
	var edadGato;
	var edadPajaro;
	var edadOtro;
	var nombreMascota;

	for (i=0;i<10;i++)
	{
		tipoMascota = prompt ("Ingrese el tipo de mascota (gato / perro / pajaro / otros");
		tipoMascota = tipoMascota.toLowerCase (tipoMascota);
		while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pajaro" && tipoMascota != "otros")
		{
			tipoMascota = prompt ("Error, Reingrese el tipo de mascota (gato / perro / pajaro / otros");
			tipoMascota = tipoMascota.toLowerCase (tipoMascota);
		}

		switch (tipoMascota) 
		{
			case "gato":
				razaGato = prompt ("Ingrese la raza del gato (siames / turco / peterbald / generico)");
				razaGato = razaGato.toLowerCase(razaGato);
				while (razaGato != "siames" && razaGato != "turco" && razaGato != "peterbald" && razaGato != "generico")
				{
					razaGato = prompt ("Error, reingrese la raza del gato (siames / turco / peterbald / generico)");
					razaGato = razaGato.toLowerCase(razaGato);
				}
				
				edadGato = parseInt (prompt("Ingrese la edad del gato (entre 1 y 20)"))
				while (!(edadGato > 0 && edadGato < 21))
				{
					edadGato = parseInt (prompt("Error, reingrese la edad del gato (entre 1 y 20)"))
				}
				break;

			case "perro":
				razaPerro = prompt ("Ingrese la raza del perro (pastor / toy / callejero)");
				razaPerro = razaPerro.toLowerCase(razaPerro);
				while (razaPerro != "siames" && razaPerro != "turco" && razaPerro != "peterbald" && razaPerro != "generico")
				{
					razaPerro = prompt ("Error, reingrese la raza del perro (pastor / toy / callejero)");
					razaPerro = razaPerro.toLowerCase(razaPerro);
				}
				
				edadPerro = parseInt (prompt("Ingrese la edad del perro (entre 1 y 20)"))
				while (!(edadPerro > 0 && edadPerro < 21))
				{
					edadPerro = parseInt (prompt("Error, reingrese la edad del perro (entre 1 y 20)"))
				}
				break;

			case "pajaro":
				razaPajaro = prompt ("Ingrese la raza del pajaro (solo texto, no se permiten números)");
				while (!(isNaN(razaPajaro)))
				{
					razaPajaro = prompt ("Error, reingrese la raza del pajaro (solo texto, no se permiten números)");
				}

				edadPajaro = parseInt (prompt("Ingrese la edad del pajaro (entre 1 y 50)"))
				while (!(edadPajaro > 0 && edadPajaro < 51))
				{
					edadPajaro = parseInt (prompt("Error, reingrese la edad del pajaro (entre 1 y 50)"))
				}
				break;

			case "otros":
				razaOtro = prompt ("Ingrese la raza (solo texto, no se permiten números)");
				while (!(isNaN(razaOtro)))
				{
					razaPajaro = prompt ("Error, reingrese la raza (solo texto, no se permiten números)");
				}

				edadOtro = parseInt (prompt("Ingrese la edad (entre 1 y 100)"))
				while (!(edadOtro > 0 && edadOtro < 51))
				{
					edadOtro = parseInt (prompt("Error, reingrese la edad (entre 1 y 100)"))
				}
				break;
		}


	}

}




/*2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado


function probarEjercicio()
{
	var tipoProducto;
	var nombreProducto;
	var importeProducto;
	var procedenciaProducto;
	var pesoProducto;

	var respuesta;
	respuesta = true;

	//CONTADORES
	var contadorProductos;
	var contadorLimpieza;
	var contadorComestibles;
	var contadorOtros;
	var contadorElaborados;

	contadorProductos = 0;
	contadorLimpieza = 0;
	contadorComestibles = 0;
	contadorOtros = 0;
	contadorElaborados = 0;

	//A)
	var nombreComestibleMasPesado;
	var comestibleMasPesado;
	

	//B)
	var nombreProductoMasCaro;
	var productoMasCaro;
	

	//C)
	var nombreElaboradoMasBarato;
	var elaboradoMasBarato;

	//E)
	var porcentajeElaborados;
	//ademas del contadorElaborados

	//F)PROMEDIO POR PESOS
	var promedioLimpieza;
	var promedioComestibles;
	var promedioOtros;
	var acumuladorPesoLimpieza;
	var acumuladorPesoComestible;
	var acumuladorPesoOtros;

	acumuladorPesoLimpieza = 0;
	acumuladorPesoComestible = 0;
	acumuladorPesoOtros = 0;

	
	do
	{
		contadorProductos++;
		//TIPO DE PRODUCTO
		tipoProducto = prompt ("Ingrese el tipo de producto (limpieza / comestible / otros)");
		tipoProducto = tipoProducto.toLowerCase (tipoProducto);

		while (tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros") 
		{
			tipoProducto = prompt ("Error, reingrese el tipo de producto");
		}

		//NOMBRE
		nombreProducto = prompt ("Ingrese el nombre del producto");

		//IMPORTE DEL PRODUCTO
		importeProducto = parseInt (prompt ("Ingrese el importe del producto (no mayor a $1000)"));

		while(!(importeProducto >= 0 && importeProducto <= 1000))
		{
			importeProducto = parseInt (prompt ("Erros, reingrese el importe del producto"));
		}

		//PROCEDENCIA DEL PRODUCTO
		procedenciaProducto = prompt ("Ingrese la procedencia del producto (importado / nacional / elaborado)");
		procedenciaProducto = procedenciaProducto.toLowerCase (procedenciaProducto);

		while (procedenciaProducto != "importado" && procedenciaProducto != "nacional" && procedenciaProducto != "elaborado")
		{
			procedenciaProducto = prompt ("Error, reingrese la procedencia del producto");
			procedenciaProducto = procedenciaProducto.toLowerCase (procedenciaProducto);
		}

		//PESO
		pesoProducto = parseInt (prompt ("Ingrese el peso del producto (no mayor a 30 kilos)"));

		while (!(pesoProducto >= 0 && pesoProducto <= 30))
		{
			pesoProducto = parseInt (prompt ("Error, reingrese el peso del producto"));
		}

		switch (tipoProducto) 
		{
			case "limpieza":
				contadorLimpieza++;
				acumuladorPesoLimpieza = acumuladorPesoLimpieza + pesoProducto;
				break;
		
			case "comestible":
				contadorComestibles++;
				acumuladorPesoComestible = acumuladorPesoComestible + pesoProducto;

				if (contadorComestibles == 1 || pesoProducto > comestibleMasPesado)
				{
					comestibleMasPesado = pesoProducto;
					nombreComestibleMasPesado = nombreProducto;
				}
				break;

			case "otros":
				contadorOtros++;
				acumuladorPesoOtros = acumuladorPesoOtros + pesoProducto;
				break;
		}

		if (contadorProductos == 1 || importeProducto > productoMasCaro)
		{
			productoMasCaro = importeProducto;
			nombreProductoMasCaro = nombreProducto;
		}

		if (procedenciaProducto == "elaborado")
		{
			contadorElaborados++;

			if(contadorElaborados == 1 || importeProducto < elaboradoMasBarato)
			{
				elaboradoMasBarato = importeProducto;
				nombreElaboradoMasBarato = nombreProducto;
			}
		}

		respuesta = confirm ("¿Desea ingresar otro producto?");
	}while (respuesta);

	//SOLO MOSTRAR SI HAY
	if (contadorElaborados > 0)
	{
		porcentajeElaborados = contadorElaborados * 100 / contadorProductos;
		console.log ("El porcentaje de productos elaborados sobre el total es: "+porcentajeElaborados+"%");
		console.log ("Nombre del producto elaborado más barato: "+ nombreElaboradoMasBarato);
	}

	if(contadorLimpieza > 0)
	{	
		promedioLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
		console.log ("El peso promedio de los productos de Limpieza es: "+promedioLimpieza);
	}
		
	if (contadorComestibles > 0)
	{
		promedioComestibles = acumuladorPesoComestible / contadorComestibles;
		console.log ("El peso promedio de los productos Comestibles es: "+promedioComestibles)
		console.log ("Nombre del comestible más pesado: "+nombreComestibleMasPesado);;
	}
	
	if (contadorOtros > 0)
	{
		promedioOtros = acumuladorPesoOtros / contadorOtros;
		console.log ("El peso promedio de los productos Otros es : "+promedioOtros);
	}

	
	if (contadorProductos > 0)
	{
		console.log ("Nombre del producto más caro: "+nombreProductoMasCaro);
		
		if (contadorLimpieza > contadorComestibles && contadorLimpieza > contadorOtros)
		{
			console.log ("El tipo de mercadería que más aparece es Limpieza");
		}
		else
		{
			if (contadorComestibles > contadorOtros)
			{
				console.log ("El tipo de mercadería que más aparece es Comestibles");
			}
			else
			{
				console.log ("El tipo de mercadería que más aparece es Otros");
			}
		}
	}
		
}*/
		