<template>
  <div class="loading-screen">
    <div class="spinner"></div>
  </div>
</template>

<style>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top-color: #238b09;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>