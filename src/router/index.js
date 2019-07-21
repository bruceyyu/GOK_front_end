import Vue from 'vue'
import Router from 'vue-router'

import transition from '../views/transition'
import defaultPage from '../views/defaultPage'
import login from '../views/login'
import firstCome from '../views/firstCome/firstCome'
import firstCome1 from '../views/firstCome/pages/firstCome1'
import firstCome2 from '../views/firstCome/pages/firstCome2'
import firstCome3 from '../views/firstCome/pages/firstCome3'
import inclChoose from '../views/firstCome/pages/inclChoose'
import comeBack from '../views/comeBack'
import usermain from '../views/usermain'
import shootChoose from '../views/shoot/pages/shootChoose'
import identityChoose from '../views/identity/pages/identityChoose'
import skillChoose from '../views/skill/pages/skillChoose'
import statusDetail from '../views/status/pages/statusDetail'
import jobDetail from '../views/job/pages/jobDetail'
import inclinationDetail from '../views/inclination/pages/inclinationDetail'
import id_1_Detail from '../views/identity/pages/id_1_Detail'
import id_2_Detail from '../views/identity/pages/id_2_Detail'
import people from '../views/people/pages/people'
import messageDetail from '../views/message/pages/messageDetail'
import dead from '../views/dead'
import adminmain from '../AdminView/adminmain'
import adminlogin from '../AdminView/adminlogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
        {
          path: '/',
          name: 'transition',
          component: transition,
          children: [
            {
              path: '/default',
              name: 'defaultPage',
              component: defaultPage,
              children: [
                {
                  path: '/usermain',
                  name: 'usermain',
                  component: usermain
                },
                {
                  path: '/shootchoose',
                  name: 'shootChoose',
                  component: shootChoose
                },
                {
                  path: '/identitychoose',
                  name: 'identityChoose',
                  component: identityChoose
                },
                {
                  path: 'jobdetail',
                  name: 'jobDetail',
                  component: jobDetail
                },
                {
                  path: 'inclinationdetail',
                  name: 'inclinationDetail',
                  component: inclinationDetail
                },
                {
                  path: 'skillchoose',
                  name: 'skillChoose',
                  component: skillChoose
                },
                {
                  path: 'id1detail',
                  name: 'id_1_Detail',
                  component: id_1_Detail
                },
                {
                  path: 'id2detail',
                  name: 'id_2_Detail',
                  component: id_2_Detail
                },
                {
                  path: 'people',
                  name: 'people',
                  component: people
                }, 
              ]
            },
            {
              path: 'messagedetail',
              name: 'messageDetail',
              component: messageDetail
            },
            {
              path: 'statusdetail',
              name: 'statusDetail',
              component: statusDetail
            },
            {
              path: 'dead',
              name: 'dead',
              component: dead
            }
          ]
        },
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'firstCome',
          name: 'firstCome',
          component: firstCome,
          children: [
            {
              path: 'firstCome1',
              name: 'firstCome1',
              component: firstCome1,
            },
            {
              path: 'firstCome2',
              name: 'firstCome2',
              component: firstCome2,
            },
            {
              path: 'firstCome3',
              name: 'firstCome3',
              component: firstCome3,
            },
            {
              path: 'inclChoose',
              name: 'inclChoose',
              component: inclChoose,
            }
          ]
        },
        {
          path: 'comeback',
          name: 'comeBack',
          component: comeBack
        },    
      ]
    },

    {
      path: '/adminmain',
      name: 'adminmain',
      component: adminmain
    },
    {
      path: '/admin',
      name: 'adminlogin',
      component: adminlogin
    }
)
