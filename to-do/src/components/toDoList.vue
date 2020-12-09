<template>
  <div>
    <b-table :items="items" :fields="fields" striped id="table">
      <template  #cell(delete)="items" >
        <b-button  variant="outline-danger" class="text-right" @click="del(items.item.id)">
          Delete Item 
        </b-button>
      </template>
      <template #cell(details)="items" >
        <b-button variant="outline-primary" class="text-right" @click="show(items.item.id)">
          show details 
        </b-button>
      </template>
    </b-table>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields:[
        {key: 'tittle', label: 'Title'},
        {key: 'details'},
        {key: 'delete'}
      ]
    }
  },
  computed: {
    items(){
      return this.$store.getters.items
    }
  },
  methods: {
    show(id) {
      console.log(id);
    },
    del(id) {
      alert('are you shore???')
      this.$store.commit('delitem', id)
    }
  },
}
</script>

<style scoped>

#table{
  background-color: #bd5e22a1;
}
</style>>