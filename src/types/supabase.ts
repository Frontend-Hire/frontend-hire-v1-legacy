export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
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
            isOneToOne: false;
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
            foreignKeyName: 'bug_submissions_user_id_fkey1';
            columns: ['user_id'];
            isOneToOne: false;
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
            foreignKeyName: 'code_history_user_id_fkey1';
            columns: ['user_id'];
            isOneToOne: false;
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
            isOneToOne: false;
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
            isOneToOne: false;
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
            foreignKeyName: 'code_submissions_user_id_fkey1';
            columns: ['user_id'];
            isOneToOne: false;
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
            foreignKeyName: 'project_bug_submissions_user_id_fkey1';
            columns: ['user_id'];
            isOneToOne: false;
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
            foreignKeyName: 'project_submissions_user_id_fkey1';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          display_name: string | null;
          email: string | null;
          has_pro_access: boolean | null;
          id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          display_name?: string | null;
          email?: string | null;
          has_pro_access?: boolean | null;
          id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          display_name?: string | null;
          email?: string | null;
          has_pro_access?: boolean | null;
          id?: string;
        };
        Relationships: [];
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
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
