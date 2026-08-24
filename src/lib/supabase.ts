// Supabase is temporarily disabled.
// The client is stubbed out so the app compiles without env vars.

export const supabase = {
  from: (_table: string) => ({
    insert: async (_data: unknown) => ({ error: null }),
  }),
} as const;
