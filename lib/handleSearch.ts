import data from '../dictionary.json';

export function  handleSearch(keyword: string) {
    if (!keyword) {
        return [data];
    }

    const keywordLc = keyword.toLowerCase();
    const nextKeys: string[] = [];

    const items = data.filter((item) => {
        const terms = item.nadsat.toLowerCase().split(', ');

        return terms.some(term => {
            const isMatch = term.startsWith(keywordLc);
            
            if(isMatch && term.length > keywordLc.length) {
                nextKeys.push(term[keywordLc.length + 1].toUpperCase());
            }

            return isMatch;
        });
    });

    return [items, nextKeys];
}