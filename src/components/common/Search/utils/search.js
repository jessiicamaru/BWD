import script from '@/script';

function findContentAndLink(searchString) {
    const pages = ['homePage', 'chungtichPage', 'vanhoaPage'];
    const results = [];

    if (!searchString) {
        return [];
    }

    pages.forEach((page) => {
        const pageData = script[page];
        if (pageData) {
            Object.values(pageData).forEach((item) => {
                if (item.content && item.link) {
                    if (item.content.includes(searchString)) {
                        results.push({ content: item.content, link: item.link });
                    }
                } else if (Array.isArray(item)) {
                    item.forEach((x) => {
                        if (x.content && x.link) {
                            if (x.content.includes(searchString)) {
                                results.push({ content: x.content, link: x.link });
                            }
                        }
                    });
                }
            });
        }
    });

    return results;
}

export default findContentAndLink;
