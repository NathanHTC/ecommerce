import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { User } from '../../payload/payload-types'

//if JWT is valid and user is retrieved, redirect valid
export const getMeUser = async (args?: {
  nullUserRedirect?: string
  validUserRedirect?: string
}): Promise<{
  user: User
  token: string
}> => {
  const { nullUserRedirect, validUserRedirect } = args || {}
  //read incoming HTTP request cookies
  const cookieStore = cookies()
  const token = cookieStore.get('payload-token')?.value

  //expecting the response to be user obj
  const meUserReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  const {
    user,
  }: {
    user: User
  } = await meUserReq.json()

  //redirecting valid user to a new route
  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect)
  }

  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  return {
    user,
    token,
  }
}
