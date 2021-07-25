<template>
  <h3 class="title is-3 has-text-centered">Settings</h3>
  <div class="field m-3 pb-3" v-for="(setting, settingName) in settings" :key="settingName">
    <input
      :id="settingName"
      type="checkbox"
      :name="settingName"
      class="switch is-rounded"
      v-model="settings[settingName]"
    >
    <label :for="settingName">{{ translations[settingName] }}</label>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { watch } from 'vue'

export default {
  setup () {
    /**
     * Temporary hack
     * Translations should be mouved to dedicated translation tool when setup
     */
    const translations = {
      deleteEmpty: 'Delete empty tasks',
      hideDelete: 'Hide delete button',
      hideCompleted: 'Hide completed tasks'
    }

    const store = useStore()
    const settings = store.state.settings
    watch(settings, (currentValue) => {
      store.commit('updateSettings', currentValue)
    })

    return {
      settings,
      translations
    }
  }
}
</script>
