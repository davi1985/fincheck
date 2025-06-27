export type UserId = string;
export type CategoryId = string;

export type ValidateCategoryOwnershipParams = {
  userId: UserId;
  categoryId: CategoryId;
};
