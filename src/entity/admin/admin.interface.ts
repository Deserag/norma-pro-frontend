export interface IUserCardPanel {
    id: string;
    fullName: string;
    email: string;
    avatarUrl?: string;
    age?: number;
    description?: string;
    isActive: boolean;
    role?: string;
    company?: string;
    createdAt: Date;
    updatedAt: Date;
}