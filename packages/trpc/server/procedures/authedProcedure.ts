import {  isAuthed } from "../middlewares/sessionMiddleware";
import { procedure } from "../trpc";

const authedProcedure = procedure.use(isAuthed);


export default authedProcedure;
