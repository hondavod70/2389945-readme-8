import { BaseModel } from "./base.interface";

export interface BasePost extends BaseModel {
  id?: string;
  title: string;
  tags?: string[];
  ownerId: string;
}


export interface TextPost extends BasePost {
  description: string;
  text: string;
}

export interface PhotoPost extends BasePost {
  link: string;
}

export interface VideoPost extends BasePost {
  link: string;
}


export interface QuotePost extends BasePost {
  author: string;
  text: string;
}

export interface LinkPost extends BasePost {
  link: string;
  description?: string;
}
