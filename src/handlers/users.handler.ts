import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User, UserStore } from '../models/user'

dotenv.config()

const store = new UserStore()
export const index = async (_req: Request, res: Response) => {
  const users = await store.index()
  res.json(users)
}

export const show = async (req: Request, res: Response) => {
  const user = await store.show(req.params.id)
  res.json(user)
}

export const create = async (req: Request, res: Response) => {
  const user: User = req.body
  try {
    const newuser = await store.create(user)
    var token = jwt.sign({ newuser }, process.env.TOKEN_SECRET as string)
    res.json(token)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const user = await store.edit(req.params.id, req.body)
    res.json({
      status: 'Successful',
      data: { user }
    })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  const deleted = await store.delete(req.params.id)
  res.json({
    status: 'Successful'
  })
}

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await store.authenticate(email, password)
    var token = jwt.sign({ user }, process.env.TOKEN_SECRET as unknown as string)
    res.json(token)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}
