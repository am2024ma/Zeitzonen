REM https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html


 docker build -t vuejs-cookbook/dockerize-vuejs-app .


  docker run -it -p 81:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app