export type ArticleSearchType = {
    slug: string;
    title: string;
    contentTitle: string;
    content: string;
    objectID: string;
    _highlightResult: {
        slug: {
            value: string;
            matchLevel: 'none' | 'full';
            fullyHighlighted?: boolean;
            matchedWords: string[];
        };
        title: {
            value: string;
            matchLevel: 'none' | 'full';
            fullyHighlighted?: boolean;
            matchedWords: string[];
        };
        contentTitle: {
            value: string;
            matchLevel: 'none' | 'full';
            fullyHighlighted?: boolean;
            matchedWords: string[];
        };
        content: {
            value: string;
            matchLevel: 'none' | 'full';
            fullyHighlighted?: boolean;
            matchedWords: string[];
        };
    };
    _snippetResult?: {
        content: {
            mathLevel: 'none' | 'full';
            value: string;
        };
    };
    __position: number;
};
//# sourceMappingURL=ArticleSearchType.d.ts.map