import Header from './components/Header.vue';
import Home from './components/Home.vue';

// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

// Lazy load component bundles
// below require/ensure is webpack syntax not vue specific
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user'); // 2nd pram "user" will combine this and the bundle underneath together
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    });
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
}

export const routes = [
    {
        path: '',
        component: Home,
        components: {
            default: Home,
            headerTop: Header
        }
    },
    // {
    //     path: '/user',
    //     component: User
    // },
    // ,
    // {
    //     path: '/user/:id',
    //     component: User
    // },

    // Nested sub routes
    {
        path: '/user',
        component: User,
        components: {
            default: User,
            headerBottom: Header
        },
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log('Inside route beforeEnter');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    },

    // Redirects
    {
        path: '/redirect-me',
        redirect: '/user',
        // redirect: {
        //     name: 'userEdit'
        // }
    },

    // Catch all route (useful for 404s)
    {
        path: '*',
        redirect: '/'
    }
];
