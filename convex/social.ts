import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Retrieve all feedback sorted by date
export const getFeedback = query({
  handler: async (ctx) => {
    return await ctx.db.query("feedback").order("desc").take(50);
  },
});

// Add feedback / review
export const addFeedback = mutation({
  args: {
    author: v.string(),
    role: v.string(),
    comment: v.string(),
    rating: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("feedback", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Retrieve aggregated poll counts
export const getPollStats = query({
  handler: async (ctx) => {
    const votes = await ctx.db.query("pollVotes").collect();
    return votes;
  },
});

// Cast a vote in live poll
export const castVote = mutation({
  args: {
    ageGroup: v.string(),
    dailyHours: v.number(),
    primaryGoal: v.string(),
    impact: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("pollVotes", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
