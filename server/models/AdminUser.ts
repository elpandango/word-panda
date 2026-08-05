import mongoose from 'mongoose'
import { getModel } from '../utils/mongoose'

export interface AdminUser {
  _id?: string
  email: string
  passwordHash: string
  role: 'admin'
  createdAt: string
  updatedAt: string
}

const adminUserSchema = new mongoose.Schema<AdminUser>(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true, default: 'admin' },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
)

export const AdminUserModel = getModel<AdminUser>('AdminUser', adminUserSchema)
