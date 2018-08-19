# Web-start
## Essential web files to start a new project:
1. **HTML5**
2. **CSS3**
3. **JAVASCRIPT**

### Adding index.html 
**METATAG** 
> They're at the top of every page in the header and are therefore the first thing seen; stick to the core minimum. Don't add meta tags you don't need — they just take up code space. The less code you have, the better. Think of your page code as a set of step-by-step directions to get somewhere, but for a browser.
>_Kate Morris April 13th, 2017_

These are the meta tags that should be on every page:

- **Meta content type** – This tag is necessary to declare your character set for the page and should be present on every page.
```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
```
- **Title** – While the title tag doesn’t start with "meta," it is in the header and contains information that's very important to SEO. You should always have a unique title tag on every page that describes the page.

- **Meta description** - The infamous meta description tag is used for one major purpose: to describe the page to searchers as they read through the SERPs. This tag doesn't influence ranking, but it's very important regardless. It's the ad copy that will determine if users click on your result. Keep it within 160 characters, and write it to catch the user's attention. Sell the page — get them to click on the result.

- **Viewport** – In this mobile world, you should be specifying the viewport. If you don’t, you run the risk of having a poor mobile experience — the Google PageSpeed Insights Tool will tell you more about it. The standard tag is:
```
<meta name=viewport content="width=device-width, initial-scale=1">
```

### Adding style.css 
- **RESET CSS**
One of the pioneers of the CSS Reset method, _Eric Meyer_, created a Reset stylesheet that is still in use on millions of websites today.

### Adding app.js
- **JavaScript** ("JS" for short) is a full-fledged dynamic programming language that, when applied to an HTML document, can provide dynamic interactivity on websites. It was invented by _Brendan Eich_, co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.

#### **Creating our first js file =>** 
1. First, go to your test site and create a new folder named 'scripts' (without the quotes). Then, within the new scripts folder you just created, create a new file called app.js 
Save it in your scripts folder.
2. Next, in your index.html file enter the following element on a new line just before the closing </body> tag:
```
<script src="scripts/main.js"></script>
```
This is basically doing the same job as the <link> element for CSS — it applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).
3. Now add the following code to the main.js file:
```
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```
4. Finally, make sure the HTML and JavaScript files are saved, then load index.html in the browser.

#### **(What's happened?)**
Your heading text has now been changed to "Hello world!" using JavaScript. You did this by first using a function called querySelector() to grab a reference to your heading, and store it in a variable called myHeading. This is very similar to what we did using CSS selectors. When wanting to do something to an element, you first need to select it.

After that, you set the value of the myHeading variable's textContent property (which represents the content of the heading) to "Hello world!".

### NPM
- NPM is package manager and it was created for developer to share js code that they have written.

In the npm website you can search all the packages that are located in the npm Registry and this registry keeps track of files that have been subitted: they contains two things => js file and package.json file

The packege.json is a metafile that describes this package.

npm init -> create package.json file

- **live-server**
https://www.npmjs.com/package/live-server

- **Lodash**
A modern JavaScript utility library delivering modularity, performance & extras

### GIT
**Tips** 
- How can I delete a file from git repo?
1. Use ```git rm```
```
git rm file1.txt
git commit -m "remove file1.txt"
```
But if you want to remove the file only from the Git repository and not remove it from the filesystem, use:
```
git rm --cached file1.txt
git commit -m "remove file1.txt"
```
And to push changes to remote repo
```
git push origin branch_name  
```
To create a new repo, you'll use the git init command. git init is a one-time command you use during the initial setup of a new repo. Executing this command will create a new .git subdirectory in your current working directory. This will also create a new master branch. 
```
git init
```
If a project has already been set up in a central repository, the clone command is the most common way for users to obtain a local development clone.
```
git clone <repo url>
```

### GIT BRANCHES
Shows all the branches
```
git branch -a
```
Create new branch
```
git branch (branch name)
```
Create new branch (fast way)
```
git checkout -b (branch name)
```
Change branch
```
git checkout (branch name)
```
Delete a branch
```
1. Go back to the master 
2. git branch -D (branch name)
```

### Configuration & set up: git config
Once you have a remote repo setup, you will need to add a remote repo url to your local git config, and set an upstream branch for your local branches. The git remote command offers such utility.
```
git remote add <remote_name> <remote_repo_url>
```
This command will map remote repository at <remote_repo_url> to a ref in your local repo under <remote_name>. Once you have mapped the remote repo you can push local branches to it.
```
git push -u <remote_name> <local_branch_name>
```
This command will push the local repo branch under <local_branc_name> to the remote repo at <remote_name>.



### REACT <3
A JavaScript library for building user interfaces

### REDUX 
https://redux.js.org/

### P5.js Library
https://p5js.org/



