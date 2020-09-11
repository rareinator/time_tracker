<template>
  <div class="navbar">
    <div class="logo">
    </div>
    <div class="links">
      <router-link class="link" to="/">index</router-link>
      <router-link class="link" to="/calender">Calender</router-link>
    </div>
    <div class="actions">
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #393939
}

.logo {
  flex: 2;
}

.links {
  flex: 1;
  display: flex;
  align-items: center;
}

.link {
  flex: 1;
  color: white;
  font-size: 20;
}

.actions {
  flex: 2;
}

</style>