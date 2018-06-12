<template>
<div class="search-content">
    <Panel class="search-panel" v-for="item in items">
      <template slot="panel-header-info">
        {{item.name}}
      </template>
      <template slot="panel-content-info">
        <ul class="search-list">
          <li v-for="list in item.lists">
            <router-link :to="{name: param}">
              {{ list }}
            </router-link>
          </li>
        </ul>
      </template>
    </Panel>
</div>
</template>
<script>
import Panel from "../public/panel.vue"
export default {
  components: {
    Panel
  },
  data () {
    return {
      showType: false,
      param: 'usedcarlists',
      items: [
          // {
          //   name: '历史搜索',
          //   lists: ['宝马1','宝马马','斯柯达帝','斯柯达·野帝','斯柯达·野帝','宝马','斯柯达帝']
          // },
          //{
          //  name: '热门搜索',
          //  lists: ['宝马1','宝马马','斯柯达帝','斯柯达·野帝','斯柯达·野帝','宝马','斯柯达帝']
          //},
      ]
    }
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
</style>