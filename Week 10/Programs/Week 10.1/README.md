## To get Database url

Create one at [Neon](https://neon.tech/)

## Steps to run the database locally

Step 1: Install docker [here](https://docs.docker.com/engine/install/)

**Rest of the steps are to get the postgres database running\. (To be run in the terminal)** 👇
Step 2: Pull the latest PostgreSQL Docker: `docker pull postgres`
Step 3: Verify if pulled down successfully: `docker images` 
Step 4: Create docker volume: `docker volume create 100x-postgres` 
Step 5: Verify if created successfully: `docker volume ls` 
Step 6: Create PostgreSQL container (mac/linux specific, check the path for windows): `docker run --name 100x-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v 100x-postgres:/var/lib/postgresql/data -d postgres` 
Step 7: Access PostgreSQL using psql: `docker exec -it 100x-postgres psql -U postgres`

---

8. Create a **.env** file in the root directory and add content like shown in .env.example file

> **Note**: If you are using windows, you might need to change the volume path to `C:\ProgramData\docker\volumes\100x-postgres\_data` or something similar.