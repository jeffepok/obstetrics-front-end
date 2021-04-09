// const AdminBro:any =  'admin-bro';
// const AdminBroExpress:any = '@admin-bro/express';
// const AdminBroMongoose:any = '@admin-bro/mongoose';

// const mongoose:any = 'mongoose';

// AdminBro.registerAdapter(AdminBroMongoose);
// const adminBro = new AdminBro({
//     version: {
//         admin: true,
//     },
//     databases: [mongoose],
//     loginPath: '/landing',
//     rootPath: '/admin',
//     // dashboard: {
//     //     handler: async () => {
//     //         return { some: 'output' }
//     //     },
//     //     component: AdminBro.bundle('../../views/admin/admin-login/my-dashboard-component')
//     // },
//     branding:{
//         logo: false,
//         companyName: 'Obstetrics Data Collection',
//         softwareBrothers: false,
//         theme: {
//             colors: {
//                 primary100: 'rgba(244, 114, 182)',
//                 hoverBg: 'rgba(236, 72, 153)'
//             }
//         }
//     }
// })
// const ADMIN = {
//     email: process.env.ADMIN_EMAIL || 'admin@example.com',
//     password: process.env.ADMIN_PASSWORD || '8vpawh75ttrcu2',
// }
// const adminRoute = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
//     cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
//     cookiePassword: process.env.ADMIN_COOKIE_PASS || 'default-password',
//     authenticate: async (email:string, password:string) =>{
//         if(email === ADMIN.email && password === ADMIN.password){
//             return ADMIN;
//         }
//         return null;
//     },
// }, null, {
//     resave: false,
//     saveUninitialized: true,
// });

// export default adminRoute;
