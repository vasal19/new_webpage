# IEEE ATEITH Student Branch New page

### Copy the original repo
run `git clone https://github.com/ieee-ateith-sb/new_webpage.git` to copy the project. <br />
run `cd ./ieeewebsite` to set the project directory as the working directory. <br />
run `npm install` to install all required dependencies. <br />
run `npm start` to start the react project. <br />

## contribute
To make changes to the project you have to
- create a new local branch
- push changes to that branch
- make a pull request

run `git branch [new_branch_name]` to create a branch and `git checkout [new_branch_name]` to set it as active. <br />
**or** <br />
run `git checkout -b [new_branch_name]` to create and checkout to that branch immediately.

_make your changes_

run `git add [file_name] [file_name_2] [etc]` to add files to staging area <br/>
run `git status` to make sure all desired changes has been added correctly <br/>
run `git commit -m "[a brief description]"` to commit the changes <br/>
run `git push [own_repository_name] [branch_name]`  to push changes to your own repository <br/>
Go to github and create a new pull request.



### Copy the demo branch

run `git fetch [remote name] demo` to download the demo <br />
the remote name is the ieee-ateith-sb remote repo name. <br />
Remember that current branch has to be clean to checkout to another. See at troubleshooting how to overcome this. <br/>
run `git checkout demo` to change to the demo branch.  <br />
when you want to go back to master <br />
run `git checkout master` <br />

## Git troubleshooting

#### Not a clean branch
If you want to checkout to another branch, but the current branch is not clean. <br/>
You can `git stash` the current changes (save them). <br />
_checkout to another branch, come back to this one_
and `git stash apply` to "paste" them again.

#### Find remotes
To **list** remote repositories run `git remote -v`. <br />
To **add** a new remote repository run `git remote add [name] [link]`. <br />
To **delete** a remote repository run `git remote remove [name]`.
