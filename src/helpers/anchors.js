export default function createLinks(authenticated, user) {
    if (authenticated) {
        return [
            { name: 'Publications', path: '/' },
            { name: 'Post', path: '/post' },
            { name: 'Profile', path: `/profile/${user.id}` }
        ]
    } else {
        return [
            { name: 'Publications', path: '/' },
            { name: 'Register', path: '/register' },
            { name: 'Login', path: '/login' }
        ]
    }
}