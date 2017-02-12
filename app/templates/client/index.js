import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

import Main from './components/main.vue'

new Vue({
  el: '#app',
  data: {
    input: '# hello'
  },
  render: h => {
    return h(Main,{
    props: {
        me: {},
        appData: [],
    }
    })
  },
  computed: {
    compiledMarkdown: function () {
      return this.input;
    }
  },
  methods: {
    update(){
        return this.input;
    }
  }
})