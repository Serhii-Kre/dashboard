import { add } from '../util/user-data.js';
import { createJSONToken } from '../util/auth.js';
import { isValidEmail } from '../util/validation.js';

export const signupRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res, next) => {
        const data = req.body;
        let errors = {};
      
        if (!isValidEmail(data.email)) {
          errors.email = 'Invalid email.';
        } else {
          try {
            const existingUser = await get(data.email);
            if (existingUser) {
              errors.email = 'Email exists already.';
            }
          } catch (error) {}
        }
      
         
        if (Object.keys(errors).length > 0) {
          return res.status(422).json({
            message: 'User signup failed due to validation errors.',
            errors,
          });
        }
      
        try {
          const createdUser = await add(data);
          const authToken = createJSONToken(createdUser.email);
          res
            .status(201)
            .json({ message: 'User created.', user: createdUser, token: authToken });
        } catch (error) {
          next(error);
        }
    },
};