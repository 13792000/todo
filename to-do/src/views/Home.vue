<template>
  <b-container>
    <Header class="mt-3"/>
    <to-do-list/>
  </b-container>
</template>

<script>
import Header from '../components/header.vue'
import toDoList from '../components/toDoList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    toDoList
  }
}
</script>
