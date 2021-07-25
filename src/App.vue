<template>
  <nav class="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item m-auto is-size-1" href="https://bulma.io">
        DadaShopping
      </a>
    </div>
  </nav>
  <router-view/>
  <nav class="navbar is-fixed-bottom is-flex is-size-1">
      <router-link class="navbar-item is-flex-grow-1" to="/">
        <font-awesome-icon icon="home" />
      </router-link>
      <router-link class="navbar-item is-flex-grow-1" to="/recipes">
        <font-awesome-icon icon="carrot" />
      </router-link>
      <router-link class="navbar-item is-flex-grow-1" to="/user">
        <font-awesome-icon icon="user" />
      </router-link>
      <router-link class="navbar-item is-flex-grow-1" to="/settings">
        <font-awesome-icon icon="cogs" />
      </router-link>
  </nav>
</template>

<style lang="scss">
@import '~bulma';
@import "~bulma-switch";
</style>
<script>
</script>
