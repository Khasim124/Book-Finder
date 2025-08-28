export async function fetchBooks(query, type = "q") {
    try {
        const res = await fetch(
            `https://openlibrary.org/search.json?${type}=${encodeURIComponent(query)}&limit=30`
        );
        const data = await res.json();
        return data.docs || [];
    } catch (err) {
        console.error("Failed to fetch books:", err);
        return [];
    }
}
