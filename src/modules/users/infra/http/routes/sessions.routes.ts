import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionRouter = Router();
const sessionsController = new SessionsController();
sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionRouter;
