# Nodejs-MongoDBgit Initial Commit
------------------

Step 1:git init //Initialzied empty git repository

Step 2:git add .

Step 3:git commit -m "Initial Commit" 

Step 4:git branch -M main

Step 5:git remote add origin (git HTTPS URL)

    Incase error
    ------------
    Additional Step: error: remote origin already exists.

    git remote -verbose

    git remote set-url origin (git HTTPS URL)

    ------------x--------------

Step 5:git push -u origin main




Authorized git-User

git config --global user.name "username"
git config --global user.email (useremail)
  
git config --list


Git push
---------

Step 1: git status

Step 2:git commit  -m "Further Commit"

Step 3:git log -2 (last 2 git commits)

VIM 
----
:q  (get out from git log)

Step 1:git remote -v (verbose)

git push origin main
username:
password:


git pull
---------

Step 1:git init

Step 2:git pull (https url)

step 3:git status  

Step 4:git add .

Step 5:git commit -m "changes files"


git clone
----------
git clone "https//:url"