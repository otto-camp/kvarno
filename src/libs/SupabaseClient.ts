import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://cayfrdfjjhwdayyqffva.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNheWZyZGZqamh3ZGF5eXFmZnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzNjU5MzYsImV4cCI6MTk4OTk0MTkzNn0.YGMO7k3CAe05RbUWJ9O3I7sS4D_T7tZ5Vv8ktVL6hIY',
);
