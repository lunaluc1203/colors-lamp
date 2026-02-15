# 🎨 COLORS LAMP Application

## Overview

The COLORS LAMP Application is a full-stack web application built using the LAMP stack (Linux, Apache, MySQL, PHP). It allows users to log in and manage color entries stored in a MySQL database hosted on a DigitalOcean Ubuntu droplet.

This project demonstrates:

- Backend API development using PHP
- MySQL database creation and management
- Frontend integration using HTML, CSS, and JavaScript
- Deployment to a remote Linux server
- Version control best practices using Git

---

## Technologies Used

- Linux (Ubuntu Droplet on DigitalOcean)
- Apache Web Server
- MySQL Database
- PHP (Backend API Endpoints)
- JavaScript (Client-side logic)
- HTML5 & CSS3
- MD5 Password Hashing
- Git & GitHub

---

## Project Structure

```
colors-lamp/
│
├── api/
│   ├── AddColor.php
│   ├── Login.php
│   └── SearchColors.php
│
├── public/
│   ├── index.html
│   ├── color.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── code.js
│   │   └── md5.js
│   └── images/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Database Setup

### Create Database

```
CREATE DATABASE COP4331;
USE COP4331;
```

### Create Tables

```
CREATE TABLE Users (
  ID INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Login VARCHAR(50) NOT NULL,
  Password VARCHAR(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Colors (
  ID INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(50) NOT NULL,
  UserID INT NOT NULL,
  PRIMARY KEY (ID)
);
```

### Create Database User

```
CREATE USER 'DB_USERNAME' IDENTIFIED BY 'DB_PASSWORD';
GRANT ALL PRIVILEGES ON COP4331.* TO 'DB_USERNAME'@'%';
FLUSH PRIVILEGES;
```

---

## Backend Configuration

Inside each PHP API file, update the database connection:

```
$conn = new mysqli("localhost", "DB_USERNAME", "DB_PASSWORD", "COP4331");
```

Replace `DB_USERNAME` and `DB_PASSWORD` with your MySQL credentials.

Database credentials are intentionally not included in this repository.

---

## API Endpoints

- /api/Login.php — Authenticates a user  
- /api/AddColor.php — Adds a new color entry  
- /api/SearchColors.php — Searches colors by user  

All requests should use:

Content-Type: application/json

Test using Postman, CURL, ARC, or Swagger.

---

## Deployment (DigitalOcean LAMP)

1. Create a LAMP Ubuntu droplet on DigitalOcean.
2. SSH into the droplet.
3. Navigate to:

```
/var/www/html
```

4. Upload:
   - API files → /var/www/html/LAMPAPI
   - Frontend files → /var/www/html
5. Configure the MySQL database and user.
6. Point your domain DNS A record to your droplet IP address.
7. Test endpoints using Postman or CURL.

---

## Running the Application

After deployment:

1. Open your browser.
2. Navigate to your domain or droplet IP address:
   http://your-domain.com
3. The login page will load.
4. Use test credentials stored in the database to log in.

---

## Security Notes

- Passwords are hashed using MD5 before storage.
- Database credentials are not committed to version control.
- This project is for educational purposes only.
- Production-level security hardening is not implemented.

---

## Assumptions & Limitations

- Assumes a properly configured LAMP stack.
- Assumes MySQL user permissions are granted.
- No HTTPS configuration included.
- No advanced authentication or token-based session management implemented.

---

## AI Usage

Portions of this project documentation were refined with the assistance of AI tools to improve formatting and clarity. All application code was implemented and tested by the student.

---

## License

This project is licensed under the MIT License.
