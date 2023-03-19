# Gophers App

Note list application with Go, React, and other technologies

## 📜 System Requirement

- Node.js `14.20.0` or later [👉 Install Node](https://nodejs.org/es/download)
- Yarn. [👉 Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- Go. [👉 Install Go](https://go.dev/doc/install)

## 😎 Getting Started

**1** - First, install dependencies. Go to path `notes-app/` an run

```bash
yarn install
```

**2** - Then you can run the server. Go to the path `/` where is `main.go` file and run

```bash
go run main.go
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result of server **API**.

**3** - Running the frontend. Return in another terminal and go to path `notes-app/` an run

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) or [http://127.0.0.1:5173/](http://127.0.0.1:5173/) with your browser to see the result of the **UI**.

## 👨‍💻 Setup

### Visual Studio Code

**Extensions aditionals**

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor. archive base `notes-app/.eslintrc.json`
- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) help with go syntax and other functions
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) if you want to test the API with Visual Studio Code, you can use this extension to execute the `request/` files

## 📚 Folder structure

- `notes-app/`: Source code base. Frontend made with **ReactJS**
- `request/`: Examples to test the API and EndPoints
- `assets/`: Contains resources, diagrams
- `main.go`: API REST file made with Go. This execute the server
- `go.mod`: File with the other packages require to build the server
