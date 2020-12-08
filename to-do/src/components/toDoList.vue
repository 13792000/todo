<template>
  <div>
    <b-table :items="items" :fields="fields" striped dark>
      <template  #cell(details)="items">
        <b-button class="mr-2" variant="outline-danger" @click="del(items.id)">
          Delete Item 
        </b-button>
        <b-button variant="outline-primary" @click="show(items.id)">
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
        {key: 'details'}
      ]
    }
  },
  computed: {
    items(){
      return this.$store.getters.items
    }
  },
  methods: {
    show() {
      
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