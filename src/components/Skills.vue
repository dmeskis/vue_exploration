<template>
  <div class="hello">
    {{ name }}
    {{ btnState ? 'The button is disabled' : 'The button is enabled' }}

    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      name: 'Dylan Meskis',
      btnState: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
