<template>
  <section class="panel" :class="panelClass">
    <div class="panel-header">
      <slot name="panel-header-info"></slot>  
    </div>
    <div class="panel-content">
      <slot name="panel-content-info"></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    panelClass: {
      type: String,
      default: ""
    },
  },
  data () {
    return {
     
    }
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.panel {
    @include panel;
}
</style>