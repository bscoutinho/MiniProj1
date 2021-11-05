<template>
  <div class="home">
    <div class="container">
      <div class=""><h1>Bruno Coutinho</h1></div>
      <hr class="white-shadow" />
      <div>
        <h3 class="text">CURRICULUM VITAE</h3>
      </div>
    </div>
  </div>
</template>

<style>
.white-shadow {
  -webkit-box-shadow: 0px 0px 200px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 0px 200px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 200px rgba(255, 255, 255, 0.2);
}
.hs-line-6 {
  font-size: 16px;
}

.home {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
