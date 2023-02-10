<script>

export default {
  name: "DigitalClock",
   timezone: String,
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timezone:""
    }
    
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },

  props: {
    tz: String,
    location: String
  },
  methods: {
    setTime() {
     // const date = new Date();
 
      
    const date = new Date(new Date().toLocaleString("en-US", {timeZone:  this.tz}))
   
    console.log("Date: "+ date);
    console.log("Location: "+ this.location);
    console.log("Timezone: "+  this.timezone);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  }
}
</script>

<template>
  <h1>Digital Clock</h1>
  <div class="container">
    <h2> {{ location }}</h2>
    <div class="LCD">
      <div class="hours">{{ hours }}</div>
      <div class="divider">:</div>
      <div class="minutes">{{ minutes }}</div>
      <div class="divider">:</div>
      <div class="seconds">{{ seconds }}</div>
    </div>
  </div>
</template>

<style scoped>
.LCD {
  display: flex;
}
.LCD > div {
  font-family: "alarm clock";
  font-size: x-large;
}
</style>
