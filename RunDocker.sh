 echo https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
 
 sudo docker build -t vuejs-cookbook/dockerize-vuejs-app .


 sudo docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app