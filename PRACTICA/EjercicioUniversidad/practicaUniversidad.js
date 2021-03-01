function probarEjercicio()
{
	var nombre;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;

	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDisenio;
	var contadorProgramadorasCursando;
	var contadorNoBinarios;
	var acumuladorNotasFinalizantes;
	var contadorAlumnosFinalizantes;
	var promedioFinalizantes;

	//DE PSICOLOGIA MAS VIEJO
	var nombreMasViejo;
	var sexoMasViejo;
	var edadMasViejo;

	//MEJOR ALUMNO de psicologia no binario
	var nombreMejorAlumno;
	var notaMejorAlumno;
	var estadoMejorAlumno;
	var banderaPsicologiaNoBinario;
	banderaPsicologiaNoBinario = false;

	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDisenio = 0;
	contadorProgramadorasCursando = 0;
	contadorNoBinarios = 0;


	var respuesta;
	respuesta = true;


	do
	{
		//NOMBRE
		nombre = prompt ("Ingrese el nombre");

		while (!(isNaN(nombre)))
		{
			nombre = prompt ("Error, Reingrese el nombre");
		}

		//CARRERA
		carrera = prompt ("Ingrese la carrera (programacion / psicologia / diseño grafico)");
		carrera = carrera.toLowerCase(carrera);

		while (carrera != "programacion" && carrera !="psicologia" && carrera != "diseño grafico")
		{	
			carrera = prompt ("Error, Reingrese la carrera");
			carrera = carrera.toLowerCase (carrera);

		}

		//ESTADO DE CARRERA
		estadoCarrera =prompt ("Ingrese el estado de carrera (en curso / abandonada / finalizada)");
		estadoCarrera = estadoCarrera.toLowerCase(estadoCarrera);

		while (estadoCarrera != "en curso" && estadoCarrera !="abandonada" && estadoCarrera != "finalizada")
		{	
			estadoCarrera = prompt ("Error, Reingrese el estado de carrera");
			estadoCarrera = estadoCarrera.toLowerCase(estadoCarrera);
		}

		//SEXO
		sexo = prompt ("Ingrese el sexo (femenino / masculino / nobinario)");
		sexo = sexo.toLowerCase (sexo);

		while (sexo != "femenino" && sexo !="masculino" && sexo != "nobinario")
		{	
			sexo = prompt ("Error, Reingrese el sexo");
			sexo = sexo.toLowerCase(sexo);
		}

		//EDAD
		edad = parseInt(prompt ("Ingrese la edad (debe ser mayor)"));
		
		while (!(edad > 17 && edad < 100))
		{
			edad = parseInt( prompt ("Error, Reingrese la edad"));
		}

		//NOTA
		nota = parseInt(prompt ("Ingrese la nota (entre 1 y 10)"));

		while (!(nota > 0 && nota < 11))
		{
			nota = parseInt(prompt ("Error, Reingrese la nota"));
		}
		
		
		switch (carrera) {
			case "programacion":
				contadorProgramacion++;
				if (sexo == "femenino" && estadoCarrera == "en curso")
				{
					contadorProgramadorasCursando++;
				}
				break;
			
			case "psicologia":
				contadorPsicologia++;
				if (contadorPsicologia == 1 || edad > edadMasViejo)
				{
					edadMasViejo = edad;
					sexoMasViejo = sexo;
					nombreMasViejo = nombre;
				}
				if (sexo == "nobinario")
				{
					if (banderaPsicologiaNoBinario == false || nota > notaMejorAlumno)
					{
						notaMejorAlumno = nota;
						estadoMejorAlumno = estadoCarrera;
						nombreMejorAlumno = nombre;
						banderaPsicologiaNoBinario = true;
					}
				}
				break;

			case "diseño grafico":
				contadorDisenio++;
				break;
		}

		if (sexo == "nobinario")
		{
			contadorNoBinarios++;
		}

		if (estadoCarrera == "finalizada")
		{
			contadorAlumnosFinalizantes++;
			acumuladorNotasFinalizantes = acumuladorNotasFinalizantes + nota;
		}
		
		
		
		respuesta = confirm ("Desea continuar ingresando?");
	}while (respuesta);

	if (contadorAlumnosFinalizantes != 0)
	{
		promedioFinalizantes = acumuladorNotasFinalizantes / contadorAlumnosFinalizantes;
		console.log ("promedio de notas de alumnos finalizantes: "+promedioFinalizantes);
	}
	else
	{
		console.log ("No se calculó promedio de finalizantes ya que no se ingreso ningun alumno con esa condición");
	}
	
	if (contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDisenio)
	{
		//hay mas de programacion
		alert ("Hay más alumnos de Programación");
	}
	else
	{
		if (contadorPsicologia > contadorDisenio)
		{
			//hay mas de psicologia
			alert ("Hay más alumnos de Psicologia");
		}
		else
		{
			//hay mas de diseño
			alert ("Hay más alumnos de Diseño Gráfico");
		}
	}
	//MOSTRAR TODO POR SEPARADO
	document.write ("alumnos de programacion: "+contadorProgramacion+"//  alumnos de psicologia: "+contadorPsicologia+"//  alumnos de diseño grafico: "+contadorDisenio+"// cantidad de alumnos no binario: "+
	contadorNoBinarios+"// los datos del alumno mas viejo de psicologia son: "+edadMasViejo+" "+nombreMasViejo+" "+sexoMasViejo+"//  datos del mejor alumno no binario de psicologia: "+nombreMejorAlumno+" "+
	notaMejorAlumno+" "+estadoMejorAlumno);




}














/*{
	//VARIABLES
	var continuarIngresando;
	var nombreIngresado;
	var carreraIngresada;
	var estadoCarreraIngresado;
	var sexoIngresado;
	var edadIngresada;
	var notaIngresada;

	//CONTADORES
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseño;
	var contadorMujeresProgramadoras;
	var contadorNobinarios;
	var contadorNotasFinalizados;
	var contadorFinalizados;

	//INICIALIZACIONES
	continuarIngresando = true;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDiseño = 0;
	contadorMujeresProgramadoras = 0;
	contadorNobinarios = 0;

	


	do
	{
		//NOMBRE
		do
		{
			nombreIngresado = prompt ("Ingrese el nombre");

		}while (!isNaN(nombreIngresado));


		//CARRERA
		do
		{
			carreraIngresada = prompt ("Ingrese la carrera (programacion / psicologia / diseño grafico");
			carreraIngresada = carreraIngresada.toLowerCase (carreraIngresada);

			switch (carreraIngresada) {
				case "programacion":
					contadorProgramacion++;
					break;
				case "psicologia":
					contadorPsicologia++;
					break;
				case "diseño grafico":
					contadorDiseño++;
					break;
			}

		}while (carreraIngresada != "programacion" &&  carreraIngresada != "psicologia" && carreraIngresada != "diseño grafico");


		//ESTADO DE CARRERA
		do
		{
			estadoCarreraIngresado = prompt ("Ingrese el estado de la carrera (en curso / abandono / finalizado)");
			estadoCarreraIngresado = estadoCarreraIngresado.toLowerCase (estadoCarreraIngresado);

		}while (estadoCarreraIngresado != "en curso" && estadoCarreraIngresado != "abandono" && estadoCarreraIngresado != "finalizado");


		//SEXO
		do
		{
			sexoIngresado = prompt ("Ingrese el sexo (femenino, masculino, nobinario)");
			sexoIngresado = sexoIngresado.toLowerCase (sexoIngresado);

		}while (sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "nobinario");


		//EDAD
		do
		{	
			edadIngresada = parseInt (prompt ("Ingrese su edad (18 años o más)"));

		}while (!(edadIngresada > 17 && edadIngresada < 100));


		//NOTA
		do
		{	
			notaIngresada = parseInt (prompt ("Ingrese la nota obtenida (entre 1 y 10)"));

		}while (!(notaIngresada > 0 && notaIngresada < 11));




		continuarIngresando = confirm ("Desea ingresar a otro alumno?")
	}while (continuarIngresando);





	//document.write ("nombres: "+arrayNombres+"//  carrera: "+arrayCarrera+"//  estado carrera: "+arrayEstadoCarrera+"//  sexo: "+arraySexo+"//  edad: "+arrayEdad+"//  nota: "+arrayNota);

	document.write("alumnos programacion: "+contadorProgramacion+"//  alumnos psicologia: "+contadorPsicologia+"//  alumnos diseño: "+contadorDiseño+"//  mujeres programadoras: "+contadorMujeresProgramadoras);


}*/










/*{
	//Datos del alumno
	var nombreAlumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var continuar;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseño;
	var contadorMujeresProgramadoras;
	var contadorNoBinario;
	var promedioFinalizados;
	var contadorFinalizantes;
	var acumuladorFinalizados;

	continuar = true;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDiseño = 0;
	contadorMujeresProgramadoras = 0;
	contadorNoBinario = 0;
	contadorFinalizantes = 0;
	acumuladorFinalizados = 0;

	do
	{
		do
		{
			nombreAlumno = prompt ("Ingrese su nombre");
		
		}while (!isNaN(nombreAlumno));

		do
		{
			carrera = prompt ("Ingrese la carrera (programacion / psicologia / diseño grafico");
			carrera = carrera.toLowerCase (carrera);

			switch (carrera) {
				case "programacion":
					contadorProgramacion ++;
					break;
				case "psicologia":
					contadorPsicologia ++;
					break;
				case "diseño grafico":
					contadorDiseño ++;
			}

		}while (carrera != "programacion" &&  carrera != "psicologia" && carrera != "diseño grafico");
			
		do
		{
			estadoCarrera = prompt ("Ingrese el estado de la carrera (en curso / abandono / finalizado)");
			estadoCarrera = estadoCarrera.toLowerCase (estadoCarrera);

			if (estadoCarrera == "finalizado")
			{
				contadorFinalizantes ++;

			}
		
		}while (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado");
			
		do
		{
			sexo = prompt ("Ingrese el sexo (femenino, masculino, nobinario)");
			sexo = sexo.toLowerCase (sexo);

			if (sexo == "nobinario")
			{
				contadorNoBinario ++;

			}

		}while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario");
			
		do
		{	
			edad = parseInt (prompt ("Ingrese su edad (18 años o más)"));

		}while (!(edad > 17 && edad < 100));
			
		do
		{	
			nota = parseInt (prompt ("Ingrese la nota obtenida (entre 1 y 10)"));



		}while (!(nota > 0 && nota < 11));

		if (carrera == "programacion" && sexo == "femenino")
		{
			contadorMujeresProgramadoras ++;
		}
		
		if (estadoCarrera == "finalizado")
		{
			acumuladorFinalizados = acumuladorFinalizados + acumuladorFinalizados;
		}

		


		continuar = confirm ("Desea ingresar a otro alumno?");
	}while (continuar);

	promedioFinalizados = acumuladorFinalizados / contadorFinalizantes;


	document.write ("Alumnos de programacion: "+contadorProgramacion+"/  alumnos de psicologia: "+contadorPsicologia+"/  alumnos de diseño: "+contadorDiseño+"/  mujeres programadoras: "+contadorMujeresProgramadoras+
	"/  alumnos no binario: "+contadorNoBinario+"/  promedio notas finalizantes: "+promedioFinalizados);
}*/