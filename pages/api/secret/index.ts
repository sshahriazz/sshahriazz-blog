import {getSession} from 'next-auth/react'
import { NextRequest, NextResponse } from 'next/server';

export default async function secret (req: any, res: any)  {
    const session = await getSession({req});
    if(session) {
        res.send({
            content: 'Welcome to secret page'
        })
    }
    else {
        res.send({
            error: "you need to be signed in"
        })
    }
}