import { defineCollection, z } from 'astro:content';

// 既存のブログ設定
const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tags: z.string(),
		publishedAt: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// --- ここから追加：作品（Photo）詳細用の設定 ---
const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		// Photoページの一覧で表示する画像パス
		photoImage: z.string(),
		// 作品の簡単な説明（任意）
		summary: z.string().optional(),
		publishedAt: z.coerce.date(),
		// 必要であればブログと同じ項目を持たせることも可能です
	}),
});
// --- ここまで追加 ---

// collections オブジェクトに projects を追加してエクスポート
export const collections = { blog, projects };