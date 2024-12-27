'use client';

import { useRouter } from 'next/navigation';
import React, { startTransition, useActionState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { getCsrfToken, signIn, useSession, signOut } from 'next-auth/react'

import { LoginActionState, loginPrivy } from '../actions';

export default function Page() {
  const router = useRouter();
  const {login, ready, authenticated, logout} = usePrivy();

  const [state, formAction] = useActionState<LoginActionState>(
    loginPrivy,
    {
      status: 'idle',
    },
  );

  // if (ready && authenticated) {
  //   console.log('ready and authenticated');
  //   startTransition(() => {
  //     loginPrivy();
  //     // router.push('/');
  //   });
  // }

  useEffect(() => {
    if (ready && authenticated) {
      console.log('ready and authenticated');
      console.log('signIn success');
      // router.push('/');
      
    } else if (ready && !authenticated) {
      console.log('ready and not authenticated');
      login(); // show login modal
    }
  }, [ready, authenticated]);

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      {ready && !authenticated && <>
        <form action={formAction}>
          {/* <input type="hidden" name="csrfToken" value={getCsrfToken()} /> */}
          <button type="submit">Login</button>
        </form>
      </>}
      
      {ready && authenticated && <><br /><button onClick={() => logout()}>Logout</button></>}
    </div>
  );
}
