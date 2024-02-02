<script setup lang="ts">
import IconInfoCircle from './icons/IconInfoCircle.vue';

const props = defineProps<{
  label: string,
  value: string,
  footer?: string,
  showIcon?: boolean
}>();
console.log(props);
</script>

<template>
  <div class="card-info">
    <span class="info-label">
      <IconInfoCircle v-if="showIcon" class="info-circle" />
      {{ label }}:
    </span>
    <span class="info-value">
      {{ value }}
    </span>
    <span v-if="footer" class="info-footer">
      {{ footer }}
    </span>
  </div>
</template>

<style>
.card-info {
  flex: 2 1 0%;
  font-family: "Montserrat", Helvetica;
  position: relative;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  color: rgb(0, 0, 0);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 10px;
  min-width: 163px;
}

.card-info .info-label {
  display: flex;
  align-items: center;
  color: #828282;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.07px;
  white-space: nowrap;
  width: fit-content;
}

.card-info .info-footer {
  color: #828282;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.07px;
  white-space: nowrap;
  width: fit-content;
  text-transform: uppercase;
}

.card-info .info-label .info-circle {
  height: 12px;
  width: 12px;
  margin-right: 0.375rem;
  border-radius: 50%;
}

.card-info .info-value {
  color: #081f32;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
