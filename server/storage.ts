import { drizzle } from "drizzle-orm/node-postgres";
import { desc, eq } from "drizzle-orm";
import pkg from "pg";
const { Pool } = pkg;
import { 
  contactMessages, 
  blogPosts,
  type InsertContactMessage, 
  type ContactMessage,
  type InsertBlogPost,
  type BlogPost 
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(limit?: number): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsCount(): Promise<number>;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    const query = db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt));
    if (limit) {
      return await query.limit(limit);
    }
    return await query;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async getBlogPostsCount(): Promise<number> {
    const posts = await db.select().from(blogPosts);
    return posts.length;
  }
}

export const storage = new DatabaseStorage();
