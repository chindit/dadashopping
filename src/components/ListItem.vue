<template>
  <div class="item-line m-3 pb-3">
    <label class="checkbox is-size-3" v-if="!selected">
      <input type="checkbox" class="is-zoomed" :checked="entry.done" :disabled="entry.done">
      <span class="pl-5" :class="{'is-done': entry.done}" >
        {{ entry.name }}
      </span>
    </label>
    <div class="columns is-mobile" v-else>
      <div class="column is-narrow">
        <input type="checkbox" class="is-zoomed" :checked="entry.done" disabled="disabled">
      </div>
      <div class="column">
        <input type="text" class="input" ref="editInput" v-model="currentText" @keypress.enter="update" @blur="update" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: false
    }
  },
  emits: ['updated'],
  setup (props) {
    const editInput = ref(null)

    onMounted(() => {
      // Autofocus on creation
      if (props.selected) {
        editInput.value.focus()
      }
    })

    return {
      entry: props.item,
      currentText: props.item.name,
      editInput
    }
  },
  methods: {
    update () {
      this.$emit('updated', this.currentText)
    }
  }
}
</script>

<style lang="sass" scoped>
.item-line
  border-bottom: 1px solid lightgray
.is-done
  text-decoration: line-through
.is-zoomed
  zoom: 2
</style>
