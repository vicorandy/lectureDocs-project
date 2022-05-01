<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card {
  background: radial-gradient(
    89.2% 335.96% at 10.8% 23.25%,
    #121213 0%,
    rgba(53, 51, 51, 0.44) 100%
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
