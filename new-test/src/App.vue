<template>
  <div id="app">
      <div class="loop">

        <router-view></router-view>
        
        
      </div>
  </div>
</template>

<script>
//import singin from '@/components/singin'
//import personal from '@/components/personal'


export default {
  name: 'App',
  components: {
    //singin,
    //personal,
  },
  data () {
    return {
       page: [
         {
           name: "singin",
           buy_now_link: "https://www.page_cingin.com/"
         },
         {
           Name: "Product 2",
            buy_now_link: "https://www.product_2.com/",
          }
       ]
            
       
    }
  }


}
</script>

<style>

</style>
