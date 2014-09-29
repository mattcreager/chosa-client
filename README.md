# DreamForce Plays Heroku

This is the client-side component of the yet to be named gamified Heroku DreamForce experience.

### The improbably correct installation manual

#### The Dependency Short List

-  `$ npm install -g gulp`
-  `$ npm install -g bower`

#### Install Bits & Bobs

-  `$ bower install`
-  `$ npm install`

#### The Finale

-  `$ gulp`

Yup, this task does it all right now.  Reactify, Build, Watch and all that good gulp stuff.  End of story, the page should live-reload, and/or notify you if you screw up. The only time you'll need to restart is if you add a file.

If you get an error `emfile` error, enter this:

-  `$ ulimit -a`


Send me the result, and we'll get you sorted.

[ ![Codeship Status for mattcreager/chosa-app](https://www.codeship.io/projects/08f84a30-2483-0132-93e6-7624bba0d230/status)](https://www.codeship.io/projects/36887)
