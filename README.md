# project_api_nodejs_express
Proyecto nodejs, express, sequelize, register, login,jwt, winddleware
/*********************************************/ rutas */**********************************************/

- crear un archivo .env y  crear las variable de entorno
- crear la base de datos
  
	LA API se trabajo con las siguientes dependencias
"dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "pg": "^8.11.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.32.1"
  },

y con nodemon instalado en devDevenpendies
 "devDependencies": {
    "nodemon": "^3.0.1"
  }
comando iniciar el proyecto =>  npm run dev


//  api users	
REGISTER USER 		POST	: http://localhost:3000/api/register
LOGIN USER		POST	: http://localhost:3000/api/login
GET USERS 		GET	: http://localhost:3000/api/users
GET USER		GET	: http://localhost:3000/api/users/:id
UPDATE USER		UPDATE	: http://localhost:3000/api/users/:id
DELETE USER		DELETE	: http://localhost:3000/api/users/:id

// Crear una API para poder ver de un usuarios enviado por parámetro todas las categorías y productos que el ha creado.

GET USER_CATEGORIES_PRODUCTS    GET 	: http://localhost:3000/api/users/1/categories/1/products 




//   api categories con middleware

GET CATEGORIES		GET	: http://localhost:3000/api/categories
GET CATEGORY_ID  	GET	: http://localhost:3000/api/categories/:id
POST CATEGORY		POST	: http://localhost:3000/api/categories
UPDATE CATEGORY	UPDATE	: http://localhost:3000/api/categories/:id
DELETE CATEGORY	 	DELETE	: http://localhost:3000/api/categories/:id




// api products con middleware
GET PRODUCTS		GET	: http://localhost:3000/api/products
GET PRODUCT_ID		GET	: http://localhost:3000/api/products/:id
POST PRODUCT 		POST	: http://localhost:3000/api/products
UPDATE PRODUCT	 	UPDATE	: http://localhost:3000/api/products/:id
DELETE PRODUCT		DELETE	: http://localhost:3000/api/products/:id



