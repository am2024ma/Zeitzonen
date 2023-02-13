
Eine Komponente zur Anzeige einer Digitaluhr in einer angegebenen
Zeitzone.

Die Komponente kann mehrfach innerhalb einer Seite eingebunden
werden, um "Uhrzeiten der Welt" anzuzeigen.

<<<<<<< HEAD
Der componente soll in diesem Weg geschrieben in App.vue 

=======
````
````
>>>>>>> ffb5047c0da0185954c9ad54d5d3ace50ba95046
````
<template>
  <DigitalClock  tz="Europe/Berlin"  location="Berlin" />
  <DigitalClock  tz="America/New_York"  location="New York" />
  <DigitalClock  tz="Asia/Shanghai"  location="Peking" />
</template>

````
 ## Ausrufen

Der Parameter "tz" ist eine Zeitzone im "Region/City" Format.

Der Parameter "location" ist die Beschriftung der Uhr.

Das Demo-Programm für die Komponente kann mit folgendem Kommando aufgerufen werden (Node v18+)
````
npm run dev
<<<<<<< HEAD
````
=======
````
````
````

und ist danach unter der angegebenen URL aufrufbar.

![image](https://user-images.githubusercontent.com/10488821/218140264-8c2b3e2d-20d7-4a0a-8ffc-095b56cd48e6.png)


>>>>>>> ffb5047c0da0185954c9ad54d5d3ace50ba95046
