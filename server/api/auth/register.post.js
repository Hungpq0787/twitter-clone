import { createUser } from '~/server/db/user';
import { userTransformer } from '~/server/transformers/user';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event, sendError({ statusCode: 400, statusMessage: 'Invalid params' }))
  }

  if (password !== repeatPassword) {
    return sendError(event, sendError({ statusCode: 400, statusMessage: 'Password do not match' }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData)
  return {
    body: userTransformer(user)
  }
})