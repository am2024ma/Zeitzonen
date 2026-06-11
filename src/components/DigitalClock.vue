<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define props with explicit types
const props = defineProps({
  tz: { type: String, required: true },
  location: { type: String, required: true }
});

// Reactive state
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
const dayOfWeek = ref('');

let timer = null;

const updateTime = () => {
  const now = new Date();
  const options = {
    timeZone: props.tz,
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, weekday: 'long'
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);

  // Update refs directly; Vue handles the DOM reactivity
  hours.value = parts.find(p => p.type === 'hour').value;
  minutes.value = parts.find(p => p.type === 'minute').value;
  seconds.value = parts.find(p => p.type === 'second').value;
  dayOfWeek.value = parts.find(p => p.type === 'weekday').value;
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="container">
    <h2>{{ location }}</h2>
    <div class="LCD">
      <div class="time-segment">{{ hours }}</div>
      <span>:</span>
      <div class="time-segment">{{ minutes }}</div>
      <span>:</span>
      <div class="time-segment">{{ seconds }}</div>
    </div>
    <div class="day-label">{{ dayOfWeek }}</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #444;
  border-radius: 15px;
  padding: 15px;
  width: 250px;
  display: inline-block;
  background: #000;
  color: #0f0; /* Classic "Matrix" or Terminal aesthetic */
}

.LCD {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-family: 'Courier New', monospace;
  font-size: 1.8rem;
  font-weight: bold;
}

.day-label {
  text-align: center;
  margin-top: 10px;
  font-family: sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>
