/**
 * 从 config/brands/*.json 加载品牌配置（构建时读取）。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  BrandId,
  BrandInput,
  BrandSharedConfig,
  BrandThemePalette,
} from "./brand-common";

const CONFIG_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "config/brands");

export interface BrandFileConfig {
  id: string;
  nameZh: string;
  nameEn: string;
  mainSiteUrl: string;
  logo: string;
  email: string;
  qqGroup?: string;
  qqGroupUrl?: string;
}

export interface BrandsIndexConfig {
  brands: string[];
  defaultBrand: string;
}

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

let cached: {
  index: BrandsIndexConfig;
  shared: BrandSharedConfig;
  files: BrandFileConfig[];
} | null = null;

export function loadBrandConfigBundle() {
  if (cached) return cached;

  const index = readJson<BrandsIndexConfig>(path.join(CONFIG_DIR, "index.json"));
  const shared = readJson<BrandSharedConfig>(path.join(CONFIG_DIR, "shared.json"));
  const files = index.brands.map((id) => {
    const file = readJson<BrandFileConfig>(path.join(CONFIG_DIR, `${id}.json`));
    if (file.id !== id) {
      throw new Error(`[brands] ${id}.json 内 id="${file.id}" 与文件名不一致`);
    }
    return file;
  });

  cached = { index, shared, files };
  return cached;
}

export function brandIds(): BrandId[] {
  return loadBrandConfigBundle().index.brands as BrandId[];
}

export function defaultBrandId(): BrandId {
  return loadBrandConfigBundle().index.defaultBrand as BrandId;
}

export function toBrandInput(file: BrandFileConfig): BrandInput {
  return {
    id: file.id as BrandId,
    nameZh: file.nameZh,
    nameEn: file.nameEn,
    mainSiteUrl: file.mainSiteUrl,
    logo: file.logo,
    email: file.email,
    qqGroup: file.qqGroup,
    qqGroupUrl: file.qqGroupUrl,
  };
}

export type { BrandSharedConfig, BrandThemePalette };
