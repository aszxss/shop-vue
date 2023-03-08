<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/listContainer/listContainer.vue'
import Recommend from '@/pages/Home/Recommend/recommend.vue'
import Rank from '@/pages/Home/rank/Rank.vue'
import Like from '@/pages/Home/Like/like.vue'
import Floor from '@/pages/Home/floor/floor.vue'
import Brand from '@/pages/Home/brand/brand.vue'
export default {
   name:'',

 components:{
  ListContainer,
  Recommend,
  Rank,
  Like,
  Floor,
  Brand
 }

}
</script>

<style>

</style>