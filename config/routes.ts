// import {defineConfig} from 'umi'
// export default defineConfig({
  export  const routes = [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user',
          routes: [
            {
              name: 'login',
              path: '/user/login',
              component: './User/login',
            },
          ],
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './TableList',
    },
    {
      name: 'list.use-table-list',
      icon: 'table',
      path: '/uselist',
      component: './MyTableList',
    },
    {
      name:'list.use-form-list',
      icon:'table',
      path:'/formtest',
      component: './DemoForm'
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ]
// })
