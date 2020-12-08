<template>
  <div>
    <b-table :items="items" fields="fields" striped dark></b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields:['Id','Title']
    }
  },
  computed: {
    items(){
      return this.$store.getters.items
    }
  },
}
</script>