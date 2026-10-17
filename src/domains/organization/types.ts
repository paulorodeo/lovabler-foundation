/**
 * Domain models — Organização (categorias / áreas da Mecânica).
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, EntityMetaData, MediaAsset } from "@/types";

export interface Category extends BaseEntity {
  kind: "category";
  title: string;
  description: string;
  /** Termos do universo semântico agrupados nesta área. */
  terms?: readonly string[];
  coverImage?: MediaAsset;
  metadata?: EntityMetaData;
}
