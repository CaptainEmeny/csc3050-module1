# How To Run

## Server

To run the server, run the following commands first:
```
cd "Module 3"
cd server
npm install express
```

Lastly to run the server, type:

```
node server.js
```

### Testing with Vitest

With your directory still within *server*, run 

```
npm install -D vitest   
```
then within the *scripts* of **package.json** add

```
"test": "vitest"
```

Now your folder named **tests** should be able to run any file with the extention ***test.js*** 


## Client

To run the client, go to the terminal and type:

```
cd "Module 3"
cd recipe-book
npm install react-router-dom
```

To run the site, type:
```
npm run dev
```

## NOTE: To run some of these commands, you will need NodeJS installed on your client
