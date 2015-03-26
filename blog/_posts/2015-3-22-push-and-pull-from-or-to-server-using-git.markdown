---
layout: post
title: "Git push & pull from or to server."
date: 2015-03-22
categories: git development
---
Finally starting my first tutorial! (dirty dirty tutorial aka STILL WORKING ON
IT)

At [HackWare][hackware-site], I have been developing our site by SSH'ing to
our server and editing from there. I started to notice it was very
inefficient and could cause some major problems; for example, deletion of one 
of our files. Therefore, I thought of using git to develop locally, push to 
the hackware.io server, and automatically update the live site. Also, I need
to make it easier for my team to push and pull the site's live code too. Thus, 
I created this tutorial mainly to help them. This also eliminates permission 
struggles in our server.

#Quick run through for my team

1. To get a copy of the site. 
      - git clone git@hackware.io:site.git
2. Edit whatever you want from that copy
3. Check if something has been changed in the copy you cloned to your local
   machine.
      - git status
4. If you edited/add something in that folder you should see the files. Thus,
   you add and commit in order to push the changes.
      - git add .  (which add all files changed)
      - git commit -m 'comment of what changed in present tense'
5. We need to check if you have the correct remote server where you want to
   push your changes into.
      - git remote show
        - This will show all the remote servers you have in this folder
      - git remote show origin
        - origin is usually what you have if you have cloned a repo
        - this command should tell you the link to where you are going to push if
          you use origin.
6. We PUSH, PUSH
      - git push origin master
        - master (it can be named anything) but it is a branch that you want to
          push to the remote server named origin.
7. Check what you pushed.
      - git log


[hackware-site]: https://hackware.io

