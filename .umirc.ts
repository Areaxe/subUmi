import { defineConfig } from 'umi';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // plugins:['@umijs/plugin-qiankun'],
  qiankun: {
    slave: {}
  },
  fastRefresh: {},
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // },
  // publicPath: 'http://10.10.116.45:8000/'
});
