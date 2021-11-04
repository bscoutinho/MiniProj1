<template>
  <div class="home">
    <div class="container">
      <div class="white-shadow">
        <p>Software Architect | UI Architect | UX Specialist</p>
      </div>

      <hr class="white-shadow" />

      <div class=""><p>Bruno Coutinho</p></div>

      <div>
        <p class="text">High Quality Software focused on user experience</p>
      </div>
    </div>
  </div>
</template>

<style>
  .white-shadow{
    -webkit-box-shadow: 0px 0px 200px rgba(255, 255, 255, .2);
    -moz-box-shadow: 0px 0px 200px rgba(255, 255, 255, .2);
    box-shadow: 0px 0px 200px rgba(255, 255, 255, .2);
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
