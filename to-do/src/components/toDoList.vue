<template>
  <div>
    <b-table :items="items" :fields="fields" striped dark>
      <template  #cell(delete)="items">
        <b-button class="mr-2" variant="outline-danger" @click="del(items.item.id)">
          Delete Item 
        </b-button>
      </template>
      <template #cell(details)="items">
        <b-button variant="outline-primary" @click="show(items.item.id)">
          show details 
        </b-button>
      </template>
    </b-table>
    <b-button id="addBtn" class="d-flex" variant="outline-success">
      Add
    </b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields:[
        {key: 'id', label: 'Id' },
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
      console.log(id);
    }
  },
}
</script>

<style scoped>
#addBtn{
  font-weight: 600;
  border-width: 2px;
}
</style>>