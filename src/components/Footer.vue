<template>
  <footer>
    <div class="copyright">
      Copyright 2022, Danica Jakovljević i Petar Jovović, Odsek za softversko
      inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #00c853;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: rgba(0, 0, 0, 0.55);
}
.copyright {
  padding: 0.5rem;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>