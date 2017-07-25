<template>
  <section class="container">
    <div> 
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        about
      </h2>
      <div class="links"> 
        <router-link to="/" class="button--green">go index page</router-link>
        
      </div> 
      </div>
    </div>
  </section>
</template>

<script>  
export default {
  head: {
    title: 'about title',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  } 
}
</script>