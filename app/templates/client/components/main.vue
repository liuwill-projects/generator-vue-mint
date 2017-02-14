<template>
    <div class="h5-main">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <i class="fa fa-comment" aria-hidden="true"></i>
          tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <i class="fa fa-users" aria-hidden="true"></i>
          tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <i class="fa fa-compass" aria-hidden="true"></i>
          tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          tab4
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>

  /*import { Toast } from 'mint-ui';
  import { Header } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { Loadmore } from 'mint-ui';
  import moment from "moment";
  import { Popup } from 'mint-ui';
  */

  export default {
    data() {

      return {
        selected:'tab1'
      };
    },
    created(){
    },
    mounted() {
      
    },
    methods: {
      
    }
  };
</script>

<style scoped>

</style>
