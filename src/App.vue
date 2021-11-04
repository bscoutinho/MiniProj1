<template>
  <div id="nav">
    <router-link to="/">Principal</router-link> |
    <router-link :to="{ name: 'Who' }">Quem sou eu?</router-link> |
    <router-link :to="{ name: 'What' }">O que faço?</router-link> |
    <router-link :to="{ name: 'Hobbies' }">Hobbies</router-link>
  </div>
  <router-view/>
  <footer id="footer">
    <h3>Minhas redes:</h3>
    <div class="socialpanel">
      <a href="www.google.com"><img src="./assets/github.png" class="socialmedia" alt="github" title="Github"></a>
      <a href="www.google.com"><img src="./assets/linkedin.png" class="socialmedia" alt="linkedin" title="Linkedin"></a>
      <a href="www.google.com"><img src="./assets/udemy.png" class="socialmedia" alt="linkedin" title="Udemy"></a>
      <a href="www.google.com"><img src="./assets/web.png" class="socialmedia" alt="site" title="Site"></a>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(209, 209, 209);
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #900000;
}

#footer { 
  position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    background-color: rgb(0, 0, 0, 0.5);
}

.socialmedia { 
  max-height: 50px;
  margin: 0px 10px
}

.socialpanel { 
  margin-bottom: 10px;
}
</style>
