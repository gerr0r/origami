export default function createLinks(uid) {
    return [
        { name: 'Publications', path: '/' },
        { name: 'Post', path: '/post' },
        { name: 'Register', path: '/register' },
        { name: 'Login', path: '/login' },
        { name: 'Profile', path: `/profile/${uid}` }
    ]
}