import { HTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledInputProps {
  id: string;
  name: string;
  errorMessage?: string;
}

export interface StyledInputProps {
  bgColor?: string;
  textColor?: string;
}

export interface OngType {
  OngTypeId: number;
  Name: string;
}

export interface JobType {
  JobTypeId: number;
  Name: string;
}

export interface Assistant {
  AssistantId: number;
  Name: string;
  Cnpj_Cpf: string;
  Phone: string;
  Cep: string;
  Email: string;
  UserId: string;
}

export interface Post {
  PostId: string;
  Title: string;
  Content: string;
  OngId: number;
  JobTypeId: number;
  CreatedAt: Date;
  FinishedAt: Date;
  AssignedAt: Date;
  AssistantId: number;
  JobType?: JobType;
  Assistant?: Assistant;
}
