<template>
  <b-container>
    <Header class="mt-3"/>
    <to-do-list/>
    <router-link to="" id="addBtn" class="d-flex btn-success" variant="success" tag="b-button">
      Add
    </router-link>
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

<style scoped>
#addBtn{
  font-weight: 600;
}
</style>