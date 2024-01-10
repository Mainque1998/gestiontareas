## Docker
Para ejecutar la app se debe tener instalado Docker Desktop, y ejecutar en el directorio raíz el comando

```bash
$ docker-compose up
```
De esta forma se levantan los contenedores de la base de datos, el backend y el frontend, los cuales corren en los puertos 3000 y 4200 respectivamente.

## Error en contenedor de Front End
Actualmente el contenedor del front end no esta funcionando correctamente, por lo que no se puede acceder a la app desde el puerto 4200.
Por el momento, puede probrarse levantando el servidor de Angular localmente,
Para esto, se deben instalar las dependencias ejecutando el siguiente comando en el directorio frontend

```bash
$ npm install
```

Teniendo los contenedores levantados y las dependencias del front end instaladas, se puede levantar el servidor frontend ejecutando el siguiente comando en el mismo directorio
(usando un puerto diferente ya que el 4200 estaría ocupado por el contenedor)

```bash
$ ng serve --open
```

Así podemos usar la aplicación desde un servidor frontend local que se comunica con un contenedor docker. Este contenedor tiene el servidor backend junto a la base de datos.
En cuanto al contenedor frontend debería funcionar dentro del mismo docker, por lo que al solucionarse el error no será necesario levantar el servidor.

