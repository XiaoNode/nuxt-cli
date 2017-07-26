<template>
  <section class="container">
    <div> 
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        a page
      </h2>
      <div class="links"> 
        <router-link to="/" class="button--grey">go index page</router-link>
        <router-link to="/b" class="button--grey">go b page</router-link>
        <p id="pp">sdfsdf</p>
        <button @click="funa">pp</button>
      </div>
      <div class="outer">
        <div class="inter">
          hhh
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue' 

export default {
  components: {
    Logo
  },
  head: {
    title: 'a title',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  methods: {
    funa() {
      alert($('#pp').text());
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
.outer{
  background: green;
  .inter{
    background: red
  }
}
</style>
