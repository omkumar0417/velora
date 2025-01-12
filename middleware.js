export default function middleware(req, res, next) {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/admin')) {
        const authHeader = req.headers.get('authorization');
        if (!authHeader) {
            return new Response('Unauthorized', { status: 401, headers: { 'WWW-Authenticate': 'Basic' } });
        }

        const [scheme, encoded] = authHeader.split(' ');
        if (scheme !== 'Basic') {
            return new Response('Unauthorized', { status: 401, headers: { 'WWW-Authenticate': 'Basic' } });
        }

        const decoded = atob(encoded);
        const [username, password] = decoded.split(':');

        if (username !== 'admin' || password !== process.env.ADMIN_PASSWORD) {
            return new Response('Unauthorized', { status: 401, headers: { 'WWW-Authenticate': 'Basic' } });
        }
    }
    return next();
}
