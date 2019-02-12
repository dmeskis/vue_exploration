<template>
  <div class='about page'>
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>Lorem ipsum asadoijf aosdjif aoisdf jaospdfj iaosdjf opaisdjfop asdjfojsad foisadjfop jsadfj asjdf aisdojf oijasdfji asdjfiop asjidof ijosdf jio</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      their_name: 'Dylan'
    }
  }
}
</script>
