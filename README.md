## Instalación
Para ejecutar la app localmente, primero se deben instalar las dependencias, ejecutando el siguiente comando tanto en el backend como en el frontend.

```bash
$ npm install
```
Luego se debe tener una base de datos PostgresSQL creada y conectada con los siguientes parámetros a través de app.module en el backend

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'GestorTareas',

No es necesario crear ninguna tabla ya que de eso se encarga typeorm

## Uso
Una vez instaladas las dependencias y conectada la base de datos, solo queda correr los servidores.
Primero para correr el backend

```bash
$ npm run start:dev
```

Luego para correr el frontend 

```bash
$ ng serve --open
```

Los mismos corren en `http://localhost:3000/` y `http://localhost:4200/` respectivamente.

De esta forma ya se puede usar la aplicación localmente