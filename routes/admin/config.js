var config = {
    domain: {
        host: 'http://localhost',
        port: '3001'
    },
    blogName: 'postit',
    blogDescription: 'Small lightweight and real-time system blogging',
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'blogio'
    },
    url: {
        getUrlConfig: '/config',
        blogHome: '/demo',
        admin: {
            index: '/admin',
            posts: '/admin/posts',
            categories: '/admin/categories',
            logout: '/logout',
            users: '/admin/users'
        },
        create: {
            post: '/create/post',
            user: '/create/user'
        },
        remove: {
            post: '/remove/post',
            user: '/remove/user'
        },
        edit: {
            post: '/edit/post',
            user: '/edit/user'
        },
        blog: {
            post: '/post',
            page: '',
            category: '/category',
            tag: '/tag'
        }
    }
};

module.exports = config;