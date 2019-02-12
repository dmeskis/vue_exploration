<template>
  <div class="directives page">
    <div class='holder'>

      <form @submit.prevent="addName">
        <input type="text" placeholder="Enter your name" v-model="username" v-validate="'min:3'" name="username">

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('username')">{{ errors.first('username') }}</p>
        </transition>
      </form>
        
      <template v-if="verifiedName.length > 0">

        <h1>{{verifiedName}}, nice to meet you. Tell me, how old are you?</h1>

        <form @submit.prevent="addAge">
          <input type="text" placeholder="Enter your age" v-model="age" v-validate="'min_value:5'" name="age">

          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('age')">{{ errors.first('age') }}</p>
          </transition>
        </form>

      </template>

      <template v-if="verifiedAge">
        <h1 v-if="verifiedAge > 30">Wow, you're {{verifiedAge}}?? Running outta time buddy.</h1>
        <h1 v-else>Hmm, {{verifiedAge}} years old? You're a young'n</h1>
      </template>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Directives',
  data () {
    return {
      age: '',
      username: '',
      verifiedName: '',
      verifiedAge: ''
    }
  },
  methods: {
    addName () {
        this.$validator.validateAll().then((result) => {
        if (result) {
          this.verifiedName = this.username
        } else {
          console.log('Not valid')
        }
      })
    },
    addAge () {
        this.$validator.validateAll().then((result) => {
        if (result) {
          this.verifiedAge = this.age
        } else {
          console.log('Not valid')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
