# Simple Portfolio

1.  **Environment Variables**: Create a `.env` file in the root of the project and add the following variables. You can use the `.env.example` file as a template.
    ```
    BURNER_USERNAME=<your-burner-email>
    BURNER_PASSWORD=<your-burner-email-password>
    PERSONAL_EMAIL=<your-personal-email>
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Build Command**: This command will install dependencies and build the Tailwind CSS.
    ```bash
    npm run build
    ```

## Running the project

To start the server in production mode, run:

```bash
npm start
```

To start the server in development mode (with live-reloading for `index.html` and automatic Tailwind CSS recompilation), run:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.
