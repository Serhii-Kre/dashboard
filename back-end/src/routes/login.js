import { get } from '../util/user-data.js';
import { createJSONToken, isValidPassword } from '../util/auth.js';

export const loginRoute = {
    path: '/api/login',
    method: 'post',
    handler: async(req, res) => {
        const email = req.body.email;
        const password = req.body.password;
console.log(email)
        let user;
        try {
        
            user = await get(email);    
            console.log(user)
        } catch (error) {
            return res.status(401).json({
                message: 'Authentication failed.'
            });
        }

        const pwIsValid = await isValidPassword(password, user.password);
        if (!pwIsValid) {
            return res.status(422).json({
                message: 'Invalid credentials.',
                errors: {
                    credentials: 'Invalid email or password entered.'
                },
            });
        }

        const token = createJSONToken(email);
        res.json({
            token
        });
    },
};