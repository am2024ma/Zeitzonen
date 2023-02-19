<script setup>
import DigitalClock from "./components/DigitalClock.vue"
</script>

<template>
  <DigitalClock  tz="Europe/Berlin"  location="Berlin" />
  <DigitalClock  tz="America/New_York"  location="New York" />
  <DigitalClock  tz="America/Los_Angeles"  location="Los Angeles" />
  <DigitalClock  tz="Asia/Shanghai"  location="Peking" />

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Wallpoet&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
@font-face {
  font-family: "alarm clock";
  src: url(./fonts/alarm.ttf);
}
div.container{
font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    border: 1px #000;
    margin: 20px;
    padding: 10px 20px;
    background-color: blanchedalmond;
}

div.LCD {

  text-align: center;
  margin: auto auto;
  align-items: center;

}
</style>
