# Deploying to GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

1.  **Create a new repository on GitHub.**
    Go to [https://github.com/new](https://github.com/new) and create a new public repository. Do not initialize it with a README, .gitignore, or license.

2.  **Add the remote origin.**
    Replace `<your-github-username>` and `<your-repository-name>` with your actual GitHub username and the name of the repository you just created. Then run the command in your terminal:
    ```bash
    git remote add origin https://github.com/<your-github-username>/<your-repository-name>.git
    ```

3.  **Push your code.**
    Run the following commands to push your code to the new repository:
    ```bash
    git branch -M main
    git push -u origin main
    ```

4.  **Enable GitHub Pages.**
    - Go to your repository on GitHub.
    - Click on the "Settings" tab.
    - In the left sidebar, click on "Pages".
    - Under "Build and deployment", for the "Source" select "Deploy from a branch".
    - Under "Build and deployment", for the "Branch" select "main" and for the folder select "/ (root)".
    - Click "Save".

Your website should be live in a few minutes at `https://<your-github-username>.github.io/<your-repository-name>/`.
