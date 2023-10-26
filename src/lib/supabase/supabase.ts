import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bug_files: {
        Row: {
          bug_id: number;
          code: string;
          created_at: string;
          file_name: string;
          id: number;
        };
        Insert: {
          bug_id: number;
          code: string;
          created_at?: string;
          file_name: string;
          id?: number;
        };
        Update: {
          bug_id?: number;
          code?: string;
          created_at?: string;
          file_name?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'bug_files_bug_id_fkey';
            columns: ['bug_id'];
            referencedRelation: 'bug_submissions';
            referencedColumns: ['id'];
          },
        ];
      };
      bug_submissions: {
        Row: {
          created_at: string;
          description: string;
          id: number;
          is_fixed: boolean;
          question_id: string;
          sandbox_link: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: number;
          is_fixed?: boolean;
          question_id: string;
          sandbox_link?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: number;
          is_fixed?: boolean;
          question_id?: string;
          sandbox_link?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'bug_submissions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      code_submissions: {
        Row: {
          created_at: string;
          id: number;
          question_id: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          question_id?: string | null;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          question_id?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'code_submissions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      files: {
        Row: {
          code: string | null;
          created_at: string;
          file_name: string | null;
          id: number;
          submission_id: number | null;
        };
        Insert: {
          code?: string | null;
          created_at?: string;
          file_name?: string | null;
          id?: number;
          submission_id?: number | null;
        };
        Update: {
          code?: string | null;
          created_at?: string;
          file_name?: string | null;
          id?: number;
          submission_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'files_submission_id_fkey';
            columns: ['submission_id'];
            referencedRelation: 'code_submissions';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
