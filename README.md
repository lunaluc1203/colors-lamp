\# COLORS LAMP Application



\## Overview



The COLORS LAMP Application is a full-stack web application built using the LAMP stack (Linux, Apache, MySQL, PHP). It allows users to log in and manage color entries stored in a MySQL database hosted on a DigitalOcean Ubuntu droplet.



This project demonstrates:



\- Backend API development using PHP

\- MySQL database creation and management

\- Frontend integration using HTML, CSS, and JavaScript

\- Deployment to a remote Linux server

\- Version control best practices using Git



---



\## Technologies Used



\- Linux (Ubuntu Droplet on DigitalOcean)

\- Apache Web Server

\- MySQL Database

\- PHP (Backend API Endpoints)

\- JavaScript (Client-side logic)

\- HTML5 \& CSS3

\- MD5 Hashing (Client-side password hashing)

\- Git \& GitHub



---



\## Project Structure



colors-lamp/

│

├── api/

│ ├── AddColor.php

│ ├── Login.php

│ └── SearchColors.php

│

├── public/

│ ├── index.html

│ ├── color.html

│ ├── css/

│ │ └── styles.css

│ ├── js/

│ │ ├── code.js

│ │ └── md5.js

│ └── images/

│

├── README.md

├── LICENSE

└── .gitignore



yaml

Copy code



---



\## Database Setup



\### 1️⃣ Create the Database



```sql

CREATE DATABASE COP4331;

USE COP4331;

2️⃣ Create Tables

sql

Copy code

CREATE TABLE Users (

&nbsp; ID INT NOT NULL AUTO\_INCREMENT,

&nbsp; FirstName VARCHAR(50) NOT NULL,

&nbsp; LastName VARCHAR(50) NOT NULL,

&nbsp; Login VARCHAR(50) NOT NULL,

&nbsp; Password VARCHAR(50) NOT NULL,

&nbsp; PRIMARY KEY (ID)

);



CREATE TABLE Colors (

&nbsp; ID INT NOT NULL AUTO\_INCREMENT,

&nbsp; Name VARCHAR(50) NOT NULL,

&nbsp; UserID INT NOT NULL,

&nbsp; PRIMARY KEY (ID)

);

3️⃣ Create Database User

sql

Copy code

CREATE USER 'DB\_USERNAME' IDENTIFIED BY 'DB\_PASSWORD';

GRANT ALL PRIVILEGES ON COP4331.\* TO 'DB\_USERNAME'@'%';

FLUSH PRIVILEGES;

Backend Configuration

Inside each PHP API file, update the database connection:



php

Copy code

$conn = new mysqli("localhost", "DB\_USERNAME", "DB\_PASSWORD", "COP4331");

Replace:



DB\_USERNAME



DB\_PASSWORD



With your actual MySQL credentials.



Database credentials are intentionally not included in this repository.



API Endpoints

All API endpoints are located inside the /api directory.



Endpoint	Description

Login.php	Authenticates a user

AddColor.php	Adds a new color entry

SearchColors.php	Searches colors by user



Example Usage (POST Request with JSON Body)

bash

Copy code

/api/Login.php

/api/AddColor.php

/api/SearchColors.php

Test using:



Postman



CURL



ARC



Swagger



Content-Type: application/json



Deployment Instructions (DigitalOcean LAMP)

Create a LAMP Ubuntu droplet on DigitalOcean.



SSH into the droplet.



Navigate to:



css

Copy code

/var/www/html

Upload:



API files → /var/www/html/LAMPAPI



Frontend files → /var/www/html



Configure the MySQL database and user.



Point your domain DNS A record to your droplet IP address.



Test endpoints using Postman or CURL.



Security Notes

Passwords are hashed using MD5 before being stored.



Database credentials are not committed to version control.



This project is for educational purposes and does not include production-level security hardening.



Assumptions \& Limitations

Assumes a properly configured LAMP stack.



Assumes MySQL user permissions are granted.



No HTTPS configuration included.



No advanced authentication or token-based session management implemented.

