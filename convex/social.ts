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

// Like a feedback item
export const likeFeedback = mutation({
  args: {
    id: v.id("feedback"),
  },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (!item) return;
    const currentLikes = item.likes || 0;
    await ctx.db.patch(args.id, { likes: currentLikes + 1 });
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

// Save anonymous quiz result
export const submitQuizResult = mutation({
  args: {
    score: v.number(),
    hours: v.number(),
    inBed: v.boolean(),
    notifications: v.boolean(),
    morningScroll: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quizResults", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Get benchmark stats across all completed quizzes
export const getQuizStats = query({
  handler: async (ctx) => {
    const results = await ctx.db.query("quizResults").collect();
    const totalCount = results.length;
    if (totalCount === 0) {
      return {
        totalCount: 0,
        averageHours: 3.8,
        averageScore: 68,
        percentInBed: 74,
      };
    }
    const sumHours = results.reduce((acc, r) => acc + r.hours, 0);
    const sumScore = results.reduce((acc, r) => acc + r.score, 0);
    const countInBed = results.filter((r) => r.inBed).length;
    return {
      totalCount,
      averageHours: Number((sumHours / totalCount).toFixed(1)),
      averageScore: Math.round(sumScore / totalCount),
      percentInBed: Math.round((countInBed / totalCount) * 100),
    };
  },
});
