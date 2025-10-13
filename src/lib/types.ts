export type MediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata?: Record<string, unknown> | null;
};

type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, MediaFormat>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Project = {
  id: number;
  documentId: string;
  projectCode: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  cover: Media;
  gallery?: Media[];
};

export type OngoingProjectPreview = Pick<
  Project,
  "title" | "slug" | "type" | "startDate"
>;

export type PastProjectPreview = Pick<
  Project,
  | "id"
  | "title"
  | "slug"
  | "startDate"
  | "endDate"
  | "type"
  | "cover"
  | "projectCode"
>;

export type OngoingProject = {
  id: number;
  documentId: string;
  title: string;
  projectCode: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Media;
  gallery?: Media[];
  slug: string;
  type: string;
  description: string;
  content?: string;
};

export type PastProject = {
  id: number;
  documentId: string;
  projectCode: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  cover: Media;
  gallery?: Media[];
};
