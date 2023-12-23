import { randomUUID } from 'crypto';
import { mysqlTable, text, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { InferModel, relations } from 'drizzle-orm';

export const users = mysqlTable('users', {
  id: varchar("id", {
    length: 100
  }).primaryKey().$defaultFn(() => randomUUID().toString()),
  name: varchar("name", {
    length: 256
  }).notNull(),
  username: varchar("username", {
    length: 50
  }).notNull(),
  email: varchar("email", {
    length: 100
  }).notNull(),
  universityID: varchar("university", {
    length: 100
  }).references(() => universities.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }).notNull()
}, (users) => ({
  usernameIndex: uniqueIndex('username_idx').on(users.username),
  emailIndex: uniqueIndex('email_idx').on(users.email),
}));
export type User = InferModel<typeof users>;


export const universities = mysqlTable('universities', {
  id: varchar("id", {
    length: 100,
  }).primaryKey().$defaultFn(() => randomUUID().toString()),
  name: varchar("name", {
    length: 255
  }).notNull(),
  slug: varchar("slug", {
    length: 100
  }).notNull(),
  description: varchar("description", {
    length: 255
  }),
}, (universities) => ({
  slugIndex: uniqueIndex('slug_idx').on(universities.slug)
}))
export type University = InferModel<typeof universities>;


export const universityR = relations(universities, ({ many }) => ({
  students: many(users)
}))
export const userR = relations(users, ({ one }) => ({
  university: one(universities, {
    fields: [users.universityID],
    references: [universities.id]
  })
}))
