export const usersRoute = {
    path: '/api/users',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send('It works!');
    },
};