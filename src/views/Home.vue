<template>
  <h3 class="is-size-3 has-text-centered">Ma liste</h3>
  <ListItem
    v-for="item in activeList"
    :item="item"
    :key="item.id"
    :selected="selectedItem === item.id"
    @dblclick="select(item.id)"
    @switched="switchState(item.id)"
    @updated="update($event, item.id)"
    @deleted="remove(item.id)"
  />
  <button id="add-button" class="is-clickable button is-rounded" @click="add">
    <font-awesome-icon icon="plus" />
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ListItem from '@/components/ListItem'
import { v4 as uuid } from 'uuid'

export default {
  name: 'Home',
  components: { ListItem },
  data () {
    return {
      selectedItem: null
    }
  },
  setup () {
    const store = useStore()

    return {
      activeList: computed(() => store.state.list),
      store
    }
  },
  methods: {
    select (id) {
      this.selectedItem = id
    },
    update (text, id) {
      this.selectedItem = null
      this.store.commit('updateText', { id: id, text: text })
    },
    add () {
      const id = uuid()
      this.store.commit('addEntry', {
        id: id,
        name: '',
        selected: false
      })
      this.selectedItem = id
    },
    switchState (id) {
      console.log('called switch')
      this.store.commit('switchState', { id: id })
    },
    remove (id) {
      console.log('called remove')
      this.selectedItem = null
      this.store.commit('remove', { id: id })
    }
  }
}
</script>

<style lang="sass">
#add-button
  position: fixed
  right: 5vw
  top: 75vh
  background-color: lightgreen
  color: green
  width: 60px
  font-size: xx-large
</style>
