export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
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
      code_history: {
        Row: {
          created_at: string;
          id: number;
          question_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          question_id: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          question_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'code_history_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      code_history_files: {
        Row: {
          code: string;
          code_history_id: number;
          created_at: string;
          file_name: string;
          id: number;
        };
        Insert: {
          code: string;
          code_history_id: number;
          created_at?: string;
          file_name: string;
          id?: number;
        };
        Update: {
          code?: string;
          code_history_id?: number;
          created_at?: string;
          file_name?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'code_history_files_code_history_id_fkey';
            columns: ['code_history_id'];
            referencedRelation: 'code_history';
            referencedColumns: ['id'];
          },
        ];
      };
      code_submission_files: {
        Row: {
          code: string;
          code_submission_id: number;
          created_at: string;
          file_name: string;
          id: number;
        };
        Insert: {
          code: string;
          code_submission_id: number;
          created_at?: string;
          file_name: string;
          id?: number;
        };
        Update: {
          code?: string;
          code_submission_id?: number;
          created_at?: string;
          file_name?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'code_submission_files_code_submission_id_fkey';
            columns: ['code_submission_id'];
            referencedRelation: 'code_submissions';
            referencedColumns: ['id'];
          },
        ];
      };
      code_submissions: {
        Row: {
          created_at: string;
          id: number;
          question_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          question_id: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          question_id?: string;
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
      project_bug_submissions: {
        Row: {
          created_at: string;
          description: string;
          id: number;
          is_fixed: boolean;
          project_id: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: number;
          is_fixed?: boolean;
          project_id: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: number;
          is_fixed?: boolean;
          project_id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'project_bug_submissions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      project_submissions: {
        Row: {
          completed_tasks: number[] | null;
          created_at: string;
          github_link: string;
          id: number;
          live_link: string;
          project_id: string;
          user_id: string;
        };
        Insert: {
          completed_tasks?: number[] | null;
          created_at?: string;
          github_link?: string;
          id?: number;
          live_link?: string;
          project_id: string;
          user_id?: string;
        };
        Update: {
          completed_tasks?: number[] | null;
          created_at?: string;
          github_link?: string;
          id?: number;
          live_link?: string;
          project_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_submissions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
