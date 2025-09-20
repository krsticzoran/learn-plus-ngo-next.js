export type OngoingProject = {
  id: number;
  documentId: string;
  title: string;
  projectCode: string;
  startDate: string;
  endDate: string;
  coordinator: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  partners: { id: number; content: string }[];
};
