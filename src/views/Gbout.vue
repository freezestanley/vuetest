<template>
  <div class="about">
    <h1>Gbout</h1>
    <button v-on:click="greet">Greet</button>
  </div>
</template>

<script>
export default {
  name: 'Gbout',
  data: function (){
    return {
      name: 'Vue.js'
    }
  },
  props: {
    msg: String
  },
  methods: {
    greet: () => {
      this.$router.push('/the')
      alert('Hello!')
    }
  }
}
</script>