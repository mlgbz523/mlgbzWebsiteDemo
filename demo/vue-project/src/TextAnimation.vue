<template>
    <span class="text">
      <slot></slot>
    </span>
  </template>
  
  <script>
  export default {
    name: 'TextAnimation',
  };
  </script>
  
  <style scoped>
  .text {
    font-family: 'Arial', sans-serif;
    font-size: 48px;
    color: white;
    letter-spacing: -1em; /* Initial letter spacing */
    animation: text-blend 2s ease-in-out forwards; /* Define animation */
  }
  
  @keyframes text-blend {
    0% {
      letter-spacing: -1em; /* Start state, text overlapped */
    }
    50% {
      letter-spacing: 0em; /* Middle state, text separated */
    }
    100% {
      letter-spacing: 1em;
    }
  }
  </style>