import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/Home';
import Tab1 from '@/view/Tab1';
import Tab2 from '@/view/Tab2';
import Tab3 from '@/view/Tab3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      tabBar: true,
      icon: '',
      iconCls: '',
      component: Home,
    },
    {
      path: '/tab1',
      name: 'tab1',
      tabBar: true,
      icon: '',
      iconCls: '',
      component: Tab1,
    },
    {
      path: '/tab2',
      name: 'tab2',
      tabBar: true,
      icon: '',
      iconCls: '',
      component: Tab2,
    },
    {
      path: '/tab3',
      name: 'tab3',
      tabBar: true,
      icon: '',
      iconCls: '',
      component: Tab3,
    },
  ],
});
