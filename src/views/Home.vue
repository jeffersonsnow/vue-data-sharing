<template>
  <div class="home">
    <GrandpaComponent></GrandpaComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import GrandpaComponent from "@/components/GrandpaComponent";
export default {
  name: "home",
  components: {
    GrandpaComponent
  }
};
</script>
<style scoped>
.home {
  background: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
