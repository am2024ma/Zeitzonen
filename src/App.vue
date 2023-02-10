<script setup>
import DigitalClock from "./components/DigitalClock.vue"
</script>

<template>
 
  <DigitalClock  tz="Europe/Berlin"  location="Berlin" />
  <DigitalClock  tz="America/New_York"  location="New York" />
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
</style>
