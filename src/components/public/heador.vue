<template>
  <section class="header">
    <slot name="detail-left"></slot>
    <slot name="lists-left"></slot>
    <slot name="home-logo"></slot>
    <slot name="search"></slot>
    <slot name="home-menu"></slot> 
    <slot name="news"></slot>
  </section>
</template>
<script>
export default {
  name: 'heador',
  data () {
    return {
      
    }
  }
}
</script>
<style  lang="scss">
  @import "../../css/element.scss";
  $dir: "../../assets/images/home/";
 .header {
  @include flex(row);
  height: 96px;
  padding: 0 30px;
  align-items: center;
  background: #fff;
  justify-content: space-between;
  .logo {
    width: 136px;
    height: 46px;
    background: url($dir+'logo.png') no-repeat;
    background-size: contain;
  }
  .search-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 30px 0 10px;
    line-height: 56px;
    color: #999;
    font-size: 24px;
    border-radius: 28px;
    background: #f3f3f3;
  }
  .search-icon {
    @include header_icon(24px,24px);
    background: url('../../assets/images/icon-search.png') no-repeat;
    background-size: contain;
    margin-right: 10px;
  }
  .header-menu {
    position: relative;
  }
  .menu-icon {
    @include header_icon;
    background: url($dir + 'icon-msg.png') no-repeat;
    background-size: contain;
  }
  .icon-info {
    @include header_icon;
    background: url($dir + 'icon-menu.png') no-repeat;
    background-size: contain;
  } 
  .menu-list {
    position: absolute;
    top: 62px;
    right: 0px;
    width: 200px;
    background: #fff;
    border: 1px solid #ececec;
    box-sizing: border-box;
    z-index: 12;
    li {
      height: 72px;
      line-height: 72px;
      padding-left: 30px;
      color: #333;
      font-size: 24px;
      border-bottom: 1px solid #ececec;
      box-sizing: border-box;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
 }
.menu-list-enter-active, .menu-list-leave-active {
  transform-origin: 50% 0;
  transition: transform .2s;
}
.menu-list-enter, .menu-list-leave-to {
  transform-origin: 50% 0;
  transform: scaleY(0);
}
</style>