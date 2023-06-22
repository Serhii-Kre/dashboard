export const userProfile = {
    path: '/api/userProfile',
    method: 'post',
    handler: (req, res) => {
        res.status(200).send('It works!');
    },
};