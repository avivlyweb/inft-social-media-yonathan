import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  pollVotes: defineTable({
    ageGroup: v.string(),
    dailyHours: v.number(),
    primaryGoal: v.string(),
    impact: v.string(),
    createdAt: v.number(),
  }),
  feedback: defineTable({
    author: v.string(),
    role: v.string(),
    comment: v.string(),
    rating: v.number(),
    createdAt: v.number(),
  }),
});
