# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

open terminal and Clone the Repo

```bash
git clone https://github.com/Ahmed-Roshdy-1/vartur-fullstack-project.git

```

and navigate to project file

```bash
cd vartur-fullstack-project

```

Make sure to install the dependencies

# npm

```bash
npm install
```

and inside project froder Create a .env File
add environment variable in .env file

```bash
DATABASE_URL = "mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

create database and put the url link like this
for exaple :

```bash
DATABASE_URL = "mysql://root:PassWord231@localhost:3306/DBName"
```

add run prisma migation to create the database schema

```bash
npm run migrate
```

and finaly run the project

```bash
npm run dev
```

### Demo Video

[](assets/demo.mp4)

<video src="assets/demo.mp4" controls="controls"      style="max-width: 100%; height: auto;">
   Your browser does not support the video tag.
</video>
## Development Server

Start the development server on `http://localhost:3000`:

````bash
# npm
npm run dev


## Production

Build the application for production:

```bash
# npm
npm run build

````

Locally preview production build:

```bash
# npm
npm run preview
```
